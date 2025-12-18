"use client"
import emailjs from "@emailjs/browser"
import { FormEvent, useState } from "react"
import React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

interface BoxType {
  icon: React.ComponentType<{ className?: string }>
  title: string
  info: string
  id: number
}

const infoBoxes: BoxType[] = [
  {
    id: 1,
    title: "Email",
    icon: Mail,
    info: "mhasankhan1069@gmail.com",
  },
  {
    id: 2,
    title: "Phone",
    icon: Phone,
    info: "+92 310 4278981",
  },
  {
    id: 3,
    title: "Location",
    icon: MapPin,
    info: "Lahore, Pak",
  },
]


type InputsType = {
  name: string,
  email: string,
  subject: string,
  msg: string,
}
 const userInput:InputsType = {
    name: '',
    email: '',
    subject: '',
    msg: '',
  }





const Mailsection = () => {



  const [loading, setLoading] = useState(false)
const [success, setSuccess] = useState(false)
const [error, setError] = useState(false)


  const [formData, setFormData] = useState(userInput)

  // const submitHandler = (e: FormEvent) => {
  //   e.preventDefault();
  //   setFormData(
  //     {
  //       name:'',
  //       email:'',
  //       msg:'',
  //       subject:'',
  //     }
  //   )
  // }
  const submitHandler = async (e: FormEvent) => {
  e.preventDefault()

  try {
    await emailjs.send(
      "service_p23uarp",
      "template_sf3bvef",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.msg,
      },
      "Gp0EynTpvnHebjIWJ"
    )

    setFormData({
      name: "",
      email: "",
      subject: "",
      msg: "",
    })

    alert("Message sent successfully!")
  } catch (error) {
    console.error(error)
    alert("Failed to send message.")
  }
}


  return (
    <section className="relative min-h-screen bg-black overflow-hidden" id="contact">
      {/* blobs */}
      <div className="absolute inset-0 bg-[#c39610]/50 w-1/3 h-[180%] top-1/2 -translate-y-1/2 rounded-r-full blur-3xl" />
      <div className="absolute bg-[#c39610] w-52 h-52 top-3/4 right-10 -translate-y-1/2 rounded-full blur-3xl" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative container mx-auto px-6 py-16">
        {/* header */}
        <div className="text-center mb-16">
          <p className="text-[#F7C62F] font-semibold tracking-wide mb-2 text-sm uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can work together.
          </p>
        </div>

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* info boxes */}
          <div className="flex flex-col gap-4 w-full h-full justify-between">
            {infoBoxes.map((box) => (
              <div
                key={box.id}
                className="flex items-center gap-4 p-4 border border-neutral-800/90 bg-neutral-900/40 rounded-lg"
              >
                <div className="p-3 rounded-lg bg-[#F7C62F]/10 text-[#F7C62F] hover:bg-[#F7C62F] hover:text-black transition">
                  <box.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">{box.title}</p>
                  <p className="text-white font-medium">{box.info}</p>
                </div>
              </div>
            ))}

            <div className="px-4 py-4 border border-neutral-800/70 bg-neutral-900/40 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-white/70">Available for work</span>
              </div>
              <p className="text-sm text-white/80">
                I&apos;m currently taking on new projects. Let&apos;s create something amazing together.
              </p>
            </div>
          </div>

          {/* form */}
          <form onSubmit={(e) => submitHandler(e)} className="w-full h-full bg-neutral-900/40 border border-neutral-800/70 rounded-xl p-6 space-y-3 backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Your Name</label>
                <input
                  onChange={(e) => setFormData(
                    (prev) => ({...prev, name: e.target.value })
                  )}
                  value={formData.name}
                  type="text"
                  placeholder="M Hasan"
                  className="placeholder:text-xs text-sm mt-1 w-full px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700 focus:outline-none focus:border-[#F7C62F]"
                  required/>
              </div>

              <div>
                <label className="text-sm text-white/70">Email Address</label>
                <input
                onChange={(e)=>setFormData(
                  (prev)=> ({
                    ...prev,
                    email:e.target.value
                  })
                )}
                value={formData.email}
                  type="email"
                  placeholder="mhasankhan1069@gmail.com"
                  className="placeholder:text-xs text-sm mt-1 w-full px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700 focus:outline-none focus:border-[#F7C62F]"
                  required/>
              </div>
            </div>

            <div>
              <label className="text-sm text-white/70">Subject</label>
              <input
                onChange={(e)=>setFormData(
                  (prev)=> ({
                    ...prev,
                    subject:e.target.value
                  })
                )}
                value={formData.subject}
                type="text"
                placeholder="Project Discussion"
                className="placeholder:text-xs text-sm mt-1 w-full px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700 focus:outline-none focus:border-[#F7C62F]"
                required/>
            </div>

            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea
                onChange={(e)=>setFormData(
                  (prev)=> ({
                    ...prev,
                    msg:e.target.value
                  })
                )}
                value={formData.msg}
                rows={4}
                placeholder="Tell me about your project..."
                className="placeholder:text-xs text-sm mt-1 w-full px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700 resize-none focus:outline-none focus:border-[#F7C62F]"
                required/>
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 px-6 py-2 bg-[#F7C62F] text-black font-semibold rounded-lg hover:scale-[1.02] transition"
            >
              <span className="group-hover:pr-4 transition-all ">Send Message</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Mailsection
