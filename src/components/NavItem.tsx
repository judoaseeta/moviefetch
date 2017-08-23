import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '../utils/styledComponent';
type NavItemProps = {
    children: React.ReactChild
    to: string;   
};
const NavItem: React.SFC<NavItemProps> = (props) => (
    <NavLinkStyled
        to={props.to}
    >{props.children}
    </NavLinkStyled>
);
const NavLinkStyled = styled(NavLink)`
    width: 80px;
    color: white;
    text-decoration: none;
    border-right: 0.1px solid #ecf0f1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default NavItem;