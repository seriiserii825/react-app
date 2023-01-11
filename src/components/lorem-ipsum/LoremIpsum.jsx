import React, { useState } from "react";
import { items } from "./data";

const checkboxes = [
  { name: "Title", checked: true },
  { name: "Subtitle", checked: false },
  { name: "Text", checked: false },
  { name: "Date", checked: false },
];

function LoremIpsum() {
  const [filter, setFilter] = useState(checkboxes);
  const [search, setSearch] = useState("1");
  const [posts, setPosts] = useState(items);
  const [is_visible_posts, setIsVisiblePosts] = useState(false);

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    const index = filter.findIndex((item) => item.name === name);
    const newFilter = [...filter];
    newFilter[index].checked = checked;
    setFilter(newFilter);
  }

  function onSubmit() {
    const newPosts = items.slice(0, parseInt(search));
    setPosts(newPosts);
    setIsVisiblePosts(true);
  }

  function copyToClipboard() {
    const el = document.querySelector("#js-posts");
    console.log(el, "el");
    const text = el.outerHTML;
    navigator.clipboard.writeText(text);
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
        <button className="btn mt4 mb4" onClick={onSubmit}>
          Generate
        </button>
        {is_visible_posts && (
          <button className="btn ml2 blue darken-3" onClick={copyToClipboard}>
            {" "}
            Copy to clipboard{" "}
          </button>
        )}
        {is_visible_posts && (
          <ul id="js-posts">
            {posts.map((post) => {
              return (
                <li key={post.id} className="mb3">
                  {filter[0].checked && <h3 className="mb2">{post.title}</h3>}
                  {filter[1].checked && (
                    <h4 className="mb2">{post.subtitle}</h4>
                  )}
                  {filter[2].checked && <p className="mb2">{post.text}</p>}
                  {filter[3].checked && (
                    <p className="mb2">
                      Posted at: <strong>({post.date})</strong>
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LoremIpsum;
