export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}
// export const getAnimeResponses = async(resource, query) => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
//     const char = await response.json()
//     return char
// }

// export const getAnimeNestedResponse = async(resource, objectProperty) => {
//     const response = await getAnimeResponse(resource)
//     return response.data.flatMap(item => item[objectProperty])
// }

export const reproduce = (data, gap = 5) => {
    const first = ~~(Math.random() * (data.lenght - gap) + 1) //10
    const last = first + gap // ? 15

    const  response = {
        data: data.slice(first, last)
    }
    return response 
}