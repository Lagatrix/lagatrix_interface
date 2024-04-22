import type { SessionLagatrix } from '@/core/shared/domain/entities/SessionLagatrix'

export interface GetLoginService {
  get(session: SessionLagatrix): Promise<string>
}
