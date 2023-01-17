import { Container, Grid, Table, Image } from "@nextui-org/react";

const ItemsCheckOut = (props) => {
  const { data } = props
  const currentPrice = data.price * (1 - data.sale / 100);
  const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 }
  const formatedPrice = new Intl.NumberFormat('vi-VN', config).format(currentPrice);
  return (
    <tr>
      <td>{data.name} </td>
      <td><Image src={data.image} width={100} height={100} /> </td>
      <td>{formatedPrice} </td>
      <td>{data.qty} </td>
    </tr>

  )
}
export default ItemsCheckOut;
