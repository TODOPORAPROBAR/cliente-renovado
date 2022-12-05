const templateTasks = [
  { description: 'Tomar awita', checked: false },
  { description: 'Comer verduras yqs', checked: false },
  { description: 'Comer verduras yqs', checked: false },
  { description: 'Comer verduras yqs', checked: false },
]

export const templateHabits = [
  {
    title: 'Habitos para dormir mejor',
    description: "1Marca las tareas realizadas en el dia para este habito, texto de ejemplo no me juzgen no soy escritor",
    tasks: JSON.parse(JSON.stringify(templateTasks))
  },
  {
    title: 'Habitos para dormir mejor2',
    description: "2Marca las tareas realizadas en el dia para este habito, texto de ejemplo no me juzgen no soy escritor",
    tasks: JSON.parse(JSON.stringify(templateTasks))
  },
  {
    title: 'Habitos para dormir mejor3',
    description: "3Marca las tareas realizadas en el dia para este habito, texto de ejemplo no me juzgen no soy escritor",
    tasks: JSON.parse(JSON.stringify(templateTasks))
  },
]