import Link from "next/link"
import {Container, NavItem} from './styles'
import { LayoutProps } from "../layout.types";

const Links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Pessoa Usuária',
    href: '/pessoa-usuaria'
  },
  {
    label: 'Profissional',
    href: '/profissional'
  },
]



const Header: React.FC<LayoutProps> = ({currencyHref}) => {

  return (
    <Container>
      <Link href={'/'}>Lacrei</Link>
      <nav>
        {Links.map((link,i ) => (
          <NavItem key={i} changeColor active={currencyHref === link.href}>
            <Link  href={link.href}>{link.label}</Link>
          </NavItem>
        ))}
      </nav>
    </Container>
  )
};

export {Header, Links}