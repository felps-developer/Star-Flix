import { useEffect, useState } from "react";
import Api from "../../services/api";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  const comeco = 0;
  const limite = 10;
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadFilmes() {
      const response = await Api.get("/movie/now_playing", {
        params: {
          api_key: "1716ccbe6a9c6627d366f995cf69015f",
          language: "pt-BR",
          page: page,
        },
      });

      setFilmes((prevFilmes) => [...prevFilmes, ...response.data.results.slice(comeco, limite)]);
      setLoading(false);
    }

    loadFilmes();
  }, [page]);

  const carregarFilmes = () => {
    
    setPage(page + 1);
    setLoading(true);

    Api.get("/movie/now_playing", {
      params: {
        api_key: "1716ccbe6a9c6627d366f995cf69015f",
        language: "pt-BR",
        page: page,
      },
    })
      .then((response) => {
        const novosFilmes = response.data.results.slice(comeco, limite);
        setFilmes((prevFilmes) => [...prevFilmes, ...novosFilmes]);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ocorreu um erro ao carregar os filmes.");
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes ...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="lista-filmes" id="lista-filmes">
          {filmes.map((filme) => {
            return (
              <article key={filme.id} className="filme">
                <strong>{filme.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  alt={filme.title}
                />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
        <button onClick={carregarFilmes}>Carregar mais</button>
      </div>
    </>
  );
};

export default Home;