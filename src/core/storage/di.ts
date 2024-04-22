import { container } from 'tsyringe'
import { ApiGetDiskInfraestructure } from './infrastructure/ApiGetDiskInfraestructure'

container.registerSingleton('GetDiskService', ApiGetDiskInfraestructure)

export { container }
