import { RamUse } from "../entities/RamUse";

export interface GetRamUseService {
  get(): Promise<RamUse>
}
