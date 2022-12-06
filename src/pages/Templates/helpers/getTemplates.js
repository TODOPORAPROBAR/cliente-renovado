import getUserToken from "@/helpers/getUserToken"

export default async () => {
  const server = import.meta.env.VITE_APP_SERVER_URL
  const token = getUserToken()
  const content = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
  }
  const response = await fetch(`${server}/template`, content)
  return await response.json()
}