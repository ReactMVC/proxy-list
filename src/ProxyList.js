import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const ProxyList = () => {
  const [proxies, setProxies] = useState([]);

  useEffect(() => {
    axios.get('https://mtpro.xyz/api/?type=mtproto')
      .then(response => {
        setProxies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Proxy List</h1>
      <ul>
        {proxies.map(proxy => (
          <li key={proxy.host}>
            <div>{proxy.host}:{proxy.port} ({proxy.country} )</div>
            <a href={`tg://proxy?server=${proxy.host}&port=${proxy.port}&secret=${proxy.secret}`}>Connect</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProxyList;