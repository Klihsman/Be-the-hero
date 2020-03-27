import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'

import './styles.css';

import logo from  '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history  = useHistory();

   async function handleLogin(e){
        e.preventDefault();
           
        try {
            const response = await api.post('/session', { id })

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.nome);

            history.push('/profile')

        } catch (error) {
            console.log('Falha no login')
        }

    }
        return(
       <div className="logonContainer">
           <section className="form">
                <img src={logo} alt="Logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                    placeholder="Sua ID"
                    value = {id}
                    onChange = {e => setId(e.target.value)}
                    />
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