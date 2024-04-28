import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { PlocBase } from '../PlocBase'
import type { useToast } from 'vue-toastification'

export abstract class HardwarePloc<T> extends PlocBase<T> {
  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    super(actionsText, toast)
  }

  protected async getDynamicRecurse<K>(promise: Promise<K>): Promise<K | Error> {
    try {
      return await promise
    } catch (error) {
      return new Error()
    }
  }
}
