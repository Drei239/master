import { Grid, Card, Col, Text, Row, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import './ProductItem.css';

const SearchItem = (props) => {
    const { searchData } = props;
    const currentPrice = searchData.price * (1 - searchData.sale / 100);
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }
    const formatedPrice = new Intl.NumberFormat('vi-VN', config).format(currentPrice);
    const { handleAddToCart } = useContext(Context);

    return (
        <Grid xs={3}>
            <Card css={{ w: "100%", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="red">
                            New
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }} >
                    <Card.Image
                        src={searchData.image}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Card example background"
                    ></Card.Image>
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Text color="#000" size={14} weight="bold">
                                {searchData.name}
                            </Text>
                            <Link className="link-detail" to={`/detail/${searchData.id}`}>
                                Xem chi tiết
                            </Link>
                        </Col>
                        <Col>
                            <Text color="#000" size={14} weight="bold">
                                {formatedPrice}
                            </Text>
                            <Row justify="flex-end">
                                <Button flat auto rounded color="secondary" onClick={() => { handleAddToCart(searchData.id) }}>
                                    <Text
                                        css={{ color: "inhrederit" }}
                                        size={14}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        ADD TO CART
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card >
        </Grid >
    )
}
export default SearchItem;