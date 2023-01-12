import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Spacer } from "@nextui-org/react";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import mockProduct from "../mocks/mockProduct.json";
import { API_PRODUCTS_URL } from "../constants";

const HomePage = () => {
    let [products, setProducts] = useState([]);


    useEffect(() => {
        //mockData nhà quê
        setProducts(mockProduct);
        
        //Fetch API = Axios
        // axios.get(API_PRODUCTS_URL).then(({ data }) => {
        //     console.log(data);
        //     setProducts(data);
        // });
    }, []);

    return (
        <div>
            <Search />
            <Spacer y={1} />
            <Grid.Container gap={2}>
                {products.map((product) => <ProductItem productData={product} />)}
            </Grid.Container>
        </div>
    )
}
export default HomePage;