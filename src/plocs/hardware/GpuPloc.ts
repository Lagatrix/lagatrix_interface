import { GetGpuUseCase } from '@/core/hardware/gpu/application/GetGpuUseCase'
import type { Gpu } from '@/core/hardware/gpu/domain/entities/Gpu'
import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { container } from '@/core/hardware/gpu/di'
import { useToast } from 'vue-toastification'
import { HardwarePloc } from './HardwarePloc'
import { GetGpuUseUseCase } from '@/core/hardware/gpu/application/GetGpuUseUseCase'
import { GetGpuTemperatureUseCase } from '@/core/hardware/gpu/application/GetGpuTemperatureUseCase'

export class GpuPloc extends HardwarePloc<Gpu> {
  private getGpuUseCase: GetGpuUseCase
  private getGpuUseUseCase: GetGpuUseUseCase
  private getGpuTemperatureUseCase: GetGpuTemperatureUseCase

  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    super(actionsText, toast)

    this.getGpuUseCase = container.resolve(GetGpuUseCase)
    this.getGpuUseUseCase = container.resolve(GetGpuUseUseCase)
    this.getGpuTemperatureUseCase = container.resolve(GetGpuTemperatureUseCase)
  }

  async getGpu(): Promise<Gpu | Error> {
    return this.get(this.getGpuUseCase.execute())
  }

  async getUse(): Promise<number | Error> {
    return this.getDynamicRecurse(this.getGpuUseUseCase.execute())
  }

  async getTemperature(): Promise<number | Error> {
    return this.getDynamicRecurse(this.getGpuUseUseCase.execute())
  }
}
