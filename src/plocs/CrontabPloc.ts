import { DeleteCronJobsUseCase } from '@/core/crontab/application/DeleteCronJobsUseCase'
import { GetCronJobsUseCase } from '@/core/crontab/application/GetCronJobsUseCase'
import { SaveCronJobsUseCase } from '@/core/crontab/application/SaveCronJobsUseCase'
import { UpdateCronJobUseCase } from '@/core/crontab/application/UpdateCronJobUseCase'
import { container } from '@/core/crontab/di'
import type { CronJob } from '@/core/crontab/domain/entities/CronJob'
import { PlocBase } from './PlocBase'
import type { useToast } from 'vue-toastification'

export class CrontabPloc extends PlocBase<CronJob> {
  private getCronJobsUseCase: GetCronJobsUseCase
  private saveCronJobsUseCase: SaveCronJobsUseCase
  private updateCronJobUseCase: UpdateCronJobUseCase
  private deleteCronJobsUseCase: DeleteCronJobsUseCase

  constructor(toast: ReturnType<typeof useToast>) {
    super(toast)

    this.getCronJobsUseCase = container.resolve(GetCronJobsUseCase)
    this.saveCronJobsUseCase = container.resolve(SaveCronJobsUseCase)
    this.updateCronJobUseCase = container.resolve(UpdateCronJobUseCase)
    this.deleteCronJobsUseCase = container.resolve(DeleteCronJobsUseCase)
  }

  async getCronJobs(): Promise<CronJob[] | Error> {
    return this.gets(this.getCronJobsUseCase.execute())
  }

  async saveCronJob(cronJob: CronJob): Promise<CronJob | Error> {
    return this.save(this.saveCronJobsUseCase.execute(cronJob))
  }

  async updateCronJob(oldCronJob: CronJob, newCronJob: CronJob): Promise<CronJob | Error> {
    return this.update(this.updateCronJobUseCase.execute(oldCronJob, newCronJob))
  }

  async deleteCronJobs(cronJob: CronJob): Promise<boolean> {
    return this.delete(this.deleteCronJobsUseCase.execute(cronJob))
  }
}
