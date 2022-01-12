import Head from 'next/head';
import Link from 'next/link';
import Link from 'next/link';


export default function Modulo(props) {
    const data = props.data;
    const modulos = data.map(modulo => {
        return (
            <li>
                <Link href={`indicadores/${modulo.id}`}>
                    <a>
                    {modulo.temaIndicador}
                    </a>
                </Link>
            </li>
        );
    });

    return (
        <div>
            <Head>
                <title>Modulos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Modulos</h1>
            <ul>
                {modulos}
            </ul>
        </div>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.INDICADORES_BASE_URL}/modulos`);
    const data = await res.json();

    if (res.status === 200) {
        return {
            props: {
                ...data
            }
        }
    } else {
        return {
            props: {
                data: []
            }
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}
