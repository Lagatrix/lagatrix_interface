import { type GetCpuService } from '../domain/services/GetCpuService'
import { type Cpu } from '../domain/entities/Cpu'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetCpuUseCase {
  constructor(@inject('GetCpuService') private getCpuService: GetCpuService) {}

  async execute(): Promise<Cpu> {
    return await this.getCpuService.get()
  }
}
