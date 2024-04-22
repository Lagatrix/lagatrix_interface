export interface AddUserToGroupService {
  add(groupName: string, userName: string): Promise<void>
}
