import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { PlocBase } from '../PlocBase'
import type { useToast } from 'vue-toastification'

export abstract class HardwarePloc<T> extends PlocBase<T> {
  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    super(actionsText, toast)
  }

  async getDynamicRecurse(promise: Promise<number>): Promise<number | Error> {
    try {
      return await promise
    } catch (error) {
      return new Error()
    }
  }
}
