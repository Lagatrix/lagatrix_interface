import { injectable, inject } from 'tsyringe'
import type { DeleteUserService } from '../domain/services/DeleteUserService'

@injectable()
export class DeleteUserUseCase {
  constructor(@inject('DeleteUserService') private deleteUserService: DeleteUserService) {}

  async execute(username: string): Promise<void> {
    return this.deleteUserService.delete(username)
  }
}
