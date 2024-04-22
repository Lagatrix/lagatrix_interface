import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { User } from '../domain/entities/User'
import type { GetUserService } from '../domain/services/GetUserService'

export class ApiGetUserInfraestructure extends ApiInfraestructure implements GetUserService {
  async get(username: string): Promise<User> {
    return new ResourceClient<User>(this.session, Endpoints.USER).get(username)
  }
}
