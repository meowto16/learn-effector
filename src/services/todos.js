export const fetchTodos = async (params) => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const searchParams = new URLSearchParams(params || {})
    const query = searchParams.toString() ? `?${searchParams.toString()}` : ''
    const response = await fetch(url + query, {cache: "force-cache"})

    return response.json()
}