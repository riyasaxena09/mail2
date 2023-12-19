
import { useContext, useEffect } from 'react';
import { MyContext } from './provider';
import './cart.css';
function Cart(){
    const {cart,setcart,total,settotal}=useContext(MyContext);
    console.log(cart)
    let e=[];
let sum=0;
function del(item){
    console.log(item.key)
    fetch(`https://shopping-cca6a-default-rtdb.firebaseio.com/shop/${item.key}.json`,{
        method:'DELETE',
        headers:{
            'Content-type':'application/json',
        },
    }).then((res)=>{
        if(res.ok){
    return res.json();
    }else{
            return res.json().then((data)=>{
                let errormsg="not a valid email";
               throw new Error(errormsg);
            });
        }
    }).then((data)=>{
        console.log(data);
        
    })
}
useEffect(() =>{
 
    const fetchData = async () => {
      try {
        const response = await fetch('https://shopping-cca6a-default-rtdb.firebaseio.com/shop.json');
        const data = await response.json();
        console.log(data)
                  for(const key in data){
                  sum=sum+data[key].price*data[key].quantity;
           
                 
                 e.push({
                    id:data[key].id,
        title:data[key].title,
                    url:data[key].imageUrl,
                    price:data[key].price, 
                quantity:data[key].quantity,
                key:key,
                 })  
      } 
     settotal(sum);
      setcart(e);
    }catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [cart]);
        
    return(
        <>
        <div className="c"> 
        <div>
        <span className="m">Item</span>
        <span className="m">Title</span>
        <span className="m">Price</span>
     <span className="m">Quantity</span>
     </div>
{
    cart.map((item)=>{

        return(
          <div>
            <span><img src={item.url} className='img'></img></span>
            <span className='tit'>{item.title}</span>
            <span className='pri'>{item.price}</span>
            <span className='q'>{item.quantity}</span>
            <span><button onClick={()=>del(item)}>X</button></span>
            </div>
        )
    })
}
        <h3>
        Total - {total}
         
        </h3>
        </div>
        </>
    )
}
export default Cart;