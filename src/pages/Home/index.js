import React, { useState } from 'react';
import Contato from '../Contato';
import { Link } from 'react-router-dom';
import './home.css';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons"; 
import Card from "../../componentes/card"
import dados from "../../dados/dados.json"
import Footer from "../../componentes/footer"



// import { Container } from './styles';


function Home() {

  const [visivel, setvisivel] = useState(false)
  const handle = useFullScreenHandle();
  let title ="Jonas";

  function mudarTela(e){
    e.preventDefault()
    setvisivel(true)
  }
  
  return (<div className='home'>

  <FullScreen className='videof' handle={handle}>

  <iframe  className='video' src="https://www.youtube.com/embed/jukLsFPRBWA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

  </FullScreen>

  <div className='exp'
    onClick={handle.enter}
    ata-tip="FullScreen"><FontAwesomeIcon color='#FF0000' icon={faExpand}
     />
  </div>
  <div className="estilo-card">
  {
    dados.map((dado, i)=>(
      <Card key={i} title={dado.titulo} texto={dado.texto}/>
      
    ))
  }
  </div>
  <Footer></Footer>
      
  </div>)
}

export default Home;