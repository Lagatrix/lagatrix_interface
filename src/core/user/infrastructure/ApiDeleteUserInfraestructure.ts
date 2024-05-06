import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { User } from '../domain/entities/User'
import type { DeleteUserService } from '../domain/services/DeleteUserService'

export class ApiDeleteUserInfraestructure extends ApiInfraestructure implements DeleteUserService {
  async delete(username: string): Promise<void> {
    return new ResourceClient<User>(this.session, Endpoints.USER).delete(username)
  }
}
