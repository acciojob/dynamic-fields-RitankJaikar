import React, { useState } from "react";

export default function Input({remove, id}) {
    const [nameValue, setNameValue] = useState("");
    const [ageValue, setAgeValue] = useState("");

    return (
        <div>
            <input type="text" name={`name-${id}`} id={`name-${id}`} value={nameValue} onChange={e => setNameValue(e.target.value)} />
            <input type="number" name={`age-${id}`} id={`age-${id}`} value={ageValue} onChange={e => setAgeValue(e.target.value)} />
            <button onClick={() => remove(id)}>Remove</button>
        </div>
    )
}