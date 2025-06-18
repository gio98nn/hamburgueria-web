import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data/products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Erro ao carregar produtos:", err));
    }, []);
    console.log(product)

return (
    <div className="container">
        {product.map(product => (
            <Product key={product.id} {...product}/>
        ))}
    </div>
    );
};

export default ProductList;

