import { container } from 'tsyringe'
import { ApiGetHostInfraestructure } from './infrastructure/ApiGetHostInfraestructure'

container.registerSingleton('GetHostService', ApiGetHostInfraestructure)

export { container }
