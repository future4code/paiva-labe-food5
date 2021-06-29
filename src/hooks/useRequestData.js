import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if(user){
      axios.get(url , {
        headers: {
          Auth: user.token
        }
      })
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => {
          console.log(error)
          alert('Ocorreu um erro, tente novamente')
        })
    }
  }, [url])

  return (data)
}

export default useRequestData