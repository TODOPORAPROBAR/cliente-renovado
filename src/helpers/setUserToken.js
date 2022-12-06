export default (token) => {
  localStorage.setItem('token', token)
  return true
}