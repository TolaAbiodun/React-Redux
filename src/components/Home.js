import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/comments';
  const [data, setData] = useState('');
    useEffect(() => {
        axios.get(baseUrl).then((response) => {
          setData(response.data[0].email);
        }).catch((error) => {console.log(error);})
    }, []);
  return <div>
     <p>Email: {data}</p>
  </div>;
};

export default Home;
