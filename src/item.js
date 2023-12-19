import './item.css';
import { useContext, useState,useEffect } from 'react';
import { MyContext } from './provider';

function Item(){
    const {len,setlength,cart,setcart} = useContext( MyContext);
    const [s,sets]=useState(false);
    const [fil,setfil]=useState([]);
    let m=[];
    
    const cartElements = [
        {
        id:1,
        title: 'Colorful painting ',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity:1,
         },
        
        {
        id:2,
        title: 'Black and white Colors',
        quantity:1,
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
     
        
        },
        
        {
        id:3,
        title: 'Yellow and Black Colors',
        
        price: 70,
        quantity:1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
       
        
        }
        ,
        
        {
        id:3,
        title: 'Yellow and Black Colors',
        
        price: 70,
        quantity:1,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
       
        
        }
        ,
        
        {
        id:3,
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity:1,
      
        
        }
        ,
        
        
        {
        id:3,
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity:1,
            }
            ,
        ]
        useEffect(() =>{
 
            const fetchData = async () => {
              try {
                const response = await fetch('https://shopping-cca6a-default-rtdb.firebaseio.com/shop.json');
                const data = await response.json();
                console.log(data)
                          for(const key in data){ 
                         m.push({
                            id:data[key].id,
                title:data[key].title,
                            url:data[key].imageUrl,
                            price:data[key].price, 
                        quantity:data[key].quantity,
                        key:key,
                         })  
              } 
          setfil(m);
         setlength(m.length)
            }catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            fetchData();
          },[cart]);
        

        function Add(item){
            const riya=fil.filter((ele)=>ele.id===item.id)
            console.log(riya)
if(riya.length<1){
            fetch('https://shopping-cca6a-default-rtdb.firebaseio.com/shop.json', 
{
     method:'POST',
body:JSON.stringify(item),
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
console.log(data)

})
}
else{
    console.log(riya);
 
   let quan=item.quantity;
  console.log(quan);
   fetch(`https://shopping-cca6a-default-rtdb.firebaseio.com/shop/.json`,{
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
        console.log("delete");
    })
    
    fetch('https://shopping-cca6a-default-rtdb.firebaseio.com/shop.json', 
{

     method:'POST',
body:JSON.stringify({
    id:item.id,
imageUrl:item.imageUrl,
price:item.price,
quantity:quan+1,
title:item.title,
}),
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
console.log(data)

})

 }    
}       
    return(
        <>
        <div className="image-list">
{
    cartElements.map((item,index)=>{
        return(
            <div key={index} className="image-item">
                   <h2>{item.title}</h2>
          <img src={item.imageUrl} alt={item.title} />
       <p>$ {item.price}  <button onClick={()=>Add(item)}>Add to Cart</button></p>

        </div>
        )
    })
}

</div>

        </>
    )
}
export default Item;