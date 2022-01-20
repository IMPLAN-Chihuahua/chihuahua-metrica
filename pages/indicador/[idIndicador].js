
export default function FichaTecnica(props) {
    const data = props.data;

    console.table(data);
    /**
     * data.nombre
     * data.ultimoValorDisponible
     * data.anioUltimoValorDisponible
     * data.definicion
     * data.Modulo.temaIndicador
     * data.Modulo.color
     * data.Cobertura.nombre
     * 
     */
    return <li>test</li>
}

export async function getServerSideProps(context){
    const res = await fetch(`${process.env.INDICADORES_BASE_URL}/modulos/1/indicadores/1`);
    const data = await res.json();
    if (res.status === 200) {
        return {
            props: { ...data }
        }
    } else
    {
        return{
            props: {
                data: []
            }
        }
    }
}