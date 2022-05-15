import Link from 'next/link'
import { useToggle } from '../../hooks/global/use-toggle'
import IconSidebarToggle from '../icon-sidebar-toggle'
import MenuList from '../menu-list'
import { MenuItemProps } from './interfaces'
import { MenuItemContainer } from './styled'

const MenuItem = ({
  MenuItem: { name, icon: Icon, url, depth, subItems },
}: MenuItemProps) => {
  const [isExpanded, setExpanded] = useToggle()

  return (
    <MenuItemContainer depth={depth}>
      <Link href={url} passHref>
        <div>
          <Icon />
          <span>{name}</span>
          {subItems ? <IconSidebarToggle onClick={setExpanded} /> : undefined}
        </div>
      </Link>
      {subItems && isExpanded ? <MenuList list={subItems} /> : undefined}
    </MenuItemContainer>
  )
}

export default MenuItem
