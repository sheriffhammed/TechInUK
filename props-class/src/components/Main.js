const Main = ({name, goods, qty, increase, index, deleteProps})=>{
  
    return(
        <main>
          <div>Welcome to {name} page. We sell {qty} {goods} here
          <button onClick={()=>increase(index)}>increment</button>
          <button onClick={() => deleteProps(index)}>delete</button>
          </div>
          
          
        </main>
    )
  }
  export default Main;