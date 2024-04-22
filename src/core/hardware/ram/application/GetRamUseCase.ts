import type { GetRamService } from '../domain/services/GetRamService'
import type { RamModule } from '../domain/entities/RamModule'
import { injectable, inject } from 'tsyringe'

@injectable()
export class GetRamUseCase {
  constructor(@inject('GetRamService') private getRamService: GetRamService) {}

  async execute(): Promise<RamModule[]> {
    return await this.getRamService.get()
  }
}
