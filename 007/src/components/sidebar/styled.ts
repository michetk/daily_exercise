import styled from 'styled-components'

export const SidebarContainer = styled.aside<{ isExpanded: boolean }>`
  display: flex;
  justify-content: center;
  width: ${({ isExpanded }) => (isExpanded ? '15rem' : '0rem')};
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: width 0.5s ease-in-out;
`

export const SidebarContent = styled.div`
  display: flex;
  justify-content: center;
`
