import { useCallback, useEffect, useState } from "react";
import qs from 'qs';
import useSWR from "swr";

/**
 * 
 * @param {Object} args arguments to useIndicadores hook
 * @param {('dimensiones' | 'temas')} args.resource get indicadores classify by a given resource (objetivos or temas) e.g., indicadores in objectivos, or indicadores in temas.
 * @param {number} args.resourceId id of given resource e.g., objetivos/1/indicadores here objetivos is the resource and 1 is its resourceId
 * @param {string} searchQuery
 * @param {object} filters
 */
const useIndicadores = (args) => {
    const { resource, resourceId, searchQuery, ...filters } = args;
    const [page, setPage] = useState(1);
    const queryParams = qs.stringify({
        searchQuery,
        page,
        ...filters
    }, {
        addQueryPrefix: true,
        skipNulls: true
    })

    const [totalPages, setTotalPages] = useState(0);
    const [indicadores, setIndicadores] = useState([]);

    const endpoint = `/${resource}/${resourceId}/indicadores${queryParams}`
    const { data, error, mutate } = useSWR(endpoint, fetchIndicadores);


    const nextPage = useCallback(() => {
        setPage(prevPage => prevPage + 1);
    }, [])

    const prevPage = useCallback(() => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }, [page]);

    const goToPage = useCallback((_page) => {
        if (_page < 0) return;
        setPage(_page)
    }, [])


    useEffect(() => {
        if (!data) return
        setIndicadores(data.data)
        setTotalPages(data.totalPages)
    }, [data]);

    return {
        isLoading: !data && !error,
        indicadores,
        error,
        mutate,
        page,
        totalPages,
        nextPage,
        prevPage,
        goToPage
    }
}

const fetchIndicadores = async (endpoint) => {
    const res = await fetch(`${process.env.INDICADORES_BASE_URL}${endpoint}`)
    return res.json();
}


export default useIndicadores;