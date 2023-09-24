import React from "react";
import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ProductTable from "./ProductTable/ProductTable";

const FilterableProductTable = ({products}) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    console.log(products)
    return(
        <div>
            <Searchbar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange= {setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    ) 
    
};

export default FilterableProductTable;
