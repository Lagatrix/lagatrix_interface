import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetRamUseService } from '../domain/services/GetRamUseService'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'
import { RamUse } from '../domain/entities/RamUse'

export class ApiGetRamUseInfraestructure extends ApiInfraestructure implements GetRamUseService {
  async get(): Promise<RamUse> {
    return new ResourceClient<RamUse>(this.session, `${Endpoints.RAM}/use`).get()
  }
}
