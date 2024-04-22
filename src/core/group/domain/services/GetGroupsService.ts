import type { Group } from '../entities/Group'

export interface GetGroupsService {
  get(): Promise<Group[]>
}
