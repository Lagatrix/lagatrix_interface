import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { UpdateGroupService } from '../domain/services/UpdateGroupService'
import type { Group } from '../domain/entities/Group'

export class ApiUpdateGroupInfraestructure
  extends ApiInfraestructure
  implements UpdateGroupService
{
  async update(groupName: string, group: Group): Promise<Group> {
    return new ResourceClient<Group>(this.session, Endpoints.GROUP).put(groupName, group)
  }
}
