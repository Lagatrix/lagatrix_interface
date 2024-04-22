import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import { injectable } from 'tsyringe'
import type { AddUserToGroupService } from '../domain/services/AddUserToGroupService'

@injectable()
export class ApiAddUserToGroupInfraestructure
  extends ApiInfraestructure
  implements AddUserToGroupService
{
  async add(groupName: string, userName: string): Promise<void> {
    await new ResourceClient<void>(this.session, Endpoints.GROUP).post(
      `/${groupName}/add/${userName}`
    )
  }
}
