import { injectable, inject } from 'tsyringe'
import type { Group } from '../domain/entities/Group'
import type { GetGroupsService } from '../domain/services/GetGroupsService'

@injectable()
export class GetGroupsUseCase {
  constructor(@inject('GetGroupsService') private getGroupService: GetGroupsService) {}

  async execute(): Promise<Group[]> {
    return await this.getGroupService.get()
  }
}
