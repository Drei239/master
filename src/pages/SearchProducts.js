import { useParams } from "react-router-dom";
import mockProduct from "../mocks/mockProduct.json";
import { Grid, Card, Col, Text, Row, Button, Container, Spacer } from "@nextui-org/react";
import SearchItem from "../components/SearchItem";

function SearchProducts() {
    // const [searchedProducts, setSearchedProducts] = useState([]);
    const params = useParams();
    const productData = mockProduct;
    const searchedProduct = productData.filter((product) => { return product.name.toLowerCase().includes(`${params.product_name}`.toLowerCase()); });

    return (
        <div>
            <Container>
                <Spacer y={2} />
                <Grid.Container gap={1}>
                    {searchedProduct.map((sproduct) => <SearchItem searchData={sproduct} />)}
                </Grid.Container>
            </Container>
        </div>
    )
} export default SearchProducts;