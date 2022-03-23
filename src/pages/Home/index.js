import React, { useState } from 'react';
import Contato from '../Contato';
import { Link } from 'react-router-dom';



// import { Container } from './styles';

function Home() {

  const [visivel, setvisivel] = useState(false)

  function mudarTela(e){
    e.preventDefault()
    setvisivel(true)
  }
  return (<div>
      <h1>Boa noite!</h1>
      {/* {
        visivel ? <Contato></Contato> : <></>
      } */}
      
      <button className="btn btn-primary"><Link to={"/contato"}>Contatos</Link></button>
  </div>)
}

export default Home;