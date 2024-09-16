import React from "react";

const Filter = () => {
  return (
    <div class="filter-main-container">
      <h2>Sort by Filter</h2>


      <button class="accordion">Category</button>
      <div class="panel">
        <label class="container">
          One
          <input type="checkbox" checked="checked" />
        </label>
        <label class="container">
          Two
          <input type="checkbox" />
        </label>
        <label class="container">
          Three
          <input type="checkbox" />
        </label>
        <label class="container">
          Four
          <input type="checkbox" />
        </label>
      </div>

      <button class="accordion">Brand</button>
      <div class="panel">
        <label class="container">
          One
          <input type="checkbox" checked="checked" />
        </label>
        <label class="container">
          Two
          <input type="checkbox" />
        </label>
        <label class="container">
          Three
          <input type="checkbox" />
        </label>
        <label class="container">
          Four
          <input type="checkbox" />
        </label>
      </div>
      <button class="accordion">Brand</button>
      <div class="panel">
        <label class="container">
          One
          <input type="checkbox" checked="checked" />
        </label>
        <label class="container">
          Two
          <input type="checkbox" />
        </label>
        <label class="container">
          Three
          <input type="checkbox" />
        </label>
        <label class="container">
          Four
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default Filter;
