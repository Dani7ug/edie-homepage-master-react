import Img1 from "../images/smarthome.jpg";
import Img2 from "../images/onboard.png";
import Img3 from "../images/booking.png";
import Img4 from "../images/juice-product.png";
import {faPen,faServer,faCode} from "@fortawesome/free-solid-svg-icons";

const dataCards = [
    {
        id:1,
        img:faPen,
        imgColor:"#54a0ff",
        title:"UI/UX Design",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id dolores sit assumenda magnam quas consectetur! Rerum hic aliquam laboriosam qui, ducimus"
    },
    {
        id:2,
        img:faCode,
        imgColor:"#27ae60",
        title:"Front End",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id dolores sit assumenda magnam quas consectetur! Rerum hic aliquam laboriosam qui, ducimus"
    },
    {
        id:3,
        img:faServer,
        imgColor:"#ee5253",
        title:"Back End",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id dolores sit assumenda magnam quas consectetur! Rerum hic aliquam laboriosam qui, ducimus"
    }
]
const work = [
[
    {
        id:1,
        img:Img1,
        text:"full stack application",
        title:"Smart home  dashboard"
    },
    {
        id:2,
        img:Img2,
        text:"UX/Ui design",
        title:"Onboard application"
    }
],
[
    {
        id:1,
        img:Img3,
        text:"Mobile  application",
        title:"Booking system"
    },
    {
        id:2,
        img:Img4,
        text:"Front End application",
        title:"Juice product homepage"
    }
]
]
const data = [
    {
        id:1,
        text:"Home",
        href:"#home"
    },
    {
        id:2,
        text:"Services",
        href:"#Services"
    },
    {
        id:3,
        text:"Our Works",
        href:"#Works"
    },
    {
        id:4,
        text:"Clients",
        href:"#Clients"
    },
    {
        id:5,
        text:"Contact",
        href:"#Contact"
    }
];

export {data,work,dataCards}