import styled from 'styled-components'

export const IconHeaderToggleContainer = styled.div`
  svg {
    height: 30px;
    animation: ${({ theme }) => theme.animations.fadein} 1s ease-out;
  }
`
