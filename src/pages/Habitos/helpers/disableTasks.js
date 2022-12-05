export default (habits) => {
  const modifiedHabits = habits.map(
    habit => {
      habit.tasks = habit.tasks.map(
        task => {
          task.disabled = task.checked
          return task
        }
      )
      return habit
    }
  )
  return modifiedHabits
}