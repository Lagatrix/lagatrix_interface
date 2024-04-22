import type { GetGpuUseService } from '../domain/services/GetGpuUseService'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetGpuUseUseCase {
  constructor(@inject('GetGpuUseService') private getGpuUseService: GetGpuUseService) {}

  async execute(): Promise<number> {
    return await this.getGpuUseService.get()
  }
}
