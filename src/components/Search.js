import { Container, Button, Input, Spacer } from "@nextui-org/react"
import "./Search.css";

const Search = () => {
    return (
        <div>
            <Spacer y={1} />
            <Container className="search-container">
                <Input className="search-input" placeholder="Tên sản phẩm" />
                <Button auto width>Tìm kiếm</Button>
            </Container>
        </div>
    )
}

export default Search;