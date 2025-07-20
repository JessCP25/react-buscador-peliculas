import { useEffect, useRef, useState } from "react";

export function useSearch(){
  const [search, setSearch] = useState('');
  const [error, setError] = useState();
  const firstSearch = useRef(true)

  useEffect(()=>{

    if(firstSearch.current){
      firstSearch.current = search === '';
      return
    }

    if(search === ''){
      setError('Tiene que ingresar un valor de busqueda')
      return;
    }
  
    if(search.length < 3) {
      setError('Tiene que tener mas de 3 caracteres')
      return;
    }
    
    setError(null);
  
  },[search])

  return ({
    search, setSearch, error
  })
}