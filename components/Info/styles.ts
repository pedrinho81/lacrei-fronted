import styled from "styled-components"
export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  padding: 1rem 1rem 0;
  h2 {
    color: #1F1F1F;
    font-weight: bold;
    font-size: 1.5rem;
  }
  p {
    margin-top: 0.875rem;
    color: #515151;
    font-size: 0.875rem
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    gap: 1rem;
    font-weight: bold;
    font-size: 1.125rem
  }
  .image-container {
    padding: 4rem 0;

  }
  @media (min-width: 520px) {
    padding: 2rem 2rem 0;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    .buttons-container {
      flex-direction: row;
      justify-content: space-between
    }
    .image-container {
      padding: 0;
    }
    }
    @media (min-width: 1020px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      padding: 4rem 4rem 0;
      h2 {
        max-width: 540px;
        font-size: 3rem;
      }
      p {
        max-width: 540px;
        font-size: 1.5rem
      }
    }
`;
type TextProps = {
  borderOnLeft?: boolean;
}
export const Text = styled.p<TextProps>`
  border-left: ${(props) => props.borderOnLeft ? '5px solid var(--green)' : ''} ;
  padding-left: ${(props) => props.borderOnLeft ? '1rem' : ''} ;
`;
type ButtonProps = {
  color: string,
  bg: string,
  border?: boolean
}
export const Button = styled.a<ButtonProps>`
  box-shadow: 0px 4px 4px 0px #00000040;
  text-align: center;
  color: ${(props) => props.color};
  width: 12rem;
  border-radius: 8px;
  padding: .7rem;
  background-color:${(props) => props.bg};
  border: ${(props) => props.border && `2px solid  ${props.color}`};

  `;