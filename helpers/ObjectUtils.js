export const isUndefined = (obj) => typeof obj === 'undefined';

export const parametizeQuery = (query) => {
    const queryParams = new URLSearchParams({
        ...query
    })

    return queryParams.toString();
}