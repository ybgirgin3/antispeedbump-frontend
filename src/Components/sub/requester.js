import axios from 'axios';
import { useState } from 'react';

const Requester = (props) => {
  let config = props.config;
  const [data, setData] = useState({});

  axios(config).then((response) => {
    console.log('response.data: ', response.data);
    setData(response.data);
  });

  return data;
};

export default Requester;
