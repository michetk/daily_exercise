import Link from 'next/link'
import { useToggle } from '../../hooks/global/use-toggle'
import IconSidebarToggle from '../icon-sidebar-toggle'
import MenuList from '../menu-list'
import { MenuItemProps } from './interfaces'
import { Item, MenuItemContainer } from './styled'

const MenuItem = ({
  MenuItem: { name, icon: Icon, url, depth, subItems },
}: MenuItemProps) => {
  const [isExpanded, setExpanded] = useToggle()

  return (
    <MenuItemContainer depth={depth}>
      <Item>
        <Link href={url} passHref>
          <div className="link-item">
            <Icon />
            <span>{name}</span>
          </div>
        </Link>
        {subItems ? (
          <IconSidebarToggle alternateFunction={setExpanded} />
        ) : undefined}
      </Item>
      {subItems && isExpanded ? <MenuList list={subItems} /> : undefined}
    </MenuItemContainer>
  )
}

export default MenuItem
