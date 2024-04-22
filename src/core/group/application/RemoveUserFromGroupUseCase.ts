import { injectable, inject } from 'tsyringe'
import type { RemoveUserFromGroupService } from '../domain/services/RemoveUserFromGroupService'

@injectable()
export class RemoveUserFromGroupUseCase {
  constructor(
    @inject('RemoveUserFromGroupService')
    private removeUserFromGroupService: RemoveUserFromGroupService
  ) {}

  async execute(groupName: string, userName: string): Promise<void> {
    await this.removeUserFromGroupService.remove(groupName, userName)
  }
}
