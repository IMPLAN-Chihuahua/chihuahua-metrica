import Typography from "@mui/material/Typography";
import MathJax from "react-mathjax";

const Variable = ({ expr }) => {
    const { nombre, descripcion } = expr;
    return (
        <MathJax.Provider>
            <li>
                <Typography variant='body2' fontSize='1rem'><MathJax.Node inline formula={`${nombre} =`} /> {descripcion}</Typography>
            </li>
        </MathJax.Provider>);
};

export default Variable;