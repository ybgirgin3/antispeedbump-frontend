import React from 'react';
import Getter from '../Components/sub/getter';
import { Tabs } from 'antd';

const Home = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      style={{
        width: '50%',
        height: '50%',
      }}>
      <Tabs.TabPane tab="Antispeedbump" key="1">
        <Getter />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Home;
