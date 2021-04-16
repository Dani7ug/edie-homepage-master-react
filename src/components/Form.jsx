import React from 'react';
import { FormStyles } from '../Styles/Styled-main';

export default ({colorLabel})=>{
    return (
        <form action="" className="mb-4 px-3">
            <label htmlFor="" className={colorLabel}>Want us to contact you?</label>
            <FormStyles className="d-flex">
                <input type="email" className="form-control" placeholder="Email"/>
                <button className="btn btn-primary">Join</button>
            </FormStyles>
        </form>
    )
}
