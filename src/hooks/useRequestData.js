import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [ data, setData ] = useState(initialData);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user)
      return;

    axios.get(url, { headers: { Auth: user.token } })
      .then((response) => {
        setData(response.data);
        console.log('entrou')
      })
      .catch(() => {
        alert("Ocorreu um erro, tente novamente");
      });
  }, [ url]);

  return data;
};

export default useRequestData;
