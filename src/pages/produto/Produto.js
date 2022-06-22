import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


// import { Container } from './styles';

function Produto() {

  const { id } = useParams()
  const [produto, setProduto] = useState(null)
  const [erro, setErro] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    buscarProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)

  },[id])

async function buscarProduto(url){
  try {
    const res = await fetch(url) 
    const json = await res.json()
    setProduto(json)
  } catch (error) {
    setErro("Ocorreu um erro.")
    
  }
  finally{setCarregando(false)}
}
if(carregando) return  <p>Está carregando</p>
if(erro) return <p>{erro}</p>
if(produto === null) return null
  return (
    <>
    <section className='produtos animeLeft' >

      <div>
        {
          produto.fotos.map((foto,i)=>(
            <img src={foto.src} alt={foto.titulo} key={i}></img>

          ))
        }
      

      </div>

      <div>
        <h1>
            Nome: {produto.nome}
        </h1>
        <span className="preco">
            Preço: {produto.preco}
        </span>
        <p className="descricao">
            Descrição: {produto.descricao}
        </p>

      </div>
    </section>
    </>
  );
}

export default Produto;