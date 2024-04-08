import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
const App = ()=>{
  let [details, setDetails] = useState([
    {
      name: "Taye",
      goods: "clothes",
      qty: 10
    },
    {
      name: "Kenny",
      goods: "Bags",
      qty: 20
    },
    {
      name: "Idowu",
      goods: "shoes",
      qty: 30
    }
  ]);
  const increment = (i)=>{
    let allDetails = [...details];
    let foundDetail = allDetails.find((_, index)=>index===i);
    foundDetail.qty++;
    setDetails(allDetails);
  }

  const handleDelete = (i) =>{
    const filteredDetails = details.filter((_, index) => index !== i);
    setDetails(filteredDetails);
  }
  return(
    <div>
      <Header/>
     {details.map((detail, i)=>(
      <Main 
        key={i} 
        index={i} 
        name={detail.name} 
        goods={detail.goods} 
        qty={detail.qty} 
        increase={increment}
        deleteProps={handleDelete}
      />
     ))}
     
     <Footer/>
      
    </div>
  );

}





export default App;

