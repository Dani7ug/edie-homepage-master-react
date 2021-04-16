import Styled from 'styled-components';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"


const ButtonToggle = Styled(NavbarToggle)`
border:none;
    &:focus{
        box-shadow:none;
    }
    span{
        display:block;
        width:30px;
        height:4px;
        background:#1a1a1a;
        margin:5px 0px;
    }
`;
const Collapse= Styled(NavbarCollapse)`
 display:flex;
 justify-content:flex-end;
 @media(max-width:996px){
     justify-content:center;
 }
`;
export {ButtonToggle,Collapse}