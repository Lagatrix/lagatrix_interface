import type { User } from '../entities/User'

export interface GetUserService {
  get(username: string): Promise<User>
}
