import type { Group } from '../entities/Group'

export interface SaveGroupService {
  save(group: Group): Promise<Group>
}
