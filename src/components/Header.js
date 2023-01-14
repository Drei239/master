import { Button, Navbar, Text, Modal, Input } from "@nextui-org/react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Mail } from "./Mail";
import { Password } from "./Password";
import mockUser from "../mocks/mockUser.json";


const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const dataUser = mockUser;

    function openLoginModal() {
        setIsVisible(true);
    }

    function closeLoginModal() {
        setIsVisible(false)
    }

    function handleLogin() {
        let inputUsername = document.getElementById("username")?.value;
        console.log(inputUsername);
        let inputPassword = document.getElementById("password")?.value;
        console.log(inputPassword);
        let loginChecked = false;
        for (let i = 0; i < dataUser.length; i++) {
            if (inputUsername == dataUser[i].userName && inputPassword == dataUser[i].password) {
                console.log("Login thành công");
                alert("Login thành công!");
                loginChecked = true;
                sessionStorage.setItem("currentLoggedIn", inputUsername);
                break;
            } else {
                console.log("Login failed");
            }
        }
        if (loginChecked === false) alert("Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu!")
    }

    function handleLogout() {
        sessionStorage.removeItem("currentLoggedIn");
    }
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
                    <Button size="sm" onClick={openLoginModal}>Đăng nhập</Button>
                </Navbar.Item>
                {/* Modal Login */}
                <Modal blur open={isVisible} onClose={closeLoginModal}>
                    {/* Modal Header */}
                    <Modal.Header>
                        <Text id="modal-title" size={18}>
                            Welcome to
                            <Text b size={18}>
                                {""} Mobile Showroom
                            </Text>
                        </Text>
                    </Modal.Header>
                    {/* Modal Body */}
                    <Modal.Body>
                        <Input
                            id="username"
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Email"
                            contentLeft={<Mail fill="currentColor" />}
                        />
                        <Input
                            type="password"
                            id="password"
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Password"
                            contentLeft={<Password fill="currentColor" />}
                        /></Modal.Body>
                    {/* Modal Footer */}
                    <Modal.Footer>
                        {/* Nút Logout dùng để test */}
                        <Button onClick={handleLogout}>Logout</Button>
                        <Button auto flat color="error" onClick={closeLoginModal}>
                            Close
                        </Button>
                        <Button auto onClick={handleLogin}>
                            Sign in
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Navbar.Content>
        </Navbar>
    )
}
export default Header; 