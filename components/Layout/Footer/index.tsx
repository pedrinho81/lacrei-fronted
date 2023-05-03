import Link from "next/link"
import Image from "next/image"
import { Links } from "../Header"
import { Container } from "./styles"
import { Icons } from "@/public/icons/icons"
import { LayoutProps } from "../layout.types"
import { NavItem } from "../Header/styles"
const Footer: React.FC<LayoutProps> = ({ currencyHref }) => {
  return (
    <Container>
      <nav>
        {Links.map((link, i) => (
          <NavItem key={i}  active={currencyHref === link.href}>
            <Link
              href={link.href}>
              {link.label}
            </Link>
          </NavItem>
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