import { RamUse } from '../domain/entities/RamUse'
import type { GetRamUseService } from '../domain/services/GetRamUseService'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetRamUseUseCase {
  constructor(@inject('GetRamUseService') private getRamUseService: GetRamUseService) {}

  async execute(): Promise<RamUse> {
    return await this.getRamUseService.get()
  }
}
