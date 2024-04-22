export interface DeleteUserService {
  delete(username: string): Promise<void>
}
