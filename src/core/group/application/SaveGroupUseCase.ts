import { injectable, inject } from 'tsyringe'
import type { Group } from '../domain/entities/Group'
import type { SaveGroupService } from '../domain/services/SaveGroupService'

@injectable()
export class SaveGroupUseCase {
  constructor(@inject('SaveGroupService') private saveGroupService: SaveGroupService) {}

  async execute(group: Group): Promise<Group> {
    return await this.saveGroupService.save(group)
  }
}
