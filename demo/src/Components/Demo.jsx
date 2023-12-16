import React, { useEffect, useState } from "react";
import "./demo.css";

function Demo() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  const [selected, setSelected] = useState();
  const [selectedCategory, setSelectedCategory] = useState(data);

  console.log(selected);
  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setData(data.entries);
        setCount(data.count);
      });

    const category = data.filter((item) => item.Category === selected);
    setSelectedCategory(category);
  }, [data,selected]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
    
  };
console.log(data)
  
console.log(selected)

  return (
    <>
      <table>
        <h1>Total entries :- {count}</h1>
        <tr>
          <th>API</th>
          <th>Description</th>
          <th>Auth</th>

          <select name="" id="" onChange={handleSelect}>
            {data.map((item) => (
              <option value={item.Category}>{item.Category}</option>
            ))}
          </select>

          <th>Cors</th>
          <th>Link</th>
          <th>HTTPS</th>
        </tr>
        <tbody>
          {selectedCategory.map((e) => {
            return (
              <tr>
                <td>{e.API}</td>
                <td>{e.Description}</td>
                <td>{e.Auth}</td>
                <td>{e.Category}</td>
                <td>{e.cors}</td>
                <td>{e.Link}</td>
                <td>{e.HTTPS}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Demo;
