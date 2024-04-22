import { GetDiskUseCase } from '@/core/storage/application/GetDiskUseCase'
import type { Disk } from '@/core/storage/domain/entities/Disk'
import { PlocBase } from './PlocBase'
import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { container } from '@/core/storage/di'
import { useToast } from 'vue-toastification'

export class StoragePloc extends PlocBase<Disk> {
  private getDiskUseCase: GetDiskUseCase

  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    super(actionsText, toast)

    this.getDiskUseCase = container.resolve(GetDiskUseCase)
  }

  async getDisks(): Promise<Disk[] | Error> {
    return this.gets(this.getDiskUseCase.execute())
  }
}
