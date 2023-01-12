import { Grid, Spacer } from "@nextui-org/react";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import mockProduct from "../mocks/mockProduct.json";

const HomePage = () => {
    const products = mockProduct;
    
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