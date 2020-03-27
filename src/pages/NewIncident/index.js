import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


import logo from '../../assets/logo.svg'
 

import './styles.css'

    export default function Profile(){
            return(
                <div className="new-incident-container">
                <div className="content">
                    <section>
                        <img src={logo} alt="Be the hero"/>
    
                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
    
                        <Link className="backLink" to="/">
                            <FiArrowLeft size={16} color="#E02041"/>
                           Voltar para home
                        </Link>
                    </section>
                    <form action="">
                        <input placeholder="Titulo do caso"/>
                        <textarea placeholder="Descrição"/>
                        <input placeholder="Valor em reais"/>
    
                        <button className="button" type="submit"> Cadastrar </button>
                    </form>
                </div>
            </div>
            )
        }
