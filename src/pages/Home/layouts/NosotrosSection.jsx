import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";


const NosotrosSection = () => {
  return (
    <div className="mt-32 flex flex-wrap items-center">
      <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
          <UsersIcon className="h-6 w-6 text-blue-gray-900" />
        </div>
        <Typography
          variant="h3"
          className="mb-3 font-bold"
          color="blue-gray"
        >
        BUSCAMOS CAMBIOS FAVORABLES EN LA VIDA DE LAS PERSONAS
        </Typography>
        <Typography className="mb-8 font-normal text-blue-gray-500">
        ProHabits es una plataforma tecnológica que permite la construcción de soluciones 
        para la gestión y organización remota de los hábitos saludables, de una persona individual o 
        de un colectivo de personas mediante la creación y seguimiento de tareas de buenos hábitos, 
        en conjunto con la integración de módulos de servicios.

        Brindamos una sección de hábitos que desplega tareas a desarrollar, para llevar una vida saludable y 
        una rutina organizada, es una gestión creada para personas dependientes.
          <br />
          <br />
          ........
        </Typography>
        <Button variant="outlined">Leer más</Button>
      </div>
      <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
        <Card className="shadow-lg shadow-gray-500/10">
          <CardHeader className="relative h-56">
            <img
              alt="Imagen"
              src="/"
              className="h-full w-full"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-3 font-bold"
            >
              Servicios
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              ....
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default NosotrosSection