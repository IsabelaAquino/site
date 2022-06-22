import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Produtos.css';

// import { Container } from './styles';

function Produtos() {
    
    const [produtos, setProdutos] = useState([])

    const url="https://ranekapi.origamid.dev/json/api/produto"

    useEffect(() => {
      fetch(url).then(res => res.json()).then(json=>setProdutos(json)) 
    },[])
    
    if (produtos.length <= 0) return <></>


console.log(produtos)
  return (

    <section className='produtos animeLeft'>
        
       
            {
            produtos.map((produto, i) => (
                <Link className='title' key={produto.id} to={`produto/${produto.id}`}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}></img>
                    <h1 className='title'>{produto.nome}</h1>
                </Link>
            ))
            }

      

        
    </section>
  );
}

export default Produtos;