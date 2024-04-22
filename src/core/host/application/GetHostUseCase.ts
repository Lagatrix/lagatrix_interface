import type { GetHostService } from '../domain/services/GetHostService'
import type { Host } from '../domain/entities/Host'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetHostUseCase {
  constructor(@inject('GetHostService') private getHostService: GetHostService) {}

  async execute(): Promise<Host> {
    return await this.getHostService.get()
  }
}
