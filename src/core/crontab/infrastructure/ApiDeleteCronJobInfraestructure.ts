import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { CronJob } from '../domain/entities/CronJob'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import type { DeleteCronJobService } from '../domain/services/DeleteCronJobService'

export class ApiDeleteCronJobInfraestructure
  extends ApiInfraestructure
  implements DeleteCronJobService
{
  async delete(cronJob: CronJob): Promise<void> {
    await new ResourceClient<CronJob>(this.session, Endpoints.CRONTAB).delete(cronJob)
  }
}
