import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { Group } from '../domain/entities/Group'
import type { GetGroupsService } from '../domain/services/GetGroupsService'

export class ApiGetGroupsInfraestructure extends ApiInfraestructure implements GetGroupsService {
  async get(): Promise<Group[]> {
    return new ResourceClient<Group[]>(this.session, Endpoints.GROUP).get()
  }
}
