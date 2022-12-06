import getUserToken from "@/helpers/getUserToken"

export default async () => {
  const server = import.meta.env.VITE_APP_SERVER_URL
  try {
    const token = getUserToken()
    const content = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },

    }
    const response = await fetch(`${server}/history/daily`, content)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}