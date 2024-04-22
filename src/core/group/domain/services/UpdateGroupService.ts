import type { Group } from '../entities/Group'

export interface UpdateGroupService {
  update(groupName: string, group: Group): Promise<Group>
}
