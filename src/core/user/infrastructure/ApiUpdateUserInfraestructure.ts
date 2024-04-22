import type { UpdateUserService } from '../domain/services/UpdateUserService'
import type { User } from '../domain/entities/User'
import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'

export class ApiUpdateUserInfraestructure extends ApiInfraestructure implements UpdateUserService {
  update(username: string, user: User): Promise<User> {
    return new ResourceClient<User>(this.session, Endpoints.USER).put(username, user)
  }
}
