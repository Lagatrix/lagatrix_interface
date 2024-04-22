import type { User } from '../entities/User'

export interface GetUsersService {
  get(): Promise<User[]>
}
