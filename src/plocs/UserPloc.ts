import { DeleteUserUseCase } from '@/core/user/application/DeleteUserUseCase'
import { GetUserUseCase } from '@/core/user/application/GetUserUseCase'
import { SaveUserUseCase } from '@/core/user/application/SaveUserUseCase'
import { UpdateUserUseCase } from '@/core/user/application/UpdateUserUseCase'
import { container } from '@/core/user/di'
import { PlocBase } from './PlocBase'
import type { useToast } from 'vue-toastification'
import type { User } from '@/core/user/domain/entities/User'
import { GetUsersUseCase } from '@/core/user/application/GetUsersUseCase'

export class UserPloc extends PlocBase<User> {
  private getUsersUseCase: GetUsersUseCase
  private getUserUseCase: GetUserUseCase
  private saveUserUseCase: SaveUserUseCase
  private updateUserUseCase: UpdateUserUseCase
  private deleteUserUseCase: DeleteUserUseCase

  constructor(toast: ReturnType<typeof useToast>) {
    super(toast)

    this.getUsersUseCase = container.resolve(GetUsersUseCase)
    this.getUserUseCase = container.resolve(GetUserUseCase)
    this.saveUserUseCase = container.resolve(SaveUserUseCase)
    this.updateUserUseCase = container.resolve(UpdateUserUseCase)
    this.deleteUserUseCase = container.resolve(DeleteUserUseCase)
  }

  async getUsers(): Promise<User[] | Error> {
    return this.gets(this.getUsersUseCase.execute())
  }

  async getUser(username: string): Promise<User | Error> {
    return this.get(this.getUserUseCase.execute(username))
  }

  async saveUser(user: User): Promise<User | Error> {
    this.createSucessText = `User ${user.name} created`
    return this.save(this.saveUserUseCase.execute(user))
  }

  async updateUser(username: string, userData: User): Promise<User | Error> {
    this.updateSucessText = `User ${username} changed`
    return this.update(this.updateUserUseCase.execute(username, userData))
  }

  async deleteUser(username: string): Promise<boolean> {
    this.deleteSucessText = `User ${username} deleted`
    return this.delete(this.deleteUserUseCase.execute(username))
  }
}
