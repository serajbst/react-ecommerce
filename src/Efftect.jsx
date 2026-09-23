import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Styles from './Styles/btn.module.css';


function UseData(){

    const [qts, setQts] = useState(null);
    const [index, setIndex] = useState(0);
    
        async function handle(){

        const res = await fetch("https://dummyjson.com/quotes");
        const data = await res.json();
            console.log(data.quotes.length);
            setQts(data);
           if(index==data.quotes.length-1){
            setIndex(0);

           }else{
                 setIndex(index+1);

           }
           

           
           
    }

useEffect(()=>{
    handle();
},[])


    return(
        <>
        <div className={Styles.q1}>
            {
                qts && (
                    <div className={Styles.qcard}>
                    <div className={Styles.idq}>
                    <h2>{qts.quotes[index].id}</h2>
                    <h2 className={Styles.q}>{qts.quotes[index].quote}</h2>
                        </div>
                   
                     <h2 className={Styles.author}>{qts.quotes[index].author}</h2>
                    
                     </div>
                )
            }
            <button onClick={handle} className={Styles.btn2}>click</button>
        </div>
         
        </>
    )
}
export default UseData;