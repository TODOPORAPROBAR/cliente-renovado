import React from 'react'
import { Typography } from "@material-tailwind/react";

const CountsLayout = () => {
  return (
    <div className="flex justify-center py-4 pt-8 lg:pt-4">
      <div className="mr-4 p-3 text-center">
        <Typography
          variant="lead"
          color="blue-gray"
          className="font-bold uppercase"
        >
          10
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500"
        >
          Completadas
        </Typography>
      </div>
      <div className="mr-4 p-3 text-center">
        <Typography
          variant="lead"
          color="blue-gray"
          className="font-bold uppercase"
        >
          3
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500"
        >
          Restantes
        </Typography>
      </div>
      <div className="p-3 text-center lg:mr-4">
        <Typography
          variant="lead"
          color="blue-gray"
          className="font-bold uppercase"
        >
          2
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500"
        >
          Días
        </Typography>
      </div>
    </div>
  )
}

export default CountsLayout