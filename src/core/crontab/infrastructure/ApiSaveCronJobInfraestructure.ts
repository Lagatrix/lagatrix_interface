import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { SaveCronJobService } from '../domain/services/SaveCronJobService'
import type { CronJob } from '../domain/entities/CronJob'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'

export class ApiSaveCronJobInfraestructure
  extends ApiInfraestructure
  implements SaveCronJobService
{
  async save(cronJob: CronJob): Promise<CronJob> {
    return new ResourceClient<CronJob>(this.session, Endpoints.CRONTAB).post(cronJob)
  }
}
