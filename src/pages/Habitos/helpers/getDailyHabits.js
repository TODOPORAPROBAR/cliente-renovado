export default async () => {
  try {
    const content = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzhkNDQ5NTUwZjU4NjgxOTZhNTNiYTUiLCJpYXQiOjE2NzAyMDQwNzAsImV4cCI6MTY3MDI5MDQ3MH0.L94HIoZLZmSstPqjTYoOdGfdIOWz0EzKLcB3c33dkTc'
      }
    }
    const server = 'http://localhost:4000/history/daily'
    const response = await fetch(server, content)
    const json = await response.json()
    console.log(json)
    return json
  } catch (error) {
    console.log(error)
  }
}