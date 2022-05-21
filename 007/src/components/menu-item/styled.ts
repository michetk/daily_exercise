import styled from 'styled-components'

export const MenuItemContainer = styled.div<{ depth: number }>`
  flex-flow: row wrap;
  margin-left: ${({ depth }) => `${depth}rem`};

  svg {
    height: 30px;
    cursor: pointer;
  }
`
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  span {
    margin-left: 10px;
  }

  .link {
    cursor: pointer;
  }
`
