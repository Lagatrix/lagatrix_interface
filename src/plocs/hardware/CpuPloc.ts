import { GetCpuUseCase } from '@/core/hardware/cpu/application/GetCpuUseCase'
import type { Cpu } from '@/core/hardware/cpu/domain/entities/Cpu'
import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { container } from '@/core/hardware/cpu/di'
import { useToast } from 'vue-toastification'
import { HardwarePloc } from './HardwarePloc'
import { GetCpuUseUseCase } from '@/core/hardware/cpu/application/GetCpuUseUseCase'
import { GetCpuTemperatureUseCase } from '@/core/hardware/cpu/application/GetCpuTemperatureUseCase'

export class CpuPloc extends HardwarePloc<Cpu> {
  private getCpuUseCase: GetCpuUseCase
  private getCpuUseUseCase: GetCpuUseUseCase
  private getCpuTemperatureUseCase: GetCpuTemperatureUseCase

  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    super(actionsText, toast)

    this.getCpuUseCase = container.resolve(GetCpuUseCase)
    this.getCpuUseUseCase = container.resolve(GetCpuUseUseCase)
    this.getCpuTemperatureUseCase = container.resolve(GetCpuTemperatureUseCase)
  }

  async getCpu(): Promise<Cpu | Error> {
    return this.get(this.getCpuUseCase.execute())
  }

  async getUse(): Promise<number | Error> {
    return this.getDynamicRecurse(this.getCpuUseUseCase.execute())
  }

  async getTemperature(): Promise<number | Error> {
    return this.getDynamicRecurse(this.getCpuTemperatureUseCase.execute())
  }
}
