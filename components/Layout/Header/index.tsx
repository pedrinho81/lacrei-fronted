import Link from "next/link"
import crypto from 'crypto';
import {Container, NavItem} from './styles'
import { useRouter } from "next/router";
import styled from "styled-components";
import { LayoutProps } from "../layout.types";

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



const Header: React.FC<LayoutProps> = ({currencyHref}) => {

  return (
    <Container>
      <a>Lacrei</a>
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