import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import type { SessionLagatrix } from '../domain/entities/SessionLagatrix'
import { RequestError } from '../domain/errors/RequestError'
import { NetworkError } from '../domain/errors/NetworkError'

export class ResourceClient<T> {
  private lagatrixSession: SessionLagatrix
  private resourceName: string

  constructor(lagatrixSession: SessionLagatrix, resourceName: string) {
    this.lagatrixSession = lagatrixSession
    this.resourceName = resourceName
  }

  private getAuthHeaders(): { Authorization: string } {
    return {
      Authorization: `Basic ${btoa(`${this.lagatrixSession.user}:${this.lagatrixSession.password}`)}`
    }
  }

  private async makeRequest<K>(config: AxiosRequestConfig): Promise<K> {
    try {
      const response = await axios<K, AxiosResponse<K>>(config)
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.code === 'ERR_NETWORK') {
          return Promise.reject(new NetworkError('Network error'))
        }
        return Promise.reject(new RequestError(error.response!.data.detail, error.response!.status))
      }
      return Promise.reject(new RequestError(error as string))
    }
  }

  async get(id?: number | string): Promise<T> {
    const url = `${this.lagatrixSession.apiUrl}:${this.lagatrixSession.port}/${this.resourceName}`

    return await this.makeRequest<T>({
      method: 'GET',
      url: id ? `${url}/${id}` : url,
      headers: this.getAuthHeaders()
    })
  }

  async gets(): Promise<T[]> {
    return await this.makeRequest<T[]>({
      method: 'GET',
      url: `${this.lagatrixSession.apiUrl}:${this.lagatrixSession.port}/${this.resourceName}`,
      headers: this.getAuthHeaders()
    })
  }

  async post(newResource: T | string): Promise<T> {
    if (typeof newResource === 'number' || typeof newResource === 'string') {
      return await this.makeRequest<T>({
        method: 'POST',
        url: `${this.lagatrixSession.apiUrl}:${this.lagatrixSession.port}/${this.resourceName}/${newResource}`,
        headers: this.getAuthHeaders()
      })
    }

    return await this.makeRequest<T>({
      method: 'POST',
      url: `${this.lagatrixSession.apiUrl}:${this.lagatrixSession.port}/${this.resourceName}`,
      data: newResource,
      headers: this.getAuthHeaders()
    })
  }

  async put(oldResource: number | string | T, updatedResource: T): Promise<T> {
    if (typeof oldResource === 'number' || typeof oldResource === 'string') {
      return await this.makeRequest<T>({
        method: 'PUT',
        url: `${this.lagatrixSession.apiUrl}:${this.lagatrixSession.port}/${this.resourceName}/${oldResource}`,
        data: updatedResource,
        headers: this.getAuthHeaders()
      })
    }

    return await this.makeRequest<T>({
      method: 'PUT',
      url: `${this.lagatrixSession.apiUrl}:${this.lagatrixSession.port}/${this.resourceName}`,
      data: [oldResource, updatedResource],
      headers: this.getAuthHeaders()
    })
  }

  async delete(deleteResource: number | string | T): Promise<void> {
    if (typeof deleteResource === 'number' || typeof deleteResource === 'string') {
      await this.makeRequest<T>({
        method: 'DELETE',
        url: `${this.lagatrixSession.apiUrl}:${this.lagatrixSession.port}/${this.resourceName}/${deleteResource}`,
        headers: this.getAuthHeaders()
      })
    }

    await this.makeRequest<T>({
      method: 'DELETE',
      url: `${this.lagatrixSession.apiUrl}:${this.lagatrixSession.port}/${this.resourceName}`,
      data: deleteResource,
      headers: this.getAuthHeaders()
    })
  }
}
