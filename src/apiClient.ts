/**
 * Realiza una solicitud HTTP utilizando fetch con configuración común para JSON.
 *
 * @param {string} url - URL del recurso al que se hará la solicitud.
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} [method='GET'] - Método HTTP a utilizar.
 * @param {unknown} [body] - Cuerpo de la solicitud. Será convertido a JSON si se provee.
 * @param {HeadersInit} [headers={}] - Encabezados adicionales para la solicitud.
 * @returns {Promise<Response>} - Promesa que resuelve con la respuesta HTTP.
 *
 * @example
 * const res = await apiClient('/api/users', 'POST', { name: 'Fabrizio' });
 * const data = await res.json();
 */
export async function apiClient(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: unknown,
  headers: HeadersInit = {}
): Promise<Response> {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  return response
}
