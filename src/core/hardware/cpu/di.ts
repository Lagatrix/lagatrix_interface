import { container } from 'tsyringe'
import { ApiGetCpuTemperatureInfraestructure } from './infrastructure/ApiGetCpuTemperatureInfraestructure'
import { ApiGetCpuInfraestructure } from './infrastructure/ApiGetCpuInfraestructure'
import { ApiGetCpuUseInfraestructure } from './infrastructure/ApiGetCpuUseInfraestructure'

container.registerSingleton('GetCpuService', ApiGetCpuInfraestructure)
container.registerSingleton('GetCpuTemperatureService', ApiGetCpuTemperatureInfraestructure)
container.registerSingleton('GetCpuUseService', ApiGetCpuUseInfraestructure)

export { container }
