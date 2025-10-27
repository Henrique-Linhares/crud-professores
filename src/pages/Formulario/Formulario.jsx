import React, { useState } from 'react'

function Formulario() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className='container'>
        <h1 className='title'>Formulario de Cadastro</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Digite seu nome completo:'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

             <input 
                type='text'
                placeholder='Digite seu CPF (xxx.xxx.xxx-xx):'
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Formulario