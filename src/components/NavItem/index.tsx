import * as React from 'react';
import { NavLinkContainer, NavLinkStyled } from './styled';
type NavItemProps = {
    border: boolean;
    children: React.ReactChild
    isRight: boolean
    onClick?: () => void;
    to: string;   
};
const NavItem: React.SFC<NavItemProps> = (props) => (
    <NavLinkContainer
        border={props.border}
        isRight={props.isRight}
    >
        <NavLinkStyled
            to={props.to}
            onClick={props.onClick}
        >{props.children}
        </NavLinkStyled>
    </NavLinkContainer>
);

export default NavItem;