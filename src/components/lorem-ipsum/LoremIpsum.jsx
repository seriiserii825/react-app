import React, { useState } from "react";
import { items } from "./data";

const checkboxes = [
  { name: "Title", checked: true },
  { name: "Subtitle", checked: false },
  { name: "Text", checked: true },
  { name: "Date", checked: false },
];

function LoremIpsum() {
  const [filter, setFilter] = useState(checkboxes);
  const [search, setSearch] = useState("8");
  const [posts, setPosts] = useState(items);

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    const index = filter.findIndex((item) => item.name === name);
    const newFilter = [...filter];
    newFilter[index].checked = checked;
    setFilter(newFilter);
  }

  function onSubmit() {
    console.log(search, "search");
  }

  return (
    <div className="lorem-ipsum mt4">
      <div className="container">
        <h2 className="mb3">Tired of boring lorem ipsum?</h2>
        Paragraphs:{" "}
        <input
          type="number"
          min="1"
          max="20"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        {checkboxes.map((checkbox) => {
          return (
            <label
              key={checkbox.name}
              style={{ display: "block", marginBottom: "0.4rem" }}
            >
              <input
                type="checkbox"
                value={checkbox.name}
                className="filled-in"
                checked={checkbox.checked}
                onChange={handleCheckboxChange}
                name={checkbox.name}
              />
              <span style={{ fontSize: "1.6rem", display: "inline-block" }}>
                Use {checkbox.name}
              </span>
            </label>
          );
        })}
        <button className="btn mt4" onClick={onSubmit}>
          Generate
        </button>
      </div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              {filter[0].checked && <h3>{post.title}</h3>}
              {filter[1].checked && <h4>{post.subtitle}</h4>}
              {filter[2].checked && <p>{post.text}</p>}
              {filter[3].checked && <p>{post.date}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LoremIpsum;
