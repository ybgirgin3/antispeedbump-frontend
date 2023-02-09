import axios from 'axios';
import { Button, Input, Switch, Empty } from 'antd';
import { useState } from 'react';
import Preview from 'react-data-preview';

const Getter = (props) => {
  let url = 'http://127.0.0.1:8000/get_from_another/';
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [collect, setCollect] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    let config = {
      username: name,
      collect: collect,
    };

    axios
      .post(url, config)
      .then((response) => {
        console.warn(response.data);
        setData(response.data);
      })
      .catch((err) => console.warn(err));

    return data;
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <Input placeholder="Instagram Username" onChange={handleChange} />
        <Switch
          onChange={() => {
            setCollect(!collect);
          }}
        />
        <Button>Submit</Button>
      </form>
      <div>
        <div>{data ? <Preview theme={'light'} data={data} /> : <Empty />}</div>
      </div>
    </div>
  );
};

export default Getter;
