import styled from "styled-components"
import { NavLink, useResolvedPath, useMatch } from "react-router-dom"
import 'styled-components/macro'

const NavItem = styled(NavLink)`
  color: ${props => props.active ?
    props.theme.palette.secondary[200] :
    props.theme.palette.primary[200]
  };
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  &::after { // creating the active dot
    content: "";
    width: 6px;
    height: 6px;
    background: ${props => props.theme.palette.secondary[200]};
    border-radius: 50%;
    display: ${props => props.active ? "block" : "none"};
    position: absolute;
    bottom: 10px;
  }
`;

const NavContainer = styled.div`
  height: 90px;
  border-radius: 24px 24px 0px 0px;
  background: ${props => props.theme.palette.white};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: ${props => props.theme.elevations[4]};
  display: flex;
  padding: 0 1rem;
`;

const MatchNavLink = ({ children, to, ...rest }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavItem {...rest} to={to} active={match}>
      {children}
    </NavItem>
  )
}

const AppNavbar = ({ navItems }) => {

  return (
    <NavContainer>
      {navItems.map(({ id, icon: Icon, labelledBy, label, to }) => {
        return (
          <MatchNavLink
            css={`width: 25%;`}
            id={id}
            key={id}
            to={to}
          >
            <Icon aria-labelledby={labelledBy} width="30" height="30" />
            <span id={labelledBy}>{label}</span>
          </MatchNavLink>
        )
      })}
    </NavContainer>
  )

}

AppNavbar.defaultProps = {
  navItems: []
}

export default AppNavbar