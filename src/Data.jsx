import { useRef, useState } from "react";

function FormData(){

            const inputRef = useRef(null);
    function handle(e){
        e.preventDefault()
        console.log(inputRef);
    }

            return(
                <>
                    <p>{console.log(inputRef)}</p>
                    <form action="">
                        <input type='text' name="" id="" ref={inputRef} />
                        <button onClick={(e)=>handle(e)}>click</button>
                    </form>
                </>
            )

}

export default FormData;