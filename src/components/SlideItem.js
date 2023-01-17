import { Card, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import mockProduct from "../mocks/mockProduct.json";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./SlideItem.css"


export default function SlideItem() {
  let [products, setProducts] = useState([]);
  const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }


  useEffect(() => {
    //mockData nhà quê
    setProducts(mockProduct);

    //Fetch API = Axios
    // axios.get(API_PRODUCTS_URL).then(({ data }) => {
    //     console.log(data);
    //     setProducts(data);
    // });
  }, []);
  let i = 0;
  while (i < 5 && i < 15) {
    i = Math.floor(Math.random() * 20)
  }
  let a = i;
  let list = [];
  for (i; i < a + 6; i++) {
    list.push(mockProduct[i])
  }
  let rating = () => {
    let i = Math.floor(Math.random(6) * 5);
    let str = "⭐⭐";
    for (let a = 0; a < i; a++) {
      str = str + "⭐"
    }
    return (<p>Đánh giá: {str} </p>)
  }
  if(products.length>0){
  return (
    <Grid.Container gap={1} justify="flex-start" className="slide-bar">
      {list.map((item, index) => (
        <Grid xs={2}  key={index}>
          <Link to={`/detail/${item.id}`}>
            <Card isPressable isHoverable css={{ borderRadius: "0px" }}>
              <Card.Body css={{ p: 10 }} >
                <Card.Image
                  src={item.image}
                  objectFit="fill"
                  width={200}
                  height={170}
                  alt={item.name}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start", height:"130px" }}>
                <Text b>{item.name} <Text css={{ textAlign: "left", color: "$accents7", fontWeight: "$semibold", fontSize: "15px",}}>
                  {Intl.NumberFormat('vi-VN', config).format(item.price * (1 - item.sale / 100))} VNĐ
                </Text> <Text css={{position:"absolute", top:"285px"}}>{rating()}</Text></Text><Spacer />
              </Card.Footer>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  );}
}