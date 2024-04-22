import { ResourceClient } from '../../shared/infrastructure/ApiFactory'
import { ApiInfraestructure } from '../../shared/infrastructure/ApiInfraestructure'
import { Endpoints } from '@/core/shared/domain/enums/Endpoints'
import type { GetLoginService } from '../domain/services/GetLoginService'
import type { SessionLagatrix } from '@/core/shared/domain/entities/SessionLagatrix'

export class ApiGetLoginInfraestructure extends ApiInfraestructure implements GetLoginService {
  async get(session: SessionLagatrix): Promise<string> {
    this.session = session
    return new ResourceClient<string>(this.session, Endpoints.LOGIN).get()
  }
}
