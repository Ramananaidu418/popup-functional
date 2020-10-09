import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {v4 as newId}  from "uuid";

import Errormsg from "./Components/Errormsg/Errormsg";


const App =(props)=> {
  const [error, setError] = useState([
      {
        nodename: "text node",
        errorId: newId(),
        message: "Value is 'null'.Value should not be empty",
      },
      {
        nodename: "text node",
        errorId: newId(),
        message: "Value is 'null'.Example of a longer error message which takes more than one row",
      },
      {
        nodename: "text node",
        errorId: newId(),
        message: "Value is 'null'.Value should not be empty",
      },
      {
        nodename: "text node",
        errorId: newId(),
        message: "Value is 'null'.Value should not be empty",
      },
    ]
    
  );
  const [isopen, setIsopen] = useState(true)


  const items = [];
  const Selection = (id) =>{
    if(!items.includes(id)){
        items.push(id);
        
    }else {

      items=items.splice(items.indexOf(id),1);
     

    }

}
 const onSubmit=()=>{
  
  if(items.length === 0){
    alert("your not selected any items");
    

  }else{
    alert(items)
  }
}

    return (
      <div className="app">
        {isopen? 
        <div className="popup">
          <div className="top">
            <h1>Validation Results</h1>
          </div>
          <div className="middle">
            {error.map((per) => {
              return (  
                <Errormsg
                {...per} 
                //key={per.errorId}
                  
                  Selection = {Selection}
                />
              );
            })}
          </div>
          <div className="close">
             
            <div className="btn">

              <p onClick={() => setIsopen({ isOpen: false })}>close</p>
            </div>
            <div className="btn submitBtn" onClick={onSubmit}>
            <p>submit</p>
            </div> 
          </div>
        </div>:""}
      </div>
    );
  
}

export default App;
