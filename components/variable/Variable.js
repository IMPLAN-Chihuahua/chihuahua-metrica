import Typography from "@mui/material/Typography";
import MathJax from "react-mathjax";

const Variable = ({ expr }) => {
    const { nombre, nombreAtributo } = expr;
    return (
        <MathJax.Provider>
            <Typography variant='body2' fontSize='1rem'><MathJax.Node inline formula={`${nombre} =`} /> {nombreAtributo}</Typography>
        </MathJax.Provider>);
};

export default Variable;