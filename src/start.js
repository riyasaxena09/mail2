import './start.css';
import { useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './provider';
function Start(){
    const { value,setValue,len,setlength,cart} = useContext(MyContext);
    let m=[];
    let q=0;
    useEffect(() =>{
 
      const fetchData = async () => {
        try {
          const response = await fetch('https://shopping-cca6a-default-rtdb.firebaseio.com/shop.json');
          const data = await response.json();
      
                    for(const key in data){ 
                      q=q+data[key].quantity;
                   m.push({
                      id:data[key].id,
          title:data[key].title,
                      url:data[key].imageUrl,
                      price:data[key].price, 
                  quantity:data[key].quantity,
                  key:key,
                   })  
        } 
        console.log(q)
setlength(q);
      }catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    });
   function show(){
    console.log(value)
setValue(!value);
   }
    return(
        <>
        <div>
          <div className='list'>
       
            <span className='li'>Home</span>
            <span className='li'><Link to="/">Store</Link></span>
            <span className='li'><Link to="/about">About</Link></span>
          
<span className='cart' onClick={show}>cart<sup>{len}</sup></span>

          </div>
          <div className='gen'>
            <h1>THE GENERICS</h1>
          </div>
        </div>
        </>
    )
}
export default Start;