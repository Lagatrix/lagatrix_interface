import type { CronJob } from '../entities/CronJob'

export interface GetCronJobsService {
  get(): Promise<CronJob[]>
}
