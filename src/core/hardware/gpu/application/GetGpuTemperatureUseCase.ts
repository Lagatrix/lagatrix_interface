import type { GetGpuTemperatureService } from '../domain/services/GetGpuTemperatureService'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetGpuTemperatureUseCase {
  constructor(
    @inject('GetGpuTemperatureService') private getGpuTemperatureService: GetGpuTemperatureService
  ) {}

  async execute(): Promise<number> {
    return await this.getGpuTemperatureService.get()
  }
}
