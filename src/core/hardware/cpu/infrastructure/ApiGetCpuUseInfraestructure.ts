import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'
import type { GetCpuUseService } from '../domain/services/GetCpuUseService'

export class ApiGetCpuUseInfraestructure extends ApiInfraestructure implements GetCpuUseService {
  async get(): Promise<number> {
    return new ResourceClient<number>(this.session, `${Endpoints.CPU}/use`).get()
  }
}
