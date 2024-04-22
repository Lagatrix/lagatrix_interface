import { injectable, inject } from 'tsyringe'
import type { AddUserToGroupService } from '../domain/services/AddUserToGroupService'

@injectable()
export class AddUserToGroupUseCase {
  constructor(
    @inject('AddUserToGroupService') private addUserToGroupService: AddUserToGroupService
  ) {}

  async execute(groupName: string, userName: string): Promise<void> {
    await this.addUserToGroupService.add(groupName, userName)
  }
}
