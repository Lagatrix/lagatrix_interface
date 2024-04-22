import type { UpdateUserService } from '../domain/services/UpdateUserService'
import type { User } from '../domain/entities/User'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateUserUseCase {
  constructor(@inject('UpdateUserService') private updateUserService: UpdateUserService) {}

  async execute(username: string, userData: User): Promise<User> {
    return this.updateUserService.update(username, userData)
  }
}
