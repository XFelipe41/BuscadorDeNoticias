import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import useNoticias from "../hooks/useNoticias";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];
function Formulario() {
  const { categoria, handleChangeCategoria } = useNoticias();
  return (
    <from>
      <FormControl fullWidth>
        <InputLabel>Categorias</InputLabel>
        <Select
          label="Categoria"
          onChange={handleChangeCategoria}
          value={categoria}
        >
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </from>
  );
}

export default Formulario;
