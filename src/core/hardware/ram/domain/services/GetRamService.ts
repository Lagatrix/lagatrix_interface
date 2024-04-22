import type { RamModule } from '../entities/RamModule'

export interface GetRamService {
  get(): Promise<RamModule[]>
}
