import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { DeleteGroupService } from '../domain/services/DeleteGroupService'

export class ApiDeleteGroupInfraestructure
  extends ApiInfraestructure
  implements DeleteGroupService
{
  async delete(groupName: string): Promise<void> {
    await new ResourceClient<void>(this.session, Endpoints.GROUP).delete(groupName)
  }
}
