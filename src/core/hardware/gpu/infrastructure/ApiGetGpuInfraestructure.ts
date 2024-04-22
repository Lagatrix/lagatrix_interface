import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetGpuService } from '../domain/services/GetGpuService'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'
import type { Gpu } from '../domain/entities/Gpu'

export class ApiGetGpuInfraestructure extends ApiInfraestructure implements GetGpuService {
  async get(): Promise<Gpu> {
    return new ResourceClient<Gpu>(this.session, Endpoints.GPU).get()
  }
}
