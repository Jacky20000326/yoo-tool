import React from "react";
import Styled from "./Header.module.css";
import { Flex } from "antd";

const Header = () => {
    return (
        <Flex justify="end" align="center" className={Styled.headerContainer}>
            <div className="menu">
                <div className={Styled.menuList}>Yoo Tools</div>
            </div>
        </Flex>
    );
};

export default Header;
