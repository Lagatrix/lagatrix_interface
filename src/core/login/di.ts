import { container } from 'tsyringe'
import { ApiGetLoginInfraestructure } from './infrastructure/ApiGetLoginInfraestructure'

container.registerSingleton('GetLoginService', ApiGetLoginInfraestructure)

export { container }
