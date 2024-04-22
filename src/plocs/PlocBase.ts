import { POSITION, useToast } from 'vue-toastification'
import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { NetworkError } from '@/core/shared/domain/errors/NetworkError'
import { Ref, ref } from 'vue'

export class PlocBase<T> {
  private toast: ReturnType<typeof useToast>
  private actionsText: ActionTexts
  private sending: Ref<boolean>

  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    this.toast = toast
    this.actionsText = actionsText
    this.sending = ref(false)
  }

  public isSending(): boolean {
    return this.sending.value
  }

  protected async gets(promise: Promise<T[]>): Promise<T[] | Error> {
    this.sending.value = true
    try {
      return await Promise.resolve<T[]>(promise)
    } catch (error) {
      this.manageError(error)

      return Error()
    } finally {
      this.sending.value = false
    }
  }

  protected async get(promise: Promise<T>): Promise<T | Error> {
    this.sending.value = true
    try {
      return await Promise.resolve<T>(promise)
    } catch (error) {
      this.manageError(error)

      return Error()
    } finally {
      this.sending.value = false
    }
  }

  protected async update(promise: Promise<T>): Promise<T | Error> {
    try {
      const resolved = await Promise.resolve<T>(promise)

      this.seeToastSucess(this.actionsText.updateSucessText!)

      return resolved
    } catch (error) {
      this.manageError(error)

      return Error()
    }
  }

  protected async save(promise: Promise<T>): Promise<T | Error> {
    try {
      const resolved = await Promise.resolve<T>(promise)

      this.seeToastSucess(this.actionsText.createSucessText!)

      return resolved
    } catch (error) {
      this.manageError(error)

      return Error()
    }
  }

  protected async delete(promise: Promise<void>): Promise<boolean> {
    try {
      await Promise.resolve<void>(promise)

      this.seeToastSucess(this.actionsText.deleteSucessText!)

      return true
    } catch (error) {
      this.manageError(error)

      return false
    }
  }

  protected manageError(error: unknown): void {
    if (error instanceof Error) {
      if (error instanceof NetworkError) {
        this.seeToastError('this.actionsText.getErrorText!', error.message)
        window.location.href = '/login'
      } else {
        this.seeToastError(this.actionsText.getErrorText!, error.message)
      }
    }
  }

  private seeToastSucess(shortErrorDescription: string): void {
    this.toast.error(shortErrorDescription, {
      position: POSITION.BOTTOM_RIGHT,
      timeout: 50000,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeOnClick: false
    })
  }

  private seeToastError(shortErrorDescription: string, longErrorDescription: string): void {
    this.toast.error(shortErrorDescription, {
      position: POSITION.BOTTOM_RIGHT,
      timeout: 50000,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeOnClick: false,
      onClick: () => {
        console.log(longErrorDescription)
      }
    })
  }
}
