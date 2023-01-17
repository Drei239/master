import { Button, Navbar, Text, Modal, Input, Dropdown, Avatar, Grid, User, useModal, Card, Image } from "@nextui-org/react";
import "./ProductItem.css";

function CartItem(props) {
    const { id, name, image, qty, price, sale } = props;
    const currentPrice = price * (1 - sale / 100);

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
                <Grid xs={1.5}>
                    <Text>{currentPrice*qty}</Text>
                </Grid>
                <Grid xs={2}>
                    <Button size="xs">-</Button>
                </Grid>

            </Grid.Container>
        </div>
    )
}
export default CartItem;