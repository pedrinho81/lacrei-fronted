import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 0.5rem;
margin: 0 1rem;
border-top: 1px solid var(--light-green);

nav {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem !important;
}

div {
  display: flex;
  gap: 2rem;
}
p {
  color: #515151;
  font-size: 0.75rem;
}

@media (min-width: 520px) {
  margin: 0.5rem 2rem;
  nav {
    flex-direction: row;
    gap: 2.5rem;
    font-size: 1rem;
  }
}

@media (min-width: 1040px) {
  margin: 1rem 4rem
}
`;