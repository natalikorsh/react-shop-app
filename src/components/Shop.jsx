import {useState, useEffect} from 'react';
import { API_KEY, API_URL } from './config.js';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';
import { Cart } from './Cart.jsx';
import { BasketList } from './BasketList.jsx';
import { Alert } from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
      }).then((response) => response.json()).then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      }).catch((error) => {
        console.log(error)
      })
    }, 
  [])

  const handleShowBasket = () => {
    setBasketShow(!isBasketShow);
  }

  const closeAlert = () => {
    setAlertName('');
  }

  const addToCart = (item) => { 
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) { 
      const newItem = { 
        ...item, 
        quantity: 1, 
      }; 

      setOrder([...order, newItem]); 
    } else { 
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) { 
          return { 
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else { 
          return orderItem;
        }
      });

      setOrder(newOrder); 
    }
    setAlertName(item.title);
  }

  const removeFromBasket = (id) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== id);
    setOrder(newOrder);
  }

  const increment = (id) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        orderItem.quantity++;
      }
      return orderItem;
    })

    setOrder(newOrder);
  }

  const decrement = (id) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id && orderItem.quantity >= 1) {
        orderItem.quantity--;
      }
      return orderItem;
    })

    setOrder(newOrder);
  }

  return (<main className="container content">
    <Cart quantity={order.length} handleShowBasket={handleShowBasket}/>
    { loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart}/> }
    { isBasketShow 
    ? <BasketList 
        order={order} 
        handleShowBasket={handleShowBasket}
        removeFromBasket={removeFromBasket}
        increment={increment}
        decrement={decrement} /> 
    : null }
    {
      alertName && <Alert name={alertName} closeAlert={closeAlert}/>
    }
  </main>)
}

export {Shop};