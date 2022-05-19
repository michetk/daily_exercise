import styled from 'styled-components'

export const MenuItemContainer = styled.div<{ depth: number }>`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px ${({ depth }) => `${depth}rem`};
  user-select: none;
  animation: ${({ theme }) => theme.animations.fadein} 0.5s ease;
`
export const Item = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  svg {
    height: 30px;
    cursor: pointer;
    animation: ${({ theme }) => theme.animations.fadein} 0.5s ease;
  }

  .link-item {
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }
`
