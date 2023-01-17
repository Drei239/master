import { useEffect, useState } from "react";
import { Grid, Spacer, Container, Input } from "@nextui-org/react";
import { API_PRODUCTS_URL } from "../constants";
import Search from "../components/Search";
import ProductItem2 from "../components/ProductItem2";
import mockProduct from "../mocks/mockProduct.json";
import SlideItem from "../components/SlideItem";
import Footer from "../components/Footer";
import axios from "axios";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

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

            <Container>
                <Search />
                <Spacer y={1} />
                <Grid.Container gap={1}>
                    {products.map((product) => <ProductItem2 productData={product} />)}
                    <SlideItem />
                </Grid.Container>
            </Container>
            <Footer />
        </>
    )
}
export default ProductsPage;