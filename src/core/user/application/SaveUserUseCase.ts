import { injectable, inject } from 'tsyringe'
import { type SaveUserService } from '../domain/services/SaveUserService'
import { type User } from '../domain/entities/User'

@injectable()
export class SaveUserUseCase {
  constructor(@inject('SaveUserService') private saveUserService: SaveUserService) {}

  async execute(userData: User): Promise<User> {
    return this.saveUserService.save(userData)
  }
}
