import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetCronJobsService } from '../domain/services/GetCronJobsService'
import type { CronJob } from '../domain/entities/CronJob'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'

export class ApiGetCronJobsInfraestructure
  extends ApiInfraestructure
  implements GetCronJobsService
{
  async get(): Promise<CronJob[]> {
    return new ResourceClient<CronJob>(this.session, Endpoints.CRONTAB).gets()
  }
}
