import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
  :root {
    --white: #fff;
    --medium-dark: rgb(82 82 91);
    --dark: rgb(63 63 70);
    --green: #018762;
    --light-green: #B0E0D3;
    --gold: #f9a825;
    --light-gold: #f4c244;
  }

  button {
  padding: 1rem;
  border-radius: 5px;
  color: var(--white);
  background-color: var(--green);
  cursor: pointer;
  
}

a:hover {
    opacity: 0.7;
  }

`;