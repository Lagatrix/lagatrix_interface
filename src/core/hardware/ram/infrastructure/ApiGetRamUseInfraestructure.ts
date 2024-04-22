import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetRamUseService } from '../domain/services/GetRamUseService'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'

export class ApiGetRamUseInfraestructure extends ApiInfraestructure implements GetRamUseService {
  async get(): Promise<number> {
    return new ResourceClient<number>(this.session, `${Endpoints.RAM}/use`).get()
  }
}
