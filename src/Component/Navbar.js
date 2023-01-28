import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Coin from './Coin';
import Loading from './loading';

function Navbar() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
   
   
   
    const ws = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')
    ws.onmessage = (msg)=> {
    let socketData = JSON.stringify(msg.data);
    console.log(socketData.prices  );
}


 
    useEffect(() => {
        axios
            .get(                
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=350&page=1&sparkline=false"
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);
    const handleChange = e => {
        setSearch(e.target.value);
    }
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
        <div className="container-row-cols-6">
        <nav className="navbar navbar-dark bg-dark">
   <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src=".\Inserito.pdf" alt="" width="30" height="28" className="d-inline-block align-text-top me-2 "/>
    <h3 className='hover-underline-animation'> Inserito Coin App </h3>
    </a>
    <Loading />
    <form className="d-flex">
      <input className="form-control me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>           
{filteredCoins.map(coin => {
return ( 
<Coin
key={coin.id}
name={coin.name}
price={coin.current_price}
symbol={coin.symbol}
marketcap={coin.total_volume}
volume={coin.market_cap}
image={coin.image}
priceChange={coin.price_change_percentage_24h}
/>);})}</>)}
export default Navbar
