import React from 'react';
import {data} from "./Dates";
import Form from "./Form";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import Twitter from "../images/twitter.svg";
import { DevChalenges, Foot, NavlList } from '../Styles/Styled-footer';


const Footer = () => {
    return (
        <Foot className=" pb-2 px-2 pt-2" id="Contact">
            <div className="row px-4 mx-2">
                <NavlList className="col-md-4 list-group m-4">
                    {data.map(item => <li class="" key={item.id}><a href={item.href} className="text-white">{item.text}</a></li>)}
                </NavlList>
                <div className="col-md-4 mb-4 mt-4">
                    <h4 className="text-white">Edie</h4>
                    <div className="d-flex">
                        <a className="mx-1" href="#"><img  src={Instagram} alt="Instagram"/></a>
                        <a className="mx-1"  href="#"><img  src={Linkedin} alt="Linkedin"/></a>
                        <a className="mx-1"  href="#"><img  src={Twitter} alt="Twitter"/></a>
                    </div>
                </div>
                <Form className="col-md-4" colorLabel="text-white form-label mt-4"/>
            </div>
            <DevChalenges className=" text-white text-center">create by <b>username</b> - devChallenges.io</DevChalenges>
        </Foot>
    )
}

export default Footer
