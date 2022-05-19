import styled from 'styled-components'

export const SidebarContainer = styled.aside<{ isExpanded: boolean }>`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: ${({ isExpanded }) => (isExpanded ? '15vw' : '0vw')};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary.light};
  transition: width 0.5s ease;
  color: ${({ theme }) => theme.colors.text.light_100};
`
