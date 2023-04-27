import Link from "next/link"
import Image from "next/image"
import { Links } from "../Header"
import { Container } from "./styles"
import { Icons } from "@/public/icons"
import crypto from 'crypto'
const Footer: React.FC = () => {
  return (
    <Container>
      <nav>
        {Links.map((link) => (
          <Link
            key={Number(crypto.randomUUID)}
            href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div>
        {Icons.map((icon, i) => (
          <Image 
            key={i}
            priority
            src={icon.src}
            alt={icon.src}
          />
        ))}
      </div>
      <p className="text">Desafio front-end Lacrei</p>
    </Container>
  )
}

export { Footer }