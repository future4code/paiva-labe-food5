import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        Auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNOcEhuNHp1Q2VTV0NiNTN6TmFKIiwibmFtZSI6IkRyZW5vdmEiLCJlbWFpbCI6ImRyZW5vdmFAZW1haWwuY29tIiwiY3BmIjoiODcyLjEwNS4zNjAtMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjI0ODk0Njg4fQ.vMPWxv_1Qz00_0kAfz0iJ7OrZ2obylHUoWMYkzkf884'
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (data)
}

export default useRequestData