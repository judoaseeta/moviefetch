import * as React from 'react';
import NavItem from '../NavItem/';
import { NavbarContainer} from './styled';
const NavBar: React.SFC<{}>  = () => (
    <NavbarContainer>  
        <nav>
            <i className="fa fa-bars fa-2x" aria-hidden="true" />
            <NavItem
                isRight={true} 
                to="/"
            >Home
            </NavItem>
            <NavItem 
                isRight={true} 
                to="/search"
            >Search
            </NavItem>
        </nav>
        <nav>
            <NavItem
                isRight={false} 
                to="/signin"
            >Sign In
            </NavItem>
            <NavItem
                isRight={false} 
                onClick={() => console.log('signOut')}
                to="#"
            >Sign Out
            </NavItem>
        </nav>
    </NavbarContainer>
);

export default NavBar;