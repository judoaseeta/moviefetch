import * as React from 'react';
import NavItem from '../NavItem/';
import { NavbarContainer } from './styled';
const NavBar: React.SFC<{
    isLoggedIn: boolean;
    signOut: () => void;
}>  = (props) => (
    <NavbarContainer>  
        <i 
            className="fa fa-bars fa-2x hamburger" 
            aria-hidden="true" 
        />
        <nav
            className="left"
        >
            
            <NavItem
                border={true}
                isRight={true} 
                to="/"
            >Home
            </NavItem>
            <NavItem
                border={true} 
                isRight={true} 
                to="/search"
            >Search
            </NavItem>
        </nav>
        <nav>
            {props.isLoggedIn
            ? <NavItem
                border={false}
                isRight={false}
                to="#"    
            >
                <i 
                    className="fa fa-unlock-alt fa-2x" 
                    aria-hidden="true" 
                    onClick={() => props.signOut()}
                />

            </NavItem>
            : <NavItem
                border={false}
                isRight={false}
                to="/authentication" 
            >
                <i 
                    className="fa fa-lock fa-2x" 
                    aria-hidden="true" 
                />
            </NavItem>
            }
        </nav>
    </NavbarContainer>
);

export default NavBar;