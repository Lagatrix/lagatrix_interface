export interface RemoveUserFromGroupService {
  remove(groupName: string, userName: string): Promise<void>
}
