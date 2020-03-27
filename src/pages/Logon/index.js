import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './styles.css';

import logo from  '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
       <div className="logonContainer">
           <section className="form">
                <img src={logo} alt="Logo"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button"  type="submit">Entrar</button>

                    <Link className="backLink" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
           </section>
           <img src={heroesImg} alt="Heroes"/>
       </div>
    );
}