import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticicas, setTotalNoticicas] = useState(0);

  useEffect(() => {
    const consusltarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);

      setNoticias(data.articles);
      setTotalNoticicas(data.totalResults);
      setPagina(1);
    };
    consusltarAPI();
  }, [categoria]);

  useEffect(() => {
    const consusltarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);

      setNoticias(data.articles);
      setTotalNoticicas(data.totalResults);
    };
    consusltarAPI();
  }, [pagina]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, valor) => {
    setPagina(e.target.textContent);
  };
  return (
    <NoticasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        handleChangePagina,
        pagina,
      }}
    >
      {children}
    </NoticasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticasContext;
