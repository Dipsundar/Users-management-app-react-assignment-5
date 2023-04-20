import { useEffect, useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states

  const [data, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch(url)
    .then((res)=>{
      if(!res.ok){
        throw Error("Fetching is not successfull");
      }
      else {
        return res.json();
      }
    })
    .then((data)=>{
      setDate(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(error => {
      setError(error.message);
      setIsLoading(false);
    })
  }, [url]);

  return {data, isLoading, error};

};

export default useFetch;