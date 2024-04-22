import type { UseCase } from '@/core/shared/domain/UseCase'
import { injectable, inject } from 'tsyringe'
import type { Disk } from '../domain/entities/Disk'
import type { GetDiskService } from '../domain/services/GetDiskService'

@injectable()
export class GetDiskUseCase implements UseCase {
  constructor(@inject('GetDiskService') private getDiskService: GetDiskService) {}

  async execute(): Promise<Disk[]> {
    return this.getDiskService.get()
  }
}
