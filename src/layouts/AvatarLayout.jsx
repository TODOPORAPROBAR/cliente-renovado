import React from 'react'
import { Avatar } from "@material-tailwind/react";
import girl from '../../public/img/team-2.jpg'
const AvatarLayout = () => {
  return (
    <div className="relative">
      <div className="-mt-20 w-40">
        <Avatar
          src={girl}
          alt="Profile picture"
          variant="circular"
          className="h-full w-full shadow-xl"
        />
      </div>
    </div>
  )
}

export default AvatarLayout