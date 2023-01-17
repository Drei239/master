import { Button, Navbar, Text, Modal, Input, Dropdown, Avatar, Grid, User, useModal, Card, Image } from "@nextui-org/react";
import "./ProductItem.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";

function CartItem(props) {
    
    const { cartList, setCartList, setCounter,counter } = useContext(Context);
    const { id, name, image, qty, price, sale } = props;
    const currentPrice = price * (1 - sale / 100);
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }
    const formatedPrice = new Intl.NumberFormat('vi-VN', config).format(currentPrice);

    function xoa(id){
        let i = cartList.filter(i => i.id!=id);
        let sum =0
        setCartList(i)
        for(let a in cartList){
            sum =sum+ cartList[a].qty
            console.log("sum",sum)
        }
      
        setCounter(sum-1)
    }
    return (
        <div>
            <Grid.Container gap={1} justify="center">
                <Grid xs={3}>
                    <Text>{name}</Text>
                </Grid>
                <Grid xs={3}>
                    <Image src={image}></Image>
                </Grid>
                <Grid xs={2}>
                    <Text>{qty}</Text>
                </Grid>
                <Grid xs={2.4}>
                    <Text>{Intl.NumberFormat('vi-VN', config).format(currentPrice*qty)}</Text>
                </Grid>
                <Grid xs={1.6}>
                    <Button size="xs" css={{width:"10px"}} onPress={()=>xoa(id)}> xóa</Button>
                </Grid>

            </Grid.Container>
        </div>
    )
}
export default CartItem;