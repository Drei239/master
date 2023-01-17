import { Button, Container, Grid, Spacer, Table, Text, useModal } from "@nextui-org/react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import mockProduct from "../mocks/mockProduct.json";
import ItemsCheckOut from "../components/ItemsCheckOut"
import "./CheckOut.css"

const CheckOut = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const { setVisible, bindings } = useModal();
  const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }


  useEffect(() => {
    setProducts(mockProduct);
  }, []);

  const { cartList, setCartList, setCounter } = useContext(Context);
  let sum = 0;
  for (const property in cartList) {
    const currentPrice = cartList[property].price * (1 - cartList[property].sale / 100) * cartList[property].qty;
    sum += currentPrice;
  }
  function buy() {
    if (cartList.length > 0) {
      alert("đơn hàng của bạn đã được đặt");
      setCartList([]);
      setCounter(0)
    } else alert("bạn chưa có đơn nào");

  }

  return (
    <>
      <Container>
        <Spacer />
        <Grid xs={8} >
          <table id="customers"><tr>
            <th>tên sản phẩm</th>
            <th>hình ảnh </th>
            <th>Giá bán </th>
            <th>số lượng </th>
          </tr>
            {cartList.map((item) => <ItemsCheckOut data={item} />)}
            <tr>
              <td colspan="3"><Text size={30} css={{ textAlign: "right" }}> Tổng giá: {Intl.NumberFormat('vi-VN', config).format(sum)}</Text></td>
              <td><Button onPress={buy}> Thanh toán </Button> </td>
            </tr>
          </table>

        </Grid>

        <Grid xs={4} css={{ backgroundColor: "Red" }}></Grid>


      </Container>
    </>
  );
};

export default CheckOut;
