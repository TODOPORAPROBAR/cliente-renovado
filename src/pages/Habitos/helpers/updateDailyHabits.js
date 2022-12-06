import getUserToken from "@/helpers/getUserToken"

export default async (habits) => {
  try {
    const server = import.meta.env.VITE_APP_SERVER_URL
    const token = getUserToken()
    const content = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
      method: 'PUT',
      body: JSON.stringify({ habits })
    }
    const response = await fetch(`${server}/history/daily`, content)
    const json = await response.json()
    console.log(json)
    return json
  } catch (error) {
    console.log(error)
  }
}