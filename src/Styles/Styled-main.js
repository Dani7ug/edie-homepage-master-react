import Styled from "styled-components";
const Container = Styled.article`
    margin:40px 20px 70px 20px;
`;
const ContainWeb  = Styled.div`
margin:10px 0 20px 100px;
@media(max-width:992px){
    margin:10px 0 20px 30px;
}
@media(max-width:576px){
    margin:10px 10px 20px 10px;
}
`
const CardJoin = Styled.div`
margin:10px 0 150px 100px;
width:300px;
    @media(max-width:992px){
        margin:10px 0 150px 30px;
    }
    @media(max-width:576px){
        margin:10px 150px 20px 10px;
    }
`;

const Works = Styled.div`
    margin:80px 0 150px 0;
    button{
        border:1px solid gray;
        border-radius:15px;
        color:gray;
    }
`
const WorksImage = Styled.div`
width:70px;
height:70px;
margin:20px 0;
border-radius:15px;
background:${props => props.color};
svg{
    font-size:30px;
}
`;
const Images = Styled.div`
    div:first-child{
        margin-top:100px;
    }
    @media( max-width:1200px){
        img{
            width:400px;
            height:400px;
        }
    }
    @media( max-width:992px){
        img{
            width:300px;
            height:300px;
        }
    }
    @media( max-width:767px){
        div:first-child{
            margin:20px;
        }
        div{
            display:flex;
            flex-direction:column;
            align-items:center;
        }
    }
`;
const SeeMore = Styled.div`
    justify-content:flex-end;
    @media(max-width:767px){
        justify-content:flex-start;
    }
`;
const FormStyles = Styled.div`
    position:relative;
    input{
        position:relative
    }
    button{
        position:absolute;
        right:0;
    }
`;
const ContPerson = Styled.div`
margin:30px 0px 150px 0px;
    img{
        width:50px;
        height:50px;
        border-radius:14px;
    }
`;
const Clients = Styled.div`
    margin:120px 0;
    b{
        color:#d35400;
    }
    h1{
        width:75%;
        @media (max-width:776px){
            width:100%;
        }
    }
`;
const ImagesPerson = Styled.img`
    border-radius:40px;
`;


export {Container,ContainWeb,CardJoin,Works,WorksImage,Images,SeeMore,FormStyles,ContPerson,Clients,ImagesPerson};