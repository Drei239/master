import { Container, Button, Input, Spacer } from "@nextui-org/react"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import mockProduct from "../mocks/mockProduct.json";
import "./Search.css";

const Search = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        //mockData nhà quê
        setProducts(mockProduct);

        //Fetch API = Axios
        // axios.get(API_PRODUCTS_URL).then(({ data }) => {
        //     console.log(data);
        //     setProducts(data);
        // });
    }, []);

    const searchProduct = () => {
        let searchName = document.getElementById("search-input")?.value;
        // const searchProducts = products.filter((product) => { return product.name.toLowerCase().includes(`${searchName}`.toLowerCase()); });
        if (searchName == "") {
            alert("Vui lòng nhập tên sản phẩm tìm kiếm!")
        } else {
            navigate(`/search/${searchName}`);
        }

    }



    return (
        <Container className="search-container">
            <Spacer y={1} />
            <Input id="search-input" className="search-input" placeholder="Tên sản phẩm" />
            <Button auto width onClick={searchProduct}>
                Tìm kiếm
            </Button>


        </Container>
    )


}

export default Search;