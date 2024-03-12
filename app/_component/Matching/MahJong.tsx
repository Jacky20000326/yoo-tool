"use client";
import React, { useState } from "react";
import { Flex, Tag } from "antd";
import { Card, createAllCard, CardType } from "../../_lib/card/mahJong/Card";
import DrapPicture from "../utility/DrapPicture";
import BoardSquare from "../utility/BoardSquare";
import styled from "./MahJong.module.css";

export const DraggableCard = () => {};
const MahJong = () => {
    // card pool
    let [cardList, setCardList] = useState<CardType[]>(createAllCard);
    // player1
    let [player1CardList, setPlayer1CardList] = useState<CardType[]>([]);
    // player2
    let [player2CardList, setPlayer2CardList] = useState<CardType[]>([]);
    // player3
    let [player3CardList, setPlayer3CardList] = useState<CardType[]>([]);
    // player4
    let [player4CardList, setPlayer4CardList] = useState<CardType[]>([]);

    // 调整麻将顺序

    return (
        <Flex vertical gap="large" className="MahJongContainer">
            <Flex vertical gap="large" className="playerHandCard">
                <div className="player1">
                    <span>player1</span>
                    <BoardSquare
                        setPlayerCardList={setPlayer1CardList}
                        playerCardList={player1CardList}
                    >
                        {player1CardList.map((card, index) => (
                            <DrapPicture
                                key={card.id}
                                pictureInfo={card}
                                cardList={cardList}
                                setPlayerCardList={setPlayer1CardList}
                                index={index}
                            />
                        ))}
                    </BoardSquare>
                </div>
                <div className="player2">
                    <span>player2</span>
                    <BoardSquare
                        setPlayerCardList={setPlayer2CardList}
                        playerCardList={player2CardList}
                    >
                        {player2CardList.map((card, index) => (
                            <DrapPicture
                                key={card.id}
                                pictureInfo={card}
                                cardList={cardList}
                                setPlayerCardList={setPlayer1CardList}
                                index={index}
                            />
                        ))}
                    </BoardSquare>
                </div>
                <div className="player3">
                    <span>player3</span>
                    <BoardSquare
                        setPlayerCardList={setPlayer3CardList}
                        playerCardList={player3CardList}
                    >
                        {player3CardList.map((card, index) => (
                            <DrapPicture
                                key={card.id}
                                pictureInfo={card}
                                cardList={cardList}
                                setPlayerCardList={setPlayer1CardList}
                                index={index}
                            />
                        ))}
                        s
                    </BoardSquare>
                </div>
                <div className="player4">
                    <span>player4</span>
                    <BoardSquare
                        setPlayerCardList={setPlayer4CardList}
                        playerCardList={player4CardList}
                    >
                        暂无资料
                    </BoardSquare>
                </div>
            </Flex>
            <div className="otherCard">
                <span>card pool</span>
                <div className="otherCard">
                    <BoardSquare
                        setPlayerCardList={setCardList}
                        playerCardList={cardList}
                    >
                        {cardList.map((card, index) => (
                            <DrapPicture
                                key={card.id}
                                pictureInfo={card}
                                cardList={cardList}
                                setPlayerCardList={setCardList}
                                index={index}
                            />
                        ))}
                    </BoardSquare>
                </div>
                <div className="otherCard2"></div>
            </div>
        </Flex>
    );
};

export default MahJong;
