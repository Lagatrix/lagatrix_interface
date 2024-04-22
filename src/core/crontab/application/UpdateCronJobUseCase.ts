import { injectable, inject } from 'tsyringe'
import type { CronJob } from '../domain/entities/CronJob'
import type { UpdateCronJobService } from '../domain/services/UpdateCronJobService'

@injectable()
export class UpdateCronJobUseCase {
  constructor(@inject('UpdateCronJobService') private updateCronJobService: UpdateCronJobService) {}

  async execute(oldCronJob: CronJob, newCronJob: CronJob): Promise<CronJob> {
    return await this.updateCronJobService.update(oldCronJob, newCronJob)
  }
}
