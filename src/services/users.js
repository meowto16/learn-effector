export const fetchUsers = async (params) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'force-cache' })

  return response.json()
}