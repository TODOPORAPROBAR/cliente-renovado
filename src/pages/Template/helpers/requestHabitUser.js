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
    body: JSON.stringify(body)
  }
  const response = await fetch(`${server}/user/habits`, content)
  return await response.json()
}