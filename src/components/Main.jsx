import React from 'react';
import Img from "../images/heroImage.jpg";
import Person1 from "../images/person1.png";
import Person2 from "../images/person2.png";
import Person3 from "../images/person3.png";
import ImgPerson from "../images/person4.png"
import {dataCards,work} from "./Dates";
import Form from "./Form";
import {CardJoin, Container,ContainWeb,Works,WorksImage,Images,SeeMore,ContPerson,Clients, ImagesPerson} from '../Styles/Styled-main';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Main = () => {
    return (
        <Container>
                <ContainWeb className="d-flex flex-column">
                    <p className="text-primary">unhappy with your website?</p>
                    <h1>We create beautiful and fast web services</h1>
                </ContainWeb>
            < ImagesPerson src={Img} alt="" className="w-100 py-4"/>
            <CardJoin className="d-flex flex-column">
                <h2>Story, emotion and purpose</h2>
                <p>We help tramsform your ideas into real world applications that will outperform your toughtest competition and help you archieve your strategic goals in short period of time.</p>
                <Form colorLabel="text-dark form-label"/>
            </CardJoin>
            <div className="container">
                <h3 className="my-4">We offer hight demand services</h3>
                <Works className="row" id="Services">
                    {dataCards.map(item => (
                        <div className="col-md-4">
                            <WorksImage className="d-flex justify-content-center align-items-center" color={item.imgColor}>
                            <FontAwesomeIcon icon={item.img} alt="" className="my-4 text-white"/>
                            </WorksImage>
                            <h3>{item.title}</h3>
                            <p className="my-4">{item.text}</p>
                            <button className="btn btn-outline-primary">Get started</button>
                        </div>
                    ))}
                </Works>
                <h3 className="d-inline">Good design means good bbusiness</h3>
                <div className="d-flex align-items-center flex-column mt-4" id="Works">
                    <Images className="row">
                        {work[0].map(item => (
                            <div className="col-md-6" key={item.id}>
                                <ImagesPerson src={item.img} alt=""/>
                                <p className="text-secondary m-1">{item.text}</p>
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </Images>
                    <Images className="row">
                        {work[1].map(item => (
                            <div className="col-md-6" key={item.id}>
                                <ImagesPerson src={item.img} alt=""/>
                                <p className="text-secondary m-1">{item.text}</p>
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </Images>
                </div>
                <SeeMore className="d-flex my-4">
                <button className="btn text-primary mx-4">see more -{">"}</button>
                </SeeMore>
                <Clients className="row" id="Clients">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <b>Meet the team</b>
                        <h1 className="my-3">We are chilled and a laidback team</h1>
                        <p className="text-secondary">lorem ipsum dolor sit amet, consectetur adpipiscing elit.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                            <ImagesPerson src={Person3} alt="" className="col-12"/>
                            </div>
                            <div className="row col-6">
                                <ImagesPerson src={Person2} alt="" className="col-12 my-1"/>
                                <ImagesPerson src={Person1}alt="" className="col-12 my-1"/>
                            </div>
                        </div>
                    </div>
                </Clients>
                <h5 className="px-3 mr-4">"Fast and outstanding results. Edie understands their customer's needs. They have a young and talented team."</h5>
                <ContPerson className="d-flex flex-row align-items-center">
                    <img src={ImgPerson} alt="" className="mx-4"/>
                    <div>
                        <p className="m-0">Carlos Tran</p>
                        <p className="text-secondary m-0">The Decorate Gatsby</p>
                    </div>
                </ContPerson>
            </div>
        </Container>
    )
}

export default Main
