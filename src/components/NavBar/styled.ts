import styled from '../../utils/styledComponent';
export const NavbarContainer = styled.header`
display: flex;
flex-flow: row nowrap;
border-bottom: 1px solid black;
height: 40px;
justify-content: space-between;
background: linear-gradient(to right, #3498db, #2980b9);
    
> nav {
    display: flex;
    justify-content: center;
    align-items: stretch;
    text-align: center;
}
i {
    &.hamburger{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        margin-left: 4px;
        @media(min-width: 600px) {
            display: none;
        }
    }  
}
`;