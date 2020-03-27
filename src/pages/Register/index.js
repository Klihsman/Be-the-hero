import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import logo from  '../../assets/logo.svg';

import './styles.css'

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email, 
            whatsapp,
            cidade,
            uf,
        };

        try{
            const response = await api.post('ongs', data);
          alert(`Seu ID de acesso ${response.data.id}`)
        }catch (err) {
           console.log('Erro no cadastro, tente novamente.')
        }
    }


    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be the hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="backLink" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da Ong"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="inputGroup">
                        <input 
                        type="text" 
                        placeholder="Cidade"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        />
                        <input 
                        type="text" 
                        placeholder="UF" 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        style={{width: 80 }}/>
                    </div>

                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}