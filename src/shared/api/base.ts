import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

export const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/'

class ApiInstance {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 120000,
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '4c84b55f-d7b8-4b67-a3ad-961c2fb70e7d',  
      },
    })
  }

  async get<T>(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.get(
      endpoint,
      options
    )
    return response.data
  }
}

export const apiInstance = new ApiInstance()
