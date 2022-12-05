import React from 'react'
import { Avatar } from "@material-tailwind/react";

const AvatarLayout = () => {
  return (
    <div className="relative">
      <div className="-mt-20 w-40">
        <Avatar
          src="/img/team-2.jpg"
          alt="Profile picture"
          variant="circular"
          className="h-full w-full shadow-xl"
        />
      </div>
    </div>
  )
}

export default AvatarLayout