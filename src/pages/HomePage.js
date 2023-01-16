import { useEffect, useState } from "react";
import { Grid, Spacer, Container, Input } from "@nextui-org/react";
import { API_PRODUCTS_URL } from "../constants";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import mockProduct from "../mocks/mockProduct.json";
import axios from "axios";

export const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);


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
        <>
            <Search />
            <Container>
                <Spacer y={1} />
                <Grid.Container gap={2}>
                    {products.map((product) => <ProductItem productData={product} />)}
                </Grid.Container>
            </Container>
        </>
    )
}
export default HomePage;