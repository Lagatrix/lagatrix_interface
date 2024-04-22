import { injectable, inject } from 'tsyringe'
import type { Group } from '../domain/entities/Group'
import type { UpdateGroupService } from '../domain/services/UpdateGroupService'

@injectable()
export class UpdateGroupUseCase {
  constructor(@inject('UpdateGroupService') private updateGroupService: UpdateGroupService) {}

  async execute(groupName: string, group: Group): Promise<Group> {
    return await this.updateGroupService.update(groupName, group)
  }
}
