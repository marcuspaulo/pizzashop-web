import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps
export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      {...props}
      className="item-center data-[current=true]:text-color-red flex gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
    />
  )
}
