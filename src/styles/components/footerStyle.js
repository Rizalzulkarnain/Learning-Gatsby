import styled from "styled-components"

import theme from "../theme"

export const FooterGroup = styled.div`
  background-color: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

export const Text = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-weight: 600;
  color: #486791;
  max-width: 600px;
  margin: 0 auto;
`

export const Button = styled.button`
  background: linear-gradient(102.24deg, #9851e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: ${theme.colors.white};
  border: none;
  padding: 16px 60px;
  font-size: ${theme.fontSizes.lg};
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`

export const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    transition: 0.8s;
  }

  a:hover {
    color: ${theme.colors.black};
  }
`

export const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: ${theme.fontSizes.md};
  text-align: center;
`
