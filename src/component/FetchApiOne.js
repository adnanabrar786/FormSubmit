//            Get Data from axios api

import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchApiOne = () => {

  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const data = res.data;
        setData(data);
      })
      .catch(err => {
        console.error(err); 
      });
  }, []);

  return (
    <div>

      {data.map(photo => (
        <ul key={photo.id}>
          <li>
            {photo.title}
          </li>
          <li>
            {photo.url}
          </li>
        </ul>
      ))}

    </div>
  );
};

export default FetchApiOne;