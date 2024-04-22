import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetGpuUseService } from '../domain/services/GetGpuUseService'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'

export class ApiGetGpuUseInfraestructure extends ApiInfraestructure implements GetGpuUseService {
  async get(): Promise<number> {
    return new ResourceClient<number>(this.session, `${Endpoints.GPU}/use`).get()
  }
}
