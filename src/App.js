import React from 'react';
import BabyNamesData from "./babyNamesData.json"
import './App.css';

function NameList(props) {
    return (
        <div id="nameList">
            <ul>
                {props.names.map(name => (
                    <li id={name.id} class={name.sex}>{name.name}</li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div>
            <NameList names={BabyNamesData.sort((a, b) => a.name > b.name)} />
        </div>
    );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
