import React, { useState, useEffect } from 'react';


function ExampleOfUseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })


    return (
        <div><br></br>
            <h3>Concept of useEffect</h3>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            
        </div>
    );
}

export default ExampleOfUseEffect;