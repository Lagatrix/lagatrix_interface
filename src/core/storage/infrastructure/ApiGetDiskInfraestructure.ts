import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { Disk } from '../domain/entities/Disk'
import type { GetDiskService } from '../domain/services/GetDiskService'

export class ApiGetDiskInfraestructure extends ApiInfraestructure implements GetDiskService {
  async get(): Promise<Disk[]> {
    return new ResourceClient<Disk>(this.session, Endpoints.DISK).gets()
  }
}
