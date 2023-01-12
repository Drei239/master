import { Grid, Card, Col, Text, Row, Button } from "@nextui-org/react";

const ProductItem = (props) => {
    const { productData } = props;
    const availableProduct = productData.available;
    const currentPrice = productData.price * (1 - productData.sale / 100);

    if (availableProduct === false) {
        return (
            <Grid xs={3}>
                <Card css={{ w: "100%", h: "400px" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                New
                            </Text>
                            <Text h3 color="black">
                                Acme camera
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={productData.image}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            alt="Card example background"
                        />
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
                                <Text color="#000" size={14}>
                                    {productData.name}
                                </Text>
                                <Text color="#000" size={14}>
                                    {currentPrice}
                                </Text>
                            </Col>
                            <Col>
                                <Row justify="flex-end">
                                    <Button flat auto rounded color="secondary">
                                        <Text
                                            css={{ color: "inherit" }}
                                            size={14}
                                            weight="bold"
                                            transform="uppercase"
                                        >
                                            Xem chi tiết
                                        </Text>
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        )
    }
}
export default ProductItem;