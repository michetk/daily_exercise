import styled from 'styled-components'

export const SidebarContainer = styled.aside<{ isExpanded: boolean }>`
  display: flex;
  justify-content: center;
  width: ${({ isExpanded }) => (isExpanded ? '15rem' : '0rem')};
  overflow: hidden;
`

export const SidebarContent = styled.div`
  display: flex;
  justify-content: center;
`
