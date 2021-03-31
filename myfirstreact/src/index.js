import React from 'react';
import ReactDOM from 'react-dom';


// const myfirstelement = <h1>Hello Meli, te amo ♥</h1>
const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>Luis</td>
        </tr>
        <tr>
            <td>Meli</td>
        </tr>
    </table>
);

ReactDOM.render(myelement, document.getElementById('root'));