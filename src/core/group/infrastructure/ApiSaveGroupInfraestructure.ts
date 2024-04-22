import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { SaveGroupService } from '../domain/services/SaveGroupService'
import type { Group } from '../domain/entities/Group'

export class ApiSaveGroupInfraestructure extends ApiInfraestructure implements SaveGroupService {
  async save(group: Group): Promise<Group> {
    return new ResourceClient<Group>(this.session, Endpoints.GROUP).post(group)
  }
}
