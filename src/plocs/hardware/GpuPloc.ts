import { GetGpuUseCase } from '@/core/hardware/gpu/application/GetGpuUseCase'
import type { Gpu } from '@/core/hardware/gpu/domain/entities/Gpu'
import { container } from '@/core/hardware/gpu/di'
import { useToast } from 'vue-toastification'
import { GetGpuUseUseCase } from '@/core/hardware/gpu/application/GetGpuUseUseCase'
import { GetGpuTemperatureUseCase } from '@/core/hardware/gpu/application/GetGpuTemperatureUseCase'
import { HardwarePloc } from './HardwarePloc'

export class GpuPloc extends HardwarePloc<Gpu> {
  private getGpuUseCase: GetGpuUseCase
  private getGpuUseUseCase: GetGpuUseUseCase
  private getGpuTemperatureUseCase: GetGpuTemperatureUseCase

  constructor(toast: ReturnType<typeof useToast>) {
    super(toast)

    this.getGpuUseCase = container.resolve(GetGpuUseCase)
    this.getGpuUseUseCase = container.resolve(GetGpuUseUseCase)
    this.getGpuTemperatureUseCase = container.resolve(GetGpuTemperatureUseCase)
  }

  async getProcessor(): Promise<Gpu | Error> {
    return this.get(this.getGpuUseCase.execute())
  }

  async getUse(): Promise<number | Error> {
    return this.getDynamicRecurse(this.getGpuUseUseCase.execute())
  }

  async getTemperature(): Promise<number | Error> {
    return this.getDynamicRecurse(this.getGpuTemperatureUseCase.execute())
  }
}
