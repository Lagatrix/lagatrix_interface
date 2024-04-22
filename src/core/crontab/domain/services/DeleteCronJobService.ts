import type { CronJob } from '../entities/CronJob'

export interface DeleteCronJobService {
  delete(cronJob: CronJob): Promise<void>
}
