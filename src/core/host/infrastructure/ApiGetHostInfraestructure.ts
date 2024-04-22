import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetHostService } from '../domain/services/GetHostService'
import type { Host } from '../domain/entities/Host'

export class ApiGetHostInfraestructure extends ApiInfraestructure implements GetHostService {
  async get(): Promise<Host> {
    return new ResourceClient<Host>(this.session, Endpoints.HOST).get()
  }
}
