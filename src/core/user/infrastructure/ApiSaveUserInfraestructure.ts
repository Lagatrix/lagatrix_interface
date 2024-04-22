import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { User } from '../domain/entities/User'
import type { SaveUserService } from '../domain/services/SaveUserService'

export class ApiSaveUserInfraestructure extends ApiInfraestructure implements SaveUserService {
  async save(user: User): Promise<User> {
    return new ResourceClient<User>(this.session, Endpoints.USER).post(user)
  }
}
