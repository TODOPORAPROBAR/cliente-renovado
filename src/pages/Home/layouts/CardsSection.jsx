import React from 'react'
import { featuresData } from "@/data";
import { FeatureCard } from "@/widgets/cards";

const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuresData.map(({ color, title, icon, description }) => (
        <FeatureCard
          key={title}
          color={color}
          title={title}
          icon={React.createElement(icon, {
            className: "w-5 h-5 text-white",
          })}
          description={description}
        />
      ))}
    </div>
  )
}

export default CardsSection