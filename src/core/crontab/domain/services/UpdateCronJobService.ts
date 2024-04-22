import type { CronJob } from '../entities/CronJob'

export interface UpdateCronJobService {
  update(oldCronJob: CronJob, newCrobJob: CronJob): Promise<CronJob>
}
