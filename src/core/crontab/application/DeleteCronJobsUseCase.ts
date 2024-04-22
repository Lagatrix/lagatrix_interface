import { injectable, inject } from 'tsyringe'
import type { CronJob } from '../domain/entities/CronJob'
import type { DeleteCronJobService } from '../domain/services/DeleteCronJobService'

@injectable()
export class DeleteCronJobsUseCase {
  constructor(@inject('DeleteCronJobService') private deleteCronJobService: DeleteCronJobService) {}

  async execute(cronJob: CronJob): Promise<void> {
    await this.deleteCronJobService.delete(cronJob)
  }
}
