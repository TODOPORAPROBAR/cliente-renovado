export default async (habits) => {
  try {
    const server = import.meta.env.VITE_APP_SERVER_URL
    const content = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzhkNDQ5NTUwZjU4NjgxOTZhNTNiYTUiLCJpYXQiOjE2NzAyNDQ0MzMsImV4cCI6MTY3MDMzMDgzM30.tEJ1k_8qCsFMSCOd9HKaX7SATNT9p4l95Q3zdCiU62Y'
      },
      method: 'PUT',
      body: JSON.stringify({habits})
    }
    const response = await fetch(`${server}/history/daily`, content)
    const json = await response.json()
    console.log(json)
    return json
  } catch (error) {
    console.log(error)
  }
}