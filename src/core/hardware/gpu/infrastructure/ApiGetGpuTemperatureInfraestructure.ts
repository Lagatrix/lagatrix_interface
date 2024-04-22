import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetGpuTemperatureService } from '../domain/services/GetGpuTemperatureService'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'

export class ApiGetGpuTemperatureInfraestructure
  extends ApiInfraestructure
  implements GetGpuTemperatureService
{
  async get(): Promise<number> {
    return new ResourceClient<number>(this.session, `${Endpoints.GPU}/temperature`).get()
  }
}
