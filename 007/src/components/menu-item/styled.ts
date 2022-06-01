import styled from 'styled-components'

export const MenuItemContainer = styled.div<{ depth: number }>`
  flex-flow: row wrap;
  margin-left: ${({ depth }) => `${depth}rem`};

  svg {
    height: 30px;
    cursor: pointer;

    animation: ${({ theme }) => theme.animations.fadein} 1s ease-in-out;
  }
`
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  animation: ${({ theme }) => theme.animations.fadein} 1s ease-in-out;

  span {
    margin-left: 10px;
  }

  .link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`
