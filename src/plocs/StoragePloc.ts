import { GetDiskUseCase } from '@/core/storage/application/GetDiskUseCase'
import type { Disk } from '@/core/storage/domain/entities/Disk'
import { PlocBase } from './PlocBase'
import { container } from '@/core/storage/di'
import { useToast } from 'vue-toastification'

export class StoragePloc extends PlocBase<Disk> {
  private getDiskUseCase: GetDiskUseCase

  constructor(toast: ReturnType<typeof useToast>) {
    super(toast)

    this.getDiskUseCase = container.resolve(GetDiskUseCase)
  }

  async getDisks(): Promise<Disk[] | Error> {
    return this.gets(this.getDiskUseCase.execute())
  }
}
