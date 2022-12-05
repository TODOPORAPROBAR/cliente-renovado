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
          Buscamos mejorar los hábitos en las vidas de las personas.
        </Typography>
        <Typography className="mb-8 font-normal text-blue-gray-500">
          Buscamos mejorar los hábitos en las vidas de las personas, brindándoles herramientas para organizar
          sus objetivos personales...
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