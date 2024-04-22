import type { GetCpuUseService } from '../domain/services/GetCpuUseService'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetCpuUseUseCase {
  constructor(@inject('GetCpuUseService') private getCpuUseService: GetCpuUseService) {}

  async execute(): Promise<number> {
    return await this.getCpuUseService.get()
  }
}
