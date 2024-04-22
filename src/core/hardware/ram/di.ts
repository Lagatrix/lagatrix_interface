import { container } from 'tsyringe'
import { ApiGetRamInfraestructure } from './infrastructure/ApiGetRamInfraestructure'
import { ApiGetRamUseInfraestructure } from './infrastructure/ApiGetRamUseInfraestructure'

container.registerSingleton('GetRamService', ApiGetRamInfraestructure)
container.registerSingleton('GetRamUseService', ApiGetRamUseInfraestructure)

export { container }
