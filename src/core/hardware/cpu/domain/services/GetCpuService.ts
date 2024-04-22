import { type Cpu } from '../entities/Cpu'

export interface GetCpuService {
  get(): Promise<Cpu>
}
