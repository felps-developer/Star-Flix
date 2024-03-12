import { useEffect, useState } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const Favoritos = () => {

const[filmes, setFilmes] = useState([])
useEffect(() => {
    const minhaLista = localStorage.getItem("@starflix")
    setFilmes(JSON.parse(minhaLista) || [])
}, [])

const excluirFilme = (id) =>{
    let filtrosFilmes = filmes.filter((item) => {
        return (item.id !== id)
    })
    setFilmes(filtrosFilmes);
    localStorage.setItem("@starflix", JSON.stringify(filtrosFilmes))
    toast.success("Filme removido com sucesso")
}
    return ( 
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>
            {
                filmes.length === 0 && <span>Lista de filmes vazia!</span>
            }
            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Favoritos;