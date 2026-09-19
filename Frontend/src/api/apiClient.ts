import type { ApiError } from '../types/contracts'
const baseUrl = import.meta.env.VITE_API_BASE_URL ?? ''
async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('safebite.access-token')
  const response = await fetch(`${baseUrl}${path}`, { ...options, headers: { ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }), ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } })
  if (!response.ok) { const error: ApiError = { message: 'The request could not be completed.', status: response.status }; throw error }
  return response.status === 204 ? (undefined as T) : response.json() as Promise<T>
}
export const apiClient = { get: <T>(path: string) => request<T>(path), post: <T>(path: string, body?: unknown) => request<T>(path, { method: 'POST', body: body instanceof FormData ? body : JSON.stringify(body) }), put: <T>(path: string, body: unknown) => request<T>(path, { method: 'PUT', body: JSON.stringify(body) }), patch: <T>(path: string, body: unknown) => request<T>(path, { method: 'PATCH', body: JSON.stringify(body) }), delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }) }
