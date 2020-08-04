import React, { useState, useEffect } from "react";

function HookCounterFive() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // useEffect runs after every render.
    // Since useEffect is used inside the component, we can access the variables and props without writing any additional code.
    // For conditionally running useEffects we have to pass the second parameter and it's an array.
    // And in the array we need to specify either the prop or state that we need to watch for.
    useEffect( () => {
        console.log("useEffect - Updating the document title.");
        document.title = `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounterFive;