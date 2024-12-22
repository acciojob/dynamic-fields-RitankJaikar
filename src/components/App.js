import React, { useState } from "react";
import './../styles/App.css';
import Input from "./Input";

const App = () => {
  const [ids,  setIds] = useState([1]);

  function handleSubmit(e) {
    e.preventDefault();

    // Collect all form data
    const formData = ids.map((id) => {
      const name = document.getElementById(`name-${id}`).value;
      const age = document.getElementById(`age-${id}`).value;
      return { id, name, age };
    });

    console.log("Form Data:", formData);
  }

  function remove(id) {
    console.log(id);
    const filteredIds = ids.filter(itemId => itemId !== id);
    setIds(filteredIds);
  }

  console.log(ids);

  return (
    <div>
        <form onSubmit={handleSubmit}>
          {
            ids.map(id => (
              <Input key={id} id={id} remove={remove} />
            ))
          }
          <button onClick={() => setIds(ids.concat(ids.length ? [ids[ids.length-1]+1] : [1]))}>Add More..</button>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App;