import React from 'react';
import {useState} from 'react';
import './App.css';

import BabyNamesData from "./babyNamesData.json"
BabyNamesData.sort((a, b) => a.name > b.name);

function NameList(props) {
    return (    
        <ul>
            {props.names.map(
                name => (<li id={name.id} class={name.sex}>{name.name}</li>
            ))}
        </ul>
    );
}

function App() {
    let [nameList, setNameList] = useState(BabyNamesData);

    function findNames() {
        let result = document.getElementById("searchBar").value.toLowerCase();
        
        if(result === "") {
            return setNameList(nameList = BabyNamesData);
        }
          
        let newNameList = [];          
        for (let i = 0; i < BabyNamesData.length; ++i) {             
            if(BabyNamesData[i].name.toLowerCase().includes(result)) {                   
                newNameList.push(BabyNamesData[i]);              
            }           
        }     
        return setNameList(nameList = newNameList);
    }

    return (
        <div id="nameList">
            <input id="searchBar" onInput={findNames}></input>
            <NameList names={nameList} />
            <hr id="line"/>
        </div>
    );
}

export default App;
