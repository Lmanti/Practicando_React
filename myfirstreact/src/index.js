import React from 'react';
import ReactDOM from 'react-dom';
import Car2 from './App.js'; //Importamos el componente (modulación) para poder usarlo


// const myfirstelement = <h1>Hello Meli, te amo ♥</h1>    
// const myelement = ( //Para escribir en varias lineas necesitan encerrar el código en parentecis
//     <table>
//         <tr>
//             <th>Name</th>
//         </tr>
//         <tr>
//             <td>Luis</td>
//         </tr>
//         <tr>
//             <td>Meli</td>
//         </tr>
//     </table>
// );

// const myelement2 = (
//     <div>
//         <h1>Luis</h1>
//         <h1>Meli</h1>
//     </div>
// )

// const myinput = <input type="text"/>

//Componentes (son iguales a clases y funciones)

// class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = {color: "red"} // las propiedades de react se encuentran en un objeto llamado "state"
//     }
//     render() {
//         return <h2>Hi, I'm a {this.state.color} car</h2>; // y se usan de esta manera
//     }
// }

// Tambien en forma de función...

// function Car() {
//     return <h2>Hi, I'm a car</h2>;
// }

class Car extends React.Component {
    render() {
        return <h2>Hi, I'm a {this.props.color} car</h2>; //tambien se puede usar "props"
    }
}

//pueden usarse referencias de una clas4e en otra

class Garage extends React.Component {
    render() {
        return (
        <div>
            <h1>Who lives in my Garage?</h1>
            <Car />
            <Car2 />
        </div>//de esta manera
      );
    }
  }

// ReactDOM.render(myelement2, document.getElementById('luis'));
// ReactDOM.render(myinput, document.getElementById('root'));
// ReactDOM.render(<Car/>, document.getElementById('root'));
ReactDOM.render(<Car color="red"/>, document.getElementById('root'));//así se usa un "props", es como darle argumentos a una funcion
ReactDOM.render(<Garage />, document.getElementById('root')); //cuando invocamos a garage, como dentro de el esta Car tambien es invocado, como importamos Car2, tambien es llamado
