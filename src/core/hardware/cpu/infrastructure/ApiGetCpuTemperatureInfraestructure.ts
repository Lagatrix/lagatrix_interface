import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import type { GetCpuTemperatureService } from '../domain/services/GetCpuTemperatureService'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'

export class ApiGetCpuTemperatureInfraestructure
  extends ApiInfraestructure
  implements GetCpuTemperatureService
{
  async get(): Promise<number> {
    return new ResourceClient<number>(this.session, `${Endpoints.CPU}/temperature`).get()
  }
}
