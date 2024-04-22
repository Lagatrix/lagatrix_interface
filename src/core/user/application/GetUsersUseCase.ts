import { injectable, inject } from 'tsyringe'
import type { User } from '../domain/entities/User'
import type { GetUsersService } from '../domain/services/GetUsersService'

@injectable()
export class GetUsersUseCase {
  constructor(@inject('GetUsersService') private getUserService: GetUsersService) {}

  async execute(): Promise<User[]> {
    return this.getUserService.get()
  }
}
