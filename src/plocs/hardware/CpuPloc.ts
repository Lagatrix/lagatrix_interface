import { GetCpuUseCase } from '@/core/hardware/cpu/application/GetCpuUseCase'
import type { Cpu } from '@/core/hardware/cpu/domain/entities/Cpu'
import { container } from '@/core/hardware/cpu/di'
import { useToast } from 'vue-toastification'
import { GetCpuUseUseCase } from '@/core/hardware/cpu/application/GetCpuUseUseCase'
import { GetCpuTemperatureUseCase } from '@/core/hardware/cpu/application/GetCpuTemperatureUseCase'
import { HardwarePloc } from './HardwarePloc'

export class CpuPloc extends HardwarePloc<Cpu> {
  private getCpuUseCase: GetCpuUseCase
  private getCpuUseUseCase: GetCpuUseUseCase
  private getCpuTemperatureUseCase: GetCpuTemperatureUseCase

  constructor(toast: ReturnType<typeof useToast>) {
    super(toast)

    this.getCpuUseCase = container.resolve(GetCpuUseCase)
    this.getCpuUseUseCase = container.resolve(GetCpuUseUseCase)
    this.getCpuTemperatureUseCase = container.resolve(GetCpuTemperatureUseCase)
  }

  async getProcessor(): Promise<Cpu | Error> {
    return this.get(this.getCpuUseCase.execute())
  }

  async getUse(): Promise<number | Error> {
    return this.getDynamicRecurse(this.getCpuUseUseCase.execute())
  }

  async getTemperature(): Promise<number | Error> {
    return this.getDynamicRecurse(this.getCpuTemperatureUseCase.execute())
  }
}
