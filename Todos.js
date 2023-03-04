import React from "react";
import { useState } from "react";

export default function Todos() {
  const [activity, setActivity] = useState(" ");
  const [listdata, setListData] = useState([]);
  function addActivity() {
    setListData([...listdata, activity]);
    setActivity("");
    console.log(listdata);
  }
  function removeActivity(i) {
    const updatedListData = listdata.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }
  return (
    <>
      <div className="conatiner">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button type="submit" onClick={addActivity}>
          Submit
        </button>
        <p className="list-heading">here is my List:{")"} </p>
        {listdata !== [] &&
          listdata.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <span>{data}</span>
                  <button onClick={() => removeActivity(i)}>remove</button>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}
