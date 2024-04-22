import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetRamService } from '../domain/services/GetRamService'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'
import type { RamModule } from '../domain/entities/RamModule'

export class ApiGetRamInfraestructure extends ApiInfraestructure implements GetRamService {
  async get(): Promise<RamModule[]> {
    return new ResourceClient<RamModule>(this.session, Endpoints.RAM).gets()
  }
}
