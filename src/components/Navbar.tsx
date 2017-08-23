import * as React from 'react';
import NavItem from './NavItem';
import { NavbarContainer } from './styled';
const Navbar: React.SFC<{}>  = () => (
    <NavbarContainer>
        <div>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/search">Search</NavItem>
        </div>
    </NavbarContainer>
);

export default Navbar;