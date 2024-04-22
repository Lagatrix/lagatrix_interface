import { container } from 'tsyringe'
import { ApiGetGpuTemperatureInfraestructure } from './infrastructure/ApiGetGpuTemperatureInfraestructure'
import { ApiGetGpuInfraestructure } from './infrastructure/ApiGetGpuInfraestructure'
import { ApiGetGpuUseInfraestructure } from './infrastructure/ApiGetGpuUseInfraestructure'

container.registerSingleton('GetGpuService', ApiGetGpuInfraestructure)
container.registerSingleton('GetGpuTemperatureService', ApiGetGpuTemperatureInfraestructure)
container.registerSingleton('GetGpuUseService', ApiGetGpuUseInfraestructure)

export { container }
