import styled from 'styled-components'

export const MenuItemContainer = styled.div<{ depth: number }>`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px ${({ depth }) => `${depth}rem`};
  user-select: none;
`
export const Item = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  svg {
    height: 30px;
    cursor: pointer;
  }

  .link-item {
    cursor: pointer;

    span {
      margin-left: 10px;
    }
  }
`
