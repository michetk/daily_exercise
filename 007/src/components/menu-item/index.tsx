import Link from 'next/link'
import { useToggle } from '../../hooks/use-toggle'
import IconSidebarToggle from '../icon-sidebar-toggle'
import MenuList from '../menu-list'
import { MenuItemProps } from './interfaces'
import { Item, MenuItemContainer } from './styled'

const MenuItem = ({
  MenuItem: { name, url, icon: Icon, depth, subItems },
}: MenuItemProps) => {
  const [isExpanded, setExpanded] = useToggle()

  return (
    <MenuItemContainer depth={depth}>
      <Item>
        <Link href={url} passHref>
          <div className="link">
            <Icon />
            <span>{name}</span>
          </div>
        </Link>
        {subItems ? <IconSidebarToggle onClick={setExpanded} /> : undefined}
      </Item>
      {subItems && isExpanded ? <MenuList list={subItems} /> : undefined}
    </MenuItemContainer>
  )
}

export default MenuItem
