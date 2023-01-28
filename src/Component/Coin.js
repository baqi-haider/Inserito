import { useRef, useState } from 'react'


const Coin = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
const [isPinned, setIsPinned] = useState(false);
const pinRef = useRef(null);
  const handlePin = () => {
    
    const pinElement = pinRef.current;
    if (!isPinned) {
      pinElement.style.position = 'fixed';
      pinElement.style.top = `${pinElement.offsetTop}px`;
      pinElement.style.bottom = `${pinElement.offsetBottom}px`;
      pinElement.style.left = `${pinElement.offsetLeft}px`;
      pinElement.style.right = `${pinElement.offsetRight}px`;
      setIsPinned(true);
    }
      else {
        pinElement.style.position = 'static';

      setIsPinned(false);
    }
  };



 
  return (

    <div className="container">
      <div className="row" >
        <table className="table table-dark table-hover"  style={{ marginBottom: '0' }} >
          <tbody ref={pinRef}  >
            <tr >
              
              <td className='col-2'>{symbol}</td>
              <td className='col-4'><img src={image} width="35" height="30" />    {name}</td>
              <td className='col-1'>${price.toLocaleString()}</td>
              <td className='col-2'>{volume.toLocaleString()}</td>
              <td className='col-2'>Mkt Cap: ${marketcap.toLocaleString()}</td>
              {priceChange < 0 ? ( <td className='col-1' style={{ color: 'red' }}>{priceChange}%</td>
              ) : (<td className='col-1' style={{ color: 'green' }}> +{priceChange}%</td>)}
              <td className='col-1' >
              <button className="btn btn-outline-success mx-2" onClick={handlePin}
        style={{ color: isPinned ? 'white' : 'white' }}> {isPinned ? 'Unpin' : 'Pin'}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default Coin;