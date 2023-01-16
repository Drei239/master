import { Card, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import mockProduct from "../mocks/mockProduct.json";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./SlideItem.css"


export default function SlideItem() {
    let [products, setProducts] = useState([]);
    
    useEffect(() => {
        //mockData nhà quê
        setProducts(mockProduct);

        //Fetch API = Axios
        // axios.get(API_PRODUCTS_URL).then(({ data }) => {
        //     console.log(data);
        //     setProducts(data);
        // });
    }, []);
    let i=0;
    while(i<5&&i<15){
     i = Math.floor(Math.random() * 20)
    }
    let a=i;
    let list = [];
    for(i;i<a+6;i++){
        list.push(mockProduct[i])
    }
    let rating=()=>{
        let i =  Math.floor(Math.random() * 5);
        let str="⭐";
        for(let a=0;a<i;a++){
            str= str+"⭐"
        }
        return(<p>nhận được : {str} </p>)
    }
  return (
    <Grid.Container gap={0} justify="flex-start" className="slide-bar">
      {list.map((item, index) => (
        <Grid xs={6} sm={2} key={index}>
            <Link to={`/detail/${item.id}`}>
          <Card isPressable isHoverable css={{borderRadius:"0px"}}>
            <Card.Body css={{ p: 10 }} >
              <Card.Image
                src={ item.image}
                objectFit="fix"
                width="100%"
                height={140}
                alt={item.name}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
             
                <Text b>{item.name} <Text css={{textAlign:"left", color: "$accents7", fontWeight: "$semibold", fontSize: "15px" }}>
                  {item.price * (1 - item.sale / 100)} VNĐ
                </Text> <Text>{ rating()}</Text></Text><Spacer/>
                
            </Card.Footer>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  );
}