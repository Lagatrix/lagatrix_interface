import type { Disk } from '../entities/Disk'

export interface GetDiskService {
  get(): Promise<Disk[]>
}
