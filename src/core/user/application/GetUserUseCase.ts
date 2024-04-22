import { injectable, inject } from 'tsyringe'
import type { User } from '../domain/entities/User'
import type { GetUserService } from '../domain/services/GetUserService'

@injectable()
export class GetUserUseCase {
  constructor(@inject('GetUserService') private getUserService: GetUserService) {}

  async execute(username: string): Promise<User> {
    try {
      return this.getUserService.get(username)
    } catch (error) {
      throw Promise.reject(error)
    }
  }
}
