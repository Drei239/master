import { Link, useParams } from "react-router-dom";
import mockProduct from "../mocks/mockProduct.json";
import ProductItem from "../components/ProductItem";
import "./ProductDetail.css";
import {
  Container,
  Text,
  Button,
  Grid,
  Spacer,
  Card,
  Modal,
  useModal,
  Tooltip,
  Image,
  Collapse,
  Table,
} from "@nextui-org/react";
import "semantic-ui-css/semantic.min.css";
import SlideItem from "../components/SlideItem";
import Footer from "../components/Footer";
import CheckOut from "../pages/CheckOut";
import { Context } from "../context/Context";
import { useContext } from "react";

const ProductDetail = () => {
  const params = useParams();
  const productData = mockProduct;
  const { setVisible, bindings } = useModal();
  const product = productData.find(({ id }) => id == params.product_id);
  const currentPrice = product.price * (1 - product.sale / 100);
  console.log(product);
  const { handleAddToCart } = useContext(Context)
  const buyNow = () => {
    setVisible(true);
  };

  const CheckOutNow=()=>{
    alert("cảm ơn bạn đã mua hàng");
    setVisible(false)
  }

  //Lấy đc product data = id cho hiển thị ra nội dung chi tiết sản phẩm
  return (<>
    <Container css={{ marginTop: "20px" }}>
      <div className="detail">
        <div className="main-detail">
          <img src={product.image} style={{ objectFit: "cover" }} />
          <Container>
            <Text
              size={20}
              weight={"bold"}
              css={{ textAlign: "left", paddingTop: "20px" }}
            >
              ✪ Cấu hình & đặc điểm
            </Text>
            <Grid.Container gap={2} justify="center">
              <Grid xs={4}>
                <Text size={20} weight={"bold"}>
                  Vi xử lý (CPU)
                  <Text size={18}>
                    {" "}
                    Intel Core™ i5-1140G7, 4 nhân, 8 luồng
                  </Text>{" "}
                </Text>
              </Grid>
              <Grid xs={4}>
                <Text size={20} weight={"bold"}>
                  RAM <Text size={18}> 8GB, LPDDR4x, 4267 MHz</Text>{" "}
                </Text>
              </Grid>
              <Grid xs={4}>
                <Text size={20} weight={"bold"}>
                  Card đồ họa (GPU)
                  <Text size={18}> Intel® Iris® Xe Graphics</Text>{" "}
                </Text>
              </Grid>
              <Grid xs={4}>
                <Text size={20} weight={"bold"}>
                  Màn hình
                  <Text size={18}>
                    {" "}
                    13.3", 1920 X 1280 px, IPS, Cảm ứng
                  </Text>{" "}
                </Text>
              </Grid>
              <Grid xs={4}>
                <Text size={20} weight={"bold"}>
                  Bộ nhớ trong<Text size={18}> 255GB</Text>{" "}
                </Text>
              </Grid>
              <Grid xs={4}>
                <Text size={20} weight={"bold"}>
                  Pin<Text size={18}> 4000 Mp/h</Text>{" "}
                </Text>
              </Grid>
            </Grid.Container>
            <Collapse title="Cấu hình chi tiết" >
              <Table
                aria-label="Example table with static content"
                css={{
                  height: "auto",
                  minWidth: "100%",
                }}
              >
                <Table.Header>
                  <Table.Column>
                    <Text weight={"bold"}>Thông tin</Text>
                  </Table.Column>
                  <Table.Column>
                    <Text weight={"bold"}>Thông sô</Text>
                  </Table.Column>
                </Table.Header>
                <Table.Body>
                  <Table.Row key="1">
                    <Table.Cell>Màn hình:</Table.Cell>
                    <Table.Cell>AMOLED6.43"Full HD+</Table.Cell>
                  </Table.Row>
                  <Table.Row key="2">
                    <Table.Cell>Hệ điều hành:</Table.Cell>
                    <Table.Cell>Android 12</Table.Cell>
                  </Table.Row>
                  <Table.Row key="3">
                    <Table.Cell>Camera sau:</Table.Cell>
                    <Table.Cell>Chính 64 MP & Phụ 2 MP, 2 MP</Table.Cell>
                  </Table.Row>
                  <Table.Row key="4">
                    <Table.Cell>Camera trước:</Table.Cell>
                    <Table.Cell>16MP</Table.Cell>
                  </Table.Row>
                  <Table.Row key="5">
                    <Table.Cell>Chip:</Table.Cell>
                    <Table.Cell>Snapdragon 695 5G</Table.Cell>
                  </Table.Row>
                  <Table.Row key="6">
                    <Table.Cell>Dung lượng lưu trữ:</Table.Cell>
                    <Table.Cell>256 GB</Table.Cell>
                  </Table.Row>
                  <Table.Row key="7">
                    <Table.Cell>RAM:</Table.Cell>
                    <Table.Cell>16GB</Table.Cell>
                  </Table.Row>
                  <Table.Row key="8">
                    <Table.Cell>SIM:</Table.Cell>
                    <Table.Cell>2 Nano SIMHỗ trợ 5G</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Collapse>
            <Spacer></Spacer>

            <Card css={{ mw: "100%", backgroundColor: "#FFF8F2" }} gap={5}>
              <Card.Body>
                <Text weight={"bold"} size={20}>
                  🎁 Ưu đãi & khuyến mại <Spacer y={0.2} />
                  <Text size={16} color="error" css={{ marginLeft: "40px" }}>
                    {" "}
                    Mua ngay để được khuyến mãi 5%
                  </Text>
                </Text>
              </Card.Body>
            </Card>
            <Spacer />
            <Card css={{ mw: "100%", backgroundColor: "#F8FAFC" }} gap={5}>
              <Card.Body>
                <Text weight={"bold"} size={20}>
                  🎁 Bảo hành, đổi trả <Spacer y={0.2} />
                  <ul>
                    <li>
                      <Text
                        size={16}
                        css={{ marginLeft: "40px" }}
                      >
                        {" "}
                        Sản phẩm phân phối chính hãng{" "}
                      </Text>
                    </li>
                    <li>
                      <Text
                        size={16}
                        css={{ marginLeft: "40px" }}
                      >
                        {" "}
                        Bảo hành <span style={{ fontWeight: "bold" }}>24 tháng chính hãng</span>{" "}
                      </Text>
                    </li>
                  </ul>
                </Text>
              </Card.Body>
            </Card>
            <Spacer />
            <Card css={{ mw: "100%", backgroundColor: "#F8FAFC" }} gap={5}>
              <Card.Body>
                <Text weight={"bold"} size={20}>
                  🎁 Dự kiến vận chuyển <Spacer y={0.2} />
                  <Text size={16} css={{ marginLeft: "40px" }}>
                    {" "}
                    3 đến 5 ngày kể từ ngày đặt hàng
                  </Text>
                </Text>
              </Card.Body>
            </Card>
            <Spacer />
          </Container>
        </div>
        <aside className="aside-detail">
          <div>
            <Text size={30} weight="bold" css={{ alignItems: "right" }}>
              {product.name}
            </Text>
            <Text
              size={20}
              css={{ position: "absolute", top: "55px", left: "20px" }}
            >
              {currentPrice} VNĐ
            </Text>
          </div>
          <Grid.Container>
            <Button flat color="warning" auto onPress={()=>handleAddToCart(product.id)}>
              Thêm vào giỏ hàng
            </Button>
            <Spacer />
            <Button shadow color="secondary" auto onPress={() => buyNow()}>
              {" "}
              Mua hàng ngay
            </Button>
          </Grid.Container>

          {/* Modal mua ngay */}
          <Modal
            scroll
            width="600px"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Mua ngay sản phẩm: {product.name}
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Image
                width={320}
                height={180}
                src={product.image}
                alt="Default Image"
                objectFit="cover"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={() => setVisible(false)}>
                Thoát
              </Button>
              <Button auto onPress={() => CheckOutNow()}>
                Mua ngay với giá: {currentPrice}
              </Button>
            </Modal.Footer>
          </Modal>
        </aside>
      </div>
      <Spacer />
      <div>
        <Text css={{ textAlign: "left" }} size={30}> sản phẩm bạn có thể thích</Text>
        <SlideItem />
      </div></Container>
    <Footer />
  </>
  );
};
export default ProductDetail;
