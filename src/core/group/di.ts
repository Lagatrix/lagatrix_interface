import { container } from 'tsyringe'
import { ApiGetGroupsInfraestructure } from './infrastructure/ApiGetGroupsInfraestructure'
import { ApiSaveGroupInfraestructure } from './infrastructure/ApiSaveGroupInfraestructure'
import { ApiUpdateGroupInfraestructure } from './infrastructure/ApiUpdateGroupInfraestructure'
import { ApiDeleteGroupInfraestructure } from './infrastructure/ApiDeleteGroupInfraestructure'
import { ApiAddUserToGroupInfraestructure } from './infrastructure/ApiAddUserToGroupInfraestructure'
import { ApiRemoveUserFromGroupInfraestructure } from './infrastructure/ApiRemoveUserFromGroupInfraestructure'

container.registerSingleton('GetGroupsService', ApiGetGroupsInfraestructure)
container.registerSingleton('SaveGroupService', ApiSaveGroupInfraestructure)
container.registerSingleton('UpdateGroupService', ApiUpdateGroupInfraestructure)
container.registerSingleton('DeleteGroupService', ApiDeleteGroupInfraestructure)
container.registerSingleton('AddUserToGroupService', ApiAddUserToGroupInfraestructure)
container.registerSingleton('RemoveUserFromGroupService', ApiRemoveUserFromGroupInfraestructure)

export { container }
