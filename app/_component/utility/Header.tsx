import React from "react";
import Styled from "./Header.module.css";
import Image from "next/image";
import { Flex } from "antd";
import { Col, Row } from "antd";
const Header = () => {
    return (
        <Flex justify={"space-between"} className={Styled.headerContainer}>
            <div className={Styled.logoCube}>
                <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
            </div>
            <div className="menu">
                <div className="menuList">配牌工具</div>
            </div>
        </Flex>
    );
};

export default Header;
