"use client";
import React from "react";
import { Flex } from "antd";
import Image from "next/image";
import Picture from "../utility/Picture";

const MahJong = () => {
    return (
        <Flex vertical gap="large" className="MahJongContainer">
            <Flex vertical gap="large" className="playerHandCard">
                <div className="player1">
                    <span>player1</span>
                    <Flex className="player1HandCards">
                        {<Picture urlSource="/Mah-jong/Group11.png" />}
                    </Flex>
                </div>
                <div className="player2">
                    <span>player2</span>
                    <Flex className="player1HandCards">
                        {<Picture urlSource="/Mah-jong/Group11.png" />}
                    </Flex>
                </div>
                <div className="player3">
                    <span>player3</span>
                    <Flex className="player1HandCards">
                        {<Picture urlSource="/Mah-jong/Group11.png" />}
                    </Flex>
                </div>
                <div className="player4">
                    <span>player4</span>
                    <Flex className="player1HandCards">
                        {<Picture urlSource="/Mah-jong/Group11.png" />}
                    </Flex>
                </div>
            </Flex>
            <div className="otherCard">
                otherCard
                <div className="otherCard1"></div>
                <div className="otherCard2"></div>
            </div>
        </Flex>
    );
};

export default MahJong;
