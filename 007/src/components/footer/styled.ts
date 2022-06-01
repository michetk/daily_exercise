import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.primary.dark.main};
  color: ${({ theme }) => theme.colors.text.white};
`
