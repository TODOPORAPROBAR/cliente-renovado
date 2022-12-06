import getUserToken from "@/helpers/getUserToken"

export default async (method, body) => {
  const server = import.meta.env.VITE_APP_SERVER_URL
  const token = getUserToken()
  const content = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    method,
    body
  }
  const response = await fetch(`${server}/history/daily`, content)
  return await response.json()
}