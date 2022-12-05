export default (habits) => {
  let complete = 0
  let incomplete = 0
  habits.forEach(
    ({ tasks }) => {
      const checkeds = tasks.filter(task => task.checked).length
      complete += checkeds
      incomplete = incomplete + (tasks.length - checkeds)
    }
  )
  return ({ complete, incomplete })
}