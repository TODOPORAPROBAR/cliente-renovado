import React from 'react'
import {
  Card,
  Typography,
  Button,
  Input,
  Textarea
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import { contactData } from "@/data";

const ContactSection = () => {
  return (
    <section className="relative bg-blue-gray-50/50 py-24 px-4">
      <div className="container mx-auto">
        <PageTitle heading="Build something">
          Put the potentially record low maximum sea ice extent tihs year down
          to low ice. According to the National Oceanic and Atmospheric
          Administration, Ted, Scambos.
        </PageTitle>
        <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {contactData.map(({ title, icon, description }) => (
            <Card
              key={title}
              color="transparent"
              shadow={false}
              className="text-center text-blue-gray-900"
            >
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                {React.createElement(icon, {
                  className: "w-5 h-5",
                })}
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                {description}
              </Typography>
            </Card>
          ))}
        </div>
        <PageTitle heading="Want to work with us?">
          Complete this form and we will get back to you in 24 hours.
        </PageTitle>
        <form className="mx-auto mt-12 max-w-3xl text-center">
          <div className="mb-8 flex gap-8">
            <Input variant="standard" size="lg" label="Full Name" />
            <Input variant="standard" size="lg" label="Email Address" />
          </div>
          <Textarea variant="standard" size="lg" label="Message" rows={8} />
          <Button variant="gradient" size="lg" className="mt-8">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection