import { DeleteGroupUseCase } from '@/core/group/application/DeleteGroupUseCase'
import { SaveGroupUseCase } from '@/core/group/application/SaveGroupUseCase'
import { UpdateGroupUseCase } from '@/core/group/application/UpdateGroupUseCase'
import { container } from '@/core/group/di'
import { PlocBase } from './PlocBase'
import type { useToast } from 'vue-toastification'
import type { Group } from '@/core/group/domain/entities/Group'
import { GetGroupsUseCase } from '@/core/group/application/GetGroupsUseCase'

export class GroupPloc extends PlocBase<Group> {
  private getGroupsUseCase: GetGroupsUseCase
  private saveGroupUseCase: SaveGroupUseCase
  private updateGroupUseCase: UpdateGroupUseCase
  private deleteGroupUseCase: DeleteGroupUseCase

  constructor(toast: ReturnType<typeof useToast>) {
    super(toast)

    this.getGroupsUseCase = container.resolve(GetGroupsUseCase)
    this.saveGroupUseCase = container.resolve(SaveGroupUseCase)
    this.updateGroupUseCase = container.resolve(UpdateGroupUseCase)
    this.deleteGroupUseCase = container.resolve(DeleteGroupUseCase)
  }

  async getGroups(): Promise<Group[] | Error> {
    return this.gets(this.getGroupsUseCase.execute())
  }

  async saveGroup(group: Group): Promise<Group | Error> {
    return this.save(this.saveGroupUseCase.execute(group))
  }

  async updateGroup(groupname: string, groupData: Group): Promise<Group | Error> {
    return this.update(this.updateGroupUseCase.execute(groupname, groupData))
  }

  async deleteGroup(groupname: string): Promise<boolean | Error> {
    return this.delete(this.deleteGroupUseCase.execute(groupname))
  }
}
