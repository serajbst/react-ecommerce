/*api : https://fakestoreapi.com/products/ */

import { useEffect, useState } from "react";
import Styles from './Styles/product.module.css';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



function ProductsData(){


        const [product, setProduct] = useState([]);
        const [search, setSearch] = useState("");
        const [result, setResult] = useState([]);
        const [price, setPrice] = useState(null);
        const {category} = useParams();
        async function handleProduct() {
            const url = category
                ? `https://fakestoreapi.com/products/category/${category}`
                : "https://fakestoreapi.com/products/";

            const res = await fetch(url);
           
            const data = await res.json();
            console.log(data);
            console.log(typeof data);
            console.log(Array.isArray(data));
            console.log(data.length);
            setProduct(data);
            setResult(data);
           

        }
        
        useEffect(()=>{
            handleProduct();
        },[category])

        function lowToHigh(){
                const data = [...result].sort((a,b)=> a.price - b.price);
                setResult(data);
        }
        function highToLow(){
            const data = [...result].sort((a,b)=> b.price - a.price);
            setResult(data);
        }
        function handleSearch(e){
            setSearch(e.target.value);

        }

        function searchProduct(){
            const data = product.filter((pro)=>
            pro.title.toLowerCase().includes(search.toLocaleLowerCase()));
            setResult(data);

        }

    return(

        <div>

       <div>
                <input type="text" value={search} onChange={handleSearch} />
                <button onClick={searchProduct}>search</button>
                

       </div>
       <div>
                <label>
                    <input type="radio" name="price" value="low" onChange={lowToHigh} />
                    low to high
                </label>
                 <label>
                    <input type="radio" name="price" value="low" onChange={highToLow} />
                  high to low
                </label>
       </div>
       
        <div className={Styles.product}>

        {
            
            
              result.map((pro)=>(
                <Link to={`/product/${pro.id}`}
                    key={pro.id}
                    className={Styles.card}
                    >
                    
                            <ul key={pro.id}   className={Styles.card}>
                                 <li><img src={pro.image} alt="" className={Styles.image} /></li>
                                  <li className={Styles.title}>product : {pro.title}</li>
                                   <li className={Styles.category} >Category : {pro.category}</li>
                                    <li className={Styles.price}>price : {pro.price}</li>
                               
                               
                                <li className={Styles.description}>description: {pro.description}</li>
                               
                               
                                <li className={Styles.rating}> <p>Rating : {pro.rating.rate}</p></li>
                            </ul>

                            </Link>
                ))
               
        }
         </div>
         
          </div>
       
    )
}

export default ProductsData;