import { NavLink } from 'react-router-dom';
import styled from '../../utils/styledComponent';
type NavLinkStyledProps = {
    isRight: boolean;
};
export const NavLinkStyled = styled(NavLink)`
    color: white;
    text-decoration: none;
`;
export const NavLinkContainer = styled.div`
    width: 80px;
    color: white;
    text-decoration: none;
    ${(props: NavLinkStyledProps) => 
        props.isRight 
        ? 'border-right: 0.1px solid #ecf0f1;' 
        : 'border-left: 0.1px solid #ecf0f1;'
    }
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 600px) {
        display: none;
    }   
`;