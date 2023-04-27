import Link from "next/link"
import crypto from 'crypto';
import {Container} from './styles'

const Links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Pessoa Usuária',
    href: '/pessoa-usuária'
  },
  {
    label: 'Profissional',
    href: '/profissional'
  },
]
const Header: React.FC = () => {
  return (
    <Container>
      <a>Lacrei</a>
      <nav className="gap">
        {Links.map((link) => (
            <Link key={Number(crypto.randomUUID)} href={link.href}>{link.label}</Link>
        ))}
      </nav>
    </Container>
  )
};

export {Header, Links}