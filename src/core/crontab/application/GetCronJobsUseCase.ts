import { injectable, inject } from 'tsyringe'
import type { CronJob } from '../domain/entities/CronJob'
import type { GetCronJobsService } from '../domain/services/GetCronJobsService'

@injectable()
export class GetCronJobsUseCase {
  constructor(@inject('GetCronJobsService') private getCronJobsService: GetCronJobsService) {}

  async execute(): Promise<CronJob[]> {
    return await this.getCronJobsService.get()
  }
}
