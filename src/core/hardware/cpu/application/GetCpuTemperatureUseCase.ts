import type { GetCpuTemperatureService } from '../domain/services/GetCpuTemperatureService'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetCpuTemperatureUseCase {
  constructor(
    @inject('GetCpuTemperatureService') private getCpuTemperatureService: GetCpuTemperatureService
  ) {}

  async execute(): Promise<number> {
    return await this.getCpuTemperatureService.get()
  }
}
