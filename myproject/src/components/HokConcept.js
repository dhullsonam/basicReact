import React, { useState } from 'react';


function MyHookComponent() {
    const [data, setData] = useState("sonam")

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={() => setData("Radhe Radhe")}>click me</button>
        </div>
    )

}

export default MyHookComponent;