import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { RemoveUserFromGroupService } from '../domain/services/RemoveUserFromGroupService'

export class ApiRemoveUserFromGroupInfraestructure
  extends ApiInfraestructure
  implements RemoveUserFromGroupService
{
  async remove(groupName: string, userName: string): Promise<void> {
    await new ResourceClient<void>(this.session, Endpoints.GROUP).delete(
      `/${groupName}/remove/${userName}`
    )
  }
}
