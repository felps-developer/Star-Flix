import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../services/api";
import './index.css'
import { toast } from "react-toastify";


const Filme = () => {
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        async function loadFilme() {
            await Api.get(`/movie/${id}`, {
                params: {
                    api_key: "1716ccbe6a9c6627d366f995cf69015f",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate('/', { replace: true });
                    return;
                })
        }
        loadFilme();

        return () => {
            console.log("componente foi desmontado")
        }
    }, [navigate, id])

    const salvarFilme = () => {
        const minhaLista = localStorage.getItem("@starflix");

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

        if (hasFilme) {
            toast.warning("ESSE FILME JÀ ESTÀ NA LISTA");

            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@starflix", JSON.stringify(filmesSalvos))
        toast.success("FILME SALVO COM SUCESSO")

    }

    if (loading) {
        return (
            <div className="filme-info">
                <h2>Carregando detalhes do filme ...</h2>
            </div>
        )
    }

    return (
        <>
            <div className="filme-info">
                <h1>{filme.title}</h1>
                <img src={`
https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>

                <strong>Avaliação: {filme.vote_average.toFixed(1)}/10</strong>
            </div>
            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
            </div>

        </>
    );

}

export default Filme;