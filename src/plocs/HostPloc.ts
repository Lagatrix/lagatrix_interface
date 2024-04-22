import { GetHostUseCase } from '@/core/host/application/GetHostUseCase'
import type { Host } from '@/core/host/domain/entities/Host'
import { PlocBase } from './PlocBase'
import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { container } from '@/core/host/di'
import { useToast } from 'vue-toastification'

export class HostPloc extends PlocBase<Host> {
  private getHostUseCase: GetHostUseCase

  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    super(actionsText, toast)

    this.getHostUseCase = container.resolve(GetHostUseCase)
  }

  async getHost(): Promise<Host | Error> {
    return this.get(this.getHostUseCase.execute())
  }
}
