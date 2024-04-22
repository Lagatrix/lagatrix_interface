export interface DeleteGroupService {
  delete(groupName: string): Promise<void>
}
