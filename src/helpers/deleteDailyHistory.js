import getUserToken from "./getUserToken"

export default async () => {
  try {
    const server = import.meta.env.VITE_APP_SERVER_URL
    const content = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': getUserToken()
      },
      method: 'DELETE'
    }
    const response = await fetch(`${server}/history/daily`, content)
    return response
  } catch (error) {
    console.log(error)
  }
}