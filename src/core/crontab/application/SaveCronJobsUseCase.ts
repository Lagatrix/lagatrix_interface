import { injectable, inject } from 'tsyringe'
import type { CronJob } from '../domain/entities/CronJob'
import type { SaveCronJobService } from '../domain/services/SaveCronJobService'

@injectable()
export class SaveCronJobsUseCase {
  constructor(@inject('SaveCronJobService') private saveCronJobService: SaveCronJobService) {}

  async execute(cronJob: CronJob): Promise<CronJob> {
    return await this.saveCronJobService.save(cronJob)
  }
}
