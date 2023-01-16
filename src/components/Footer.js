import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import {
  Button,
  Container,
  Grid,
  Image,
  Spacer,
  Text,Input, useInput,useModal,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
const Footer = () => {
    const { value, reset, bindings } = useInput("");
    
    const validateEmail = (value) => {
      return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };
    const helper = React.useMemo(() => {
        if (!value)
          return {
            text: "",
            color: "",
          };
        const isValid = validateEmail(value);
        return {
          text: isValid ? "Correct email" : "Enter a valid email",
          color: isValid ? "success" : "error",
        };
      }, [value]);

      
    

  return (
    <footer >
      <Spacer />
      <Container >
        <Grid.Container gap={0} className="footer" css={{paddingLeft:"10px"}}>
          <Grid xs={6}>
          {/* <Text h1 size={40}>
                  <Link to="/">Mobile Showroom</Link>
                  <Text size={13} weight="bold">
                    Chân thành phục vụ từ 2013
                  </Text>
                  </Text> */}

<Grid.Container gap={0} justify="center">
      <Grid xs={12} md={12}>
      <Text h1 size={40}>
                  <Link to="/">Mobile Showroom</Link>
                  <Text size={13} weight="bold">
                    Chân thành phục vụ từ 2013
                  </Text>
                  </Text>
      </Grid>
      <Grid xs={6} md={3} >
        <Link to={"/contact"}>Contact</Link>
      </Grid>
      <Grid xs={6} md={3} >
      <Link to={"/products"}>Sản phẩm </Link>
      </Grid>
      <Grid xs={6} md={3} >
      <Link to={"/about"}>về chúng tôi</Link>
      </Grid>
    </Grid.Container>

          </Grid>
          <Grid xs={6}>
            <Image src="https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/zoe_22.jpg" height={200} width={"100%"} objectFit={"fill"} />
          </Grid>
        </Grid.Container>
        <Container>
        
        </Container>
      </Container>
      <Spacer></Spacer>
   

    </footer>
  );
};

export default Footer;
