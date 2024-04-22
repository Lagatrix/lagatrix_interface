import { GetLoginUseCase } from '@/core/login/application/GetLoginUseCase'
import { PlocBase } from './PlocBase'
import type { ActionTexts } from '@/core/shared/domain/entities/ActionsText'
import { container } from '@/core/login/di'
import { useToast } from 'vue-toastification'
import type { SessionLagatrix } from '@/core/shared/domain/entities/SessionLagatrix'
import Cookies from 'js-cookie'

export class LoginPloc extends PlocBase<string> {
  private getLoginUseCase: GetLoginUseCase

  constructor(actionsText: ActionTexts, toast: ReturnType<typeof useToast>) {
    super(actionsText, toast)

    this.getLoginUseCase = container.resolve(GetLoginUseCase)
  }

  async makeLogin(session: SessionLagatrix): Promise<string | Error> {
    return this.get(this.getLoginUseCase.execute(session))
  }

  saveSession(session: SessionLagatrix): void {
    Cookies.set('apiUrl', session.apiUrl!)
    Cookies.set('port', session.port!)
    Cookies.set('user', session.user!)
    Cookies.set('password', session.password!)
  }

  clearSession(): void {
    Cookies.remove('apiUrl')
    Cookies.remove('port')
    Cookies.remove('user')
    Cookies.remove('password')
  }
}
