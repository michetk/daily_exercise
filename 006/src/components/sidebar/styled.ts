import styled from 'styled-components'

export const SidebarContainer = styled.aside<{ isExpanded: boolean }>`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: ${({ isExpanded }) => (isExpanded ? '20vw' : '0vw')};
  overflow: hidden;
`
