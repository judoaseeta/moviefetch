import * as React from 'react';
import NavItem from './NavItem';
import { NavbarContainer } from './styled';
const Navbar: React.SFC<{}>  = () => (
    <NavbarContainer>
        <nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/search">Search</NavItem>
        </nav>
    </NavbarContainer>
);

export default Navbar;