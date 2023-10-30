import { useState } from 'react'
import './App.css'
import Products from "./Products";
import Home from "./Home";

function App() {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);

  const YOUR_APP_ID = "9916e6ff";
  const YOUR_APP_KEY ="056efc95b1dff0c77a1cf4505f4b673c";

  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className='app'>
      <h1 className='appName'>FOOD RECIPE APP</h1>
      <form onSubmit={submitHandler} className='appForm'>
        <input type="text" className='inputText' placeholder="I'm Looking For..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        <input type="submit" className="inputSearch" value="Search"/>
      </form>
      {data.length>=1 ? <Products data={data}/> : <Home/>}
    </div>

  )
}

export default App
