import styled from 'styled-components';
import tw from 'tailwindcss'
export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EEEEEE;
  padding: 0.3rem 1rem;
  font-weight: bold; 

  > a {
    font-size: 2rem;
    color: var(--green); 
  }
  nav {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: rgb(31, 31, 31);
  }
  @media (min-width: 520px) {
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  nav {
    gap: 2rem;
    a {
      font-size: 1rem;
    }
  }
}
@media (min-width: 1040px) {
  padding: 0.5rem 4rem;
  nav {
    gap: 2.5rem;
  }
}


`
type NavItemProps = {
  active: boolean
  changeColor?: boolean
}
export const NavItem = styled.span<NavItemProps>`
  font-weight: ${(props) => props.active && !props.changeColor && 'bold'};
  color: ${(props) => props.active && props.changeColor && 'var(--green)'} 
`;