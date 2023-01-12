import { Button, Navbar, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Text h2>
                    <Link to="/">Mobile Showroom</Link></Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link>
                    <Link to="/">Trang chủ</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/products">Sản phẩm</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/contact">Liên hệ</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/about">About</Link>
                </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button size="sm">Đăng ký</Button>
                </Navbar.Item>
                <Navbar.Item>
                    <Button size="sm">Đăng nhập</Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}
export default Header; 