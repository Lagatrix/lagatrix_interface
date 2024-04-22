import type { Host } from '../entities/Host'

export interface GetHostService {
  get(): Promise<Host>
}
