export const fetchUsers = async (params) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  return response.json()
}