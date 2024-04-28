import { GetRamUseCase } from '@/core/hardware/ram/application/GetRamUseCase'
import type { RamModule } from '@/core/hardware/ram/domain/entities/RamModule'
import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { container } from '@/core/hardware/ram/di'
import { useToast } from 'vue-toastification'
import { HardwarePloc } from './HardwarePloc'
import { GetRamUseUseCase } from '@/core/hardware/ram/application/GetRamUseUseCase'
import { RamUse } from '@/core/hardware/ram/domain/entities/RamUse'

export class RamPloc extends HardwarePloc<RamModule> {
  private getRamUseCase: GetRamUseCase
  private getRamUseUseCase: GetRamUseUseCase

  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    super(actionsText, toast)

    this.getRamUseCase = container.resolve(GetRamUseCase)
    this.getRamUseUseCase = container.resolve(GetRamUseUseCase)
  }

  async getRam(): Promise<RamModule[] | Error> {
    return this.gets(this.getRamUseCase.execute())
  }

  async getUse(): Promise<RamUse | Error> {
    return this.getDynamicRecurse<RamUse>(this.getRamUseUseCase.execute())
  }
}
