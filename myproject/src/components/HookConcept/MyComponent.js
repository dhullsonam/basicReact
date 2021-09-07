import React, { useEffect,useState } from 'react';

function MyComponent() {
    const[count,setCount] = useState(0)
    useEffect(() => {
        console.log("useEffect");
    })

    return (
        <div>
            
            <h1>count : {count}</h1>
            <button onClick={ () => setCount(count+1) }>update count</button>
            <p>click on button to update the count</p>
            <small>useEffect case </small>
        </div>
    )
}

export default MyComponent;