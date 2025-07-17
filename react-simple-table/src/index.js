import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleTable from './SimpleTable.js';

const test_data = [
    {"Header One":1,
     "Header Two":2,
     "Header Thr":3,
     "Header Fou":4,
     "Header Fiv":5,
     "Header Six":6},
    {"Header One":11,
     "Header Two":22,
     "Header Thr":33,
     "Header Fou":44,
     "Header Fiv":55,
     "Header Six":66},
    {"Header One":111,
     "Header Two":222,
     "Header Thr":333,
     "Header Fou":444,
     "Header Fiv":555,
     "Header Six":666},
    {"Header One":1111,
     "Header Two":2222,
     "Header Thr":3333,
     "Header Fou":4444,
     "Header Fiv":5555,
     "Header Six":6666},
    {"Header One":11111,
     "Header Two":22222,
     "Header Thr":33333,
     "Header Fou":44444,
     "Header Fiv":55555,
     "Header Six":66666}
    ]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleTable 
        data={test_data}
    />
  </React.StrictMode>
);
