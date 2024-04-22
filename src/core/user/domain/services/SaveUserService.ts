import type { User } from '../entities/User'

export interface SaveUserService {
  save(user: User): Promise<User>
}
