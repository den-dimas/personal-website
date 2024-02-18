import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      {data.map((p, i) => (
        <div key={i} className="flex items-center">
          {p.logo}
          <span className="mx-4">: </span>
          <a
            href={p.link}
            title={p.name}
            className="relative before:absolute before:bottom-1 before:w-full before:bg-black before:h-[2px]"
          >
            {p.id}
          </a>
        </div>
      ))}
    </div>
  )
}

const data = [
  {
    id: "@dimass.dn",
    name: "Instagram",
    logo: <FaInstagram size={24} />,
    link: "https://www.instagram.com/dimass.dn/",
  },
  {
    id: "dimass.drm@gmail.com",
    name: "Email",
    logo: <MdOutlineEmail size={24} />,
    link: "mailto:dimass.drm@gmail.com",
  },
  {
    id: "@dermawangi",
    name: "LinkedIn",
    logo: <FaLinkedin size={24} />,
    link: "https://www.linkedin.com/in/dermawangi/",
  },
  {
    id: "dermatologi",
    name: "Discord",
    logo: <FaDiscord size={24} />,
    link: "https://www.discord.com",
  },
  {
    id: "den-dimas",
    name: "Github",
    logo: <FaGithub size={24} />,
    link: "https://github.com/den-dimas",
  },
]
