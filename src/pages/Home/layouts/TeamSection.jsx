import React from 'react'
import { PageTitle } from "@/widgets/layout";
import { TeamCard } from "@/widgets/cards";
import { IconButton } from "@material-tailwind/react";
import { teamData } from "@/data";


const TeamSection = () => {
  return (
    <section className="px-4 pt-20 pb-48">
      <div className="container mx-auto">
        <PageTitle heading="PRESENTANDO EL EQUIPO">
          Conformado por un grupo de Estudiantes de la carrera "Tecnicatura Superior en Desarrollo de Software Multiplataforma" que se dicta en el Instituto Politécnico Formosa - IPF.
        </PageTitle>
        <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
          {teamData.map(({ img, name, position, socials }) => (
            <TeamCard
              key={name}
              img={img}
              name={name}
              position={position}
              socials={
                <div className="flex items-center gap-2">
                  {socials.map(({ color, name }) => (
                    <IconButton key={name} color={color} variant="text">
                      <i className={`fa-brands text-lg fa-${name}`} />
                    </IconButton>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection