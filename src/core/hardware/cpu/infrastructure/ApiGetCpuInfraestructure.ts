import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import { type Cpu } from '../domain/entities/Cpu'
import { type GetCpuService } from '../domain/services/GetCpuService'
import { ApiInfraestructure } from '@/core/shared/infrastructure/ApiInfraestructure'
import { ResourceClient } from '@/core/shared/infrastructure/ApiFactory'

export class ApiGetCpuInfraestructure extends ApiInfraestructure implements GetCpuService {
  async get(): Promise<Cpu> {
    return new ResourceClient<Cpu>(this.session, Endpoints.CPU).get()
  }
}
