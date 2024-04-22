import type { GetGpuService } from '../domain/services/GetGpuService'
import type { Gpu } from '../domain/entities/Gpu'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetGpuUseCase {
  constructor(@inject('GetGpuService') private getGpuService: GetGpuService) {}

  async execute(): Promise<Gpu> {
    return await this.getGpuService.get()
  }
}
