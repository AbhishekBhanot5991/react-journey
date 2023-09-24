import React from "react";

const Searchbar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <input
        type="checkbox"
        name=""
        id=""
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
      />
      {' '}
      Only show Products in stock
    </form>
  );
};

export default Searchbar;
