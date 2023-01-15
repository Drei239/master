import { Button, Navbar, Text, Modal, Input, Dropdown, Avatar, Grid, User, useModal } from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "./Mail";
import { Password } from "./Password";
import mockUser from "../mocks/mockUser.json";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { setVisible, bindings } = useModal();
    const [cartList, setCartList] = useState([]);
    const dataUser = mockUser;
    const navigate = useNavigate();
    let loginChecked = false;
    let isLogin = localStorage.getItem("isLogin");
    let currentUserName = localStorage.getItem("currentLoggedIn");
    console.log(isLogin);

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

        for (let i = 0; i < dataUser.length; i++) {
            if (inputUsername == dataUser[i].userName && inputPassword == dataUser[i].password) {
                alert("Đăng nhập thành công!");
                loginChecked = true;
                localStorage.setItem("currentLoggedIn", inputUsername);
                localStorage.setItem("currentLoggedInId", dataUser[i].id);
                localStorage.setItem("isLogin", true);
                setIsVisible(false);
                navigate("/");
                break;
            } else {
                console.log("Login failed");
            }
        }
        if (loginChecked === false) alert("Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu!")
    }

    function handleLogout() {
        localStorage.removeItem("currentLoggedIn");
        localStorage.removeItem("currentLoggedInId");
        localStorage.removeItem("isLogin");
        navigate("/");
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
                    {isLogin ? (<Grid>
                        <Dropdown placement="bottom-left">
                            <Dropdown.Trigger>
                                <User
                                    bordered
                                    as="button"
                                    size="lg"
                                    color="primary"
                                    name={currentUserName}
                                    description=""
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                />
                            </Dropdown.Trigger>
                            <Dropdown.Menu color="primary" aria-label="User Actions">
                                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        Signed in as
                                    </Text>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        {currentUserName}
                                    </Text>
                                </Dropdown.Item>
                                <Dropdown.Item key="settings" withDivider>
                                    My Settings
                                </Dropdown.Item>
                                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                                <Dropdown.Item key="analytics" withDivider>
                                    Analytics
                                </Dropdown.Item>
                                <Dropdown.Item key="system">System</Dropdown.Item>
                                <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                                <Dropdown.Item key="help_and_feedback" withDivider>
                                    Help & Feedback
                                </Dropdown.Item>
                                <Dropdown.Item key="logout" color="error" withDivider>
                                    <Link onClick={handleLogout}>Log Out</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid>)
                        : (<Button size="sm">Đăng ký</Button>)}
                </Navbar.Item>
                <Navbar.Item>
                    {isLogin ? (<Button size="sm" onClick={handleLogout}>Đăng Xuất</Button>)
                        : (<Button size="sm" onClick={openLoginModal}>Đăng Nhập</Button>)}
                </Navbar.Item>
                <Navbar.Item>
                    <Button shadow color="error" onPress={() => setVisible(true)} size="sm">Giỏ Hàng</Button>
                </Navbar.Item>
            </Navbar.Content>
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
                    <Button auto flat color="error" onClick={closeLoginModal}>
                        Close
                    </Button>
                    <Button auto onClick={handleLogin}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Modal Cart */}
            <Modal
                scroll
                width="500px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={30}>
                        GIỎ HÀNG CỦA BẠN
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        Cart
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={() => setVisible(false)}>
                        Close
                    </Button>
                    <Button auto onPress={() => setVisible(false)}>
                        Thanh toán
                    </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    )
}
export default Header; 