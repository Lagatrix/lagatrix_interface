import { injectable, inject } from 'tsyringe'
import type { DeleteGroupService } from '../domain/services/DeleteGroupService'

@injectable()
export class DeleteGroupUseCase {
  constructor(@inject('DeleteGroupService') private deleteGroupService: DeleteGroupService) {}

  async execute(groupName: string): Promise<void> {
    return await this.deleteGroupService.delete(groupName)
  }
}
