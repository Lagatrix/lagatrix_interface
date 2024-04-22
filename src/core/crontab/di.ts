import { container } from 'tsyringe'
import { ApiGetCronJobsInfraestructure } from './infrastructure/ApiGetCronJobsInfraestructure'
import { ApiSaveCronJobInfraestructure } from './infrastructure/ApiSaveCronJobInfraestructure'
import { ApiUpdateCronJobInfraestructure } from './infrastructure/ApiUpdateCronJobInfraestructure'
import { ApiDeleteCronJobInfraestructure } from './infrastructure/ApiDeleteCronJobInfraestructure'

container.registerSingleton('GetCronJobsService', ApiGetCronJobsInfraestructure)
container.registerSingleton('SaveCronJobService', ApiSaveCronJobInfraestructure)
container.registerSingleton('UpdateCronJobService', ApiUpdateCronJobInfraestructure)
container.registerSingleton('DeleteCronJobService', ApiDeleteCronJobInfraestructure)

export { container }
