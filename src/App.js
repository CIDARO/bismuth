import React, { Component } from 'react';
import { Graph } from "react-d3-graph";
import dockerSvg from './assets/docker.svg';
import mongodbSvg from './assets/mongodb.svg';
import nodejsSvg from './assets/nodejs.svg'
import redisSvg from './assets/redis.svg';

const data = {
  nodes: [
    {id: 'Oxygen API', svg: nodejsSvg}, 
    {id: 'Oxygen Cache', svg: redisSvg}, 
    {id: 'Carbon', svg: dockerSvg}, 
    {id: 'Carbon DB', svg: mongodbSvg}, 
    {id: 'Carbon Cache', svg: redisSvg}, 
    {id: 'Carbon Fluorine', svg: dockerSvg},
    {id: 'Copper', svg: dockerSvg},
    {id: 'Copper DB', svg: mongodbSvg},
    {id: 'Helium', svg: dockerSvg},
    {id: 'Helium DB', svg: mongodbSvg},
    {id: 'Helium Cache', svg: redisSvg},
    {id: 'Helium Fluorine', svg: dockerSvg},
    {id: 'Gold', svg: dockerSvg},
    {id: 'Redis Queues', svg: redisSvg}
  ],
  links: [
    {source: 'Oxygen API', target: 'Oxygen Cache'},
    {source: 'Oxygen API', target: 'Carbon'},
    {source: 'Oxygen API', target: 'Helium'},
    {source: 'Carbon', target: 'Carbon DB'},
    {source: 'Carbon', target: 'Carbon Cache'},
    {source: 'Carbon', target: 'Carbon Fluorine'},
    {source: 'Carbon', target: 'Redis Queues'},
    {source: 'Copper', target: 'Copper DB'},
    {source: 'Copper', target: 'Redis Queues'},
    {source: 'Helium', target: 'Helium DB'},
    {source: 'Helium', target: 'Helium Cache'},
    {source: 'Helium', target: 'Helium Fluorine'},
    {source: 'Helium', target: 'Redis Queues'},
    {source: 'Gold', target: 'Redis Queues'},
  ]
};

const config = {
  nodeHighlightBehavior: true,
  linkHighlightBehavior: true,
  directed: true,
  height: window.innerHeight,
  width: window.innerWidth,
  minZoom: 1,
  automaticRearrangeAfterDropNode: true,
  node: {
    fontWeight: 'bold'
  }
}

export default class App extends Component {

  render() {
    return (
      <div className="App flex flex-col items-center justify-center h-full">
        <Graph 
          id="graph" 
          data={data} 
          config={config}
        />
      </div>
    );
  }
}
