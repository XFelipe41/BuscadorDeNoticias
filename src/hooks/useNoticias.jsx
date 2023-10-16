import { useContext } from "react";
import NoticasContext from "../context/NoticiasProvider";

const useNoticias = () => {
  return useContext(NoticasContext);
};

export default useNoticias;
