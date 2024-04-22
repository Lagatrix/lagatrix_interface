import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { UpdateCronJobService } from '../domain/services/UpdateCronJobService'
import type { CronJob } from '../domain/entities/CronJob'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'

export class ApiUpdateCronJobInfraestructure
  extends ApiInfraestructure
  implements UpdateCronJobService
{
  async update(oldCronJob: CronJob, newCrobJob: CronJob): Promise<CronJob> {
    return new ResourceClient<CronJob>(this.session, Endpoints.CRONTAB).put(oldCronJob, newCrobJob)
  }
}
