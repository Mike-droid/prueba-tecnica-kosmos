const apiUrl = 'https://jsonplaceholder.typicode.com/photos'

export const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
