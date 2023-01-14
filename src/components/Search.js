import { Container, Button, Input, Spacer } from "@nextui-org/react"
import "./Search.css";

const Search = () => {

    const searchProduct = () => {
        let searchName = document.getElementById("search-input")?.value;
        console.log(searchName);
    }

    return (
        <div>

            <Spacer y={1} />
            <Container className="search-container">
                <Input id="search-input" className="search-input" placeholder="Tên sản phẩm" />
                <Button auto width onClick={searchProduct}>Tìm kiếm</Button>
            </Container>
        </div>
    )


}

export default Search;