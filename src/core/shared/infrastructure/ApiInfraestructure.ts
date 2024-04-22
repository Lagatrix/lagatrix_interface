import type { SessionLagatrix } from '@/core/shared/domain/entities/SessionLagatrix'
import Cookies from 'js-cookie'

export class ApiInfraestructure {
  protected session: SessionLagatrix

  constructor() {
    this.session = {
      apiUrl: Cookies.get('apiUrl'),
      port: Cookies.get('port'),
      user: Cookies.get('user'),
      password: Cookies.get('password')
    }
  }
}
