import type { GetRamUseService } from '../domain/services/GetRamUseService'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetRamUseUseCase {
  constructor(@inject('GetRamUseService') private getRamUseService: GetRamUseService) {}

  async execute(): Promise<number> {
    return await this.getRamUseService.get()
  }
}
