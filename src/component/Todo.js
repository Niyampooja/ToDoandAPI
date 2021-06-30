import React,{useState} from 'react'
import todo from '../component/images/logo.png';
import '../App.css';

const Todo = () => {
  const [inputdata, setInputdata] = useState('');
  const [items, setItems] = useState([]);
  const addItem = () =>{
    if(!inputdata){

    }else{
      setItems([...items, inputdata]);
      setInputdata('');
    }
    }
    const removeAll = () =>{
      setItems([]);
    }
   
    return (
        <>
          <div className="main_div">
            <div className="child_div">
                <figure>
                    <img src={todo} alt="todologo" />
                    <h2 style={{fontSize: "25px"}}>Add you List Here</h2>
                </figure>
                <div className="addItems">
                  <input style={{backgroundColor:'white'}} type="text" placeholder= "✍️ Add here" id="" 
                    value={inputdata}
                    onChange={(e) => setInputdata(e.target.value)}

                  />
                  <button className="add-btn" title="Add Items" onClick={addItem}>+</button>
                </div>
                <div className="showItems">
                {
                  items.map((element, index)=> {
                      return(
                        <div className="eachItem" key={index}>
                    <h3>{element}</h3>
                   
                  </div>
                      )
                  })
                }
                 
                </div>
                <div className="showsItems">
                  <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                </div>
            </div>
          </div>  
        </>
    );
};

export default Todo;
