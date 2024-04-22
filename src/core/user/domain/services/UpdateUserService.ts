import type { User } from '../entities/User'

export interface UpdateUserService {
  update(username: string, user: User): Promise<User>
}
