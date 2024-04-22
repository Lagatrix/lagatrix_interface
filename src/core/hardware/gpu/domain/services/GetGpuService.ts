import type { Gpu } from '../entities/Gpu'

export interface GetGpuService {
  get(): Promise<Gpu>
}
