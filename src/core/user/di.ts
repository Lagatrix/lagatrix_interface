import { container } from 'tsyringe'
import { ApiGetUserInfraestructure } from './infrastructure/ApiGetUserInfraestructure'
import { ApiGetUsersInfraestructure } from './infrastructure/ApiGetUsersInfraestructure'
import { ApiSaveUserInfraestructure } from './infrastructure/ApiSaveUserInfraestructure'
import { ApiUpdateUserInfraestructure } from './infrastructure/ApiUpdateUserInfraestructure'
import { ApiDeleteUserInfraestructure } from './infrastructure/ApiDeleteUserInfraestructure'

container.registerSingleton('GetUserService', ApiGetUserInfraestructure)
container.registerSingleton('GetUsersService', ApiGetUsersInfraestructure)
container.registerSingleton('SaveUserService', ApiSaveUserInfraestructure)
container.registerSingleton('UpdateUserService', ApiUpdateUserInfraestructure)
container.registerSingleton('DeleteUserService', ApiDeleteUserInfraestructure)

export { container }
