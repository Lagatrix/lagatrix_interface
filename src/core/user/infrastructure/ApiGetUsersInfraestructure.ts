import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetUsersService } from '../domain/services/GetUsersService'
import type { User } from '../domain/entities/User'

export class ApiGetUsersInfraestructure extends ApiInfraestructure implements GetUsersService {
  async get(): Promise<User[]> {
    try {
      return new ResourceClient<User>(this.session, Endpoints.USER).gets()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
