import type { CronJob } from '../entities/CronJob'

export interface SaveCronJobService {
  save(cronJob: CronJob): Promise<CronJob>
}
