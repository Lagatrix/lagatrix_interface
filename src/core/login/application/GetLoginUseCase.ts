import { injectable, inject } from 'tsyringe'
import type { GetLoginService } from '../domain/services/GetLoginService'
import type { SessionLagatrix } from '@/core/shared/domain/entities/SessionLagatrix'

@injectable()
export class GetLoginUseCase {
  constructor(@inject('GetLoginService') private getLoginService: GetLoginService) {}

  async execute(session: SessionLagatrix): Promise<string> {
    return this.getLoginService.get(session)
  }
}
