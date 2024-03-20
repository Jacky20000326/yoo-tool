"use client";
import React, { useState,useEffect } from "react";
import { Card, createAllCard, CardType } from "../../../_lib/card/mahJong/Card";
import DrapPicture from "./DrapPicture";
import BoardSquare from "./BoardSquare";
import styled from "./MahJong.module.css";
import { PlusSquareOutlined, ReloadOutlined } from '@ant-design/icons';
import { Col, Row,Button,Flex, Tag,Modal, Tooltip  } from 'antd';
import { paiCard } from '../../../_lib/card/mahJong/paiCard'
import Radio from "antd/lib/radio";
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

    // banker
    let [banker, setBanker] = useState<number>(1);

    // ==== pop up controller ====
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
    // ==== banker ====

    const setCurrentBanker = (banker:number)=>{
        setBanker(isBanker => isBanker = banker )
    }
    

    // ==== CardList ====

    const removeCardAtCardList = (removeCard:CardType)=>{
        setCardList(item => item.filter(card => card.id != removeCard.id))
    }

    const revertCardAtCardList = (card:CardType)=>{
        
        setCardList(item => {
            let newList =  [...item,card]

            return newList
        })
    }

    const sortCardList = ()=>{
        
        const sortedList = [...cardList].sort((pre, next) => Number(pre.value) - Number(next.value));
            
        setCardList(sortedList);
    }

    

    useEffect(()=>{
        sortCardList()
    },[])


    return (
        <>
        <Flex vertical={false} gap="large" className={styled.MahJongContainer}>
            <Row gutter={16} style={{width:"100%",minHeight:"50vh"}}>
            <Radio.Group className={styled.radioContainer} value={banker} onChange={(e)=>{setBanker(e.target.value)}}>
                <Radio className={styled.radio1} value={1}>庄</Radio>
                <Radio className={styled.radio2} value={2}>庄</Radio>
                <Radio className={styled.radio3} value={3}>庄</Radio>
                <Radio className={styled.radio4} value={4}>庄</Radio>
            </Radio.Group>

                <Col span={6} >
                    <div className={styled.player}>
                        <span className={styled.playerTxt}>player1</span>
                        <BoardSquare
                            setPlayerCardList={setPlayer1CardList}
                            playerCardList={player1CardList}
                            removeCardAtCardList={removeCardAtCardList}
                        >
                            {player1CardList.map((card, index) => (
                                <DrapPicture
                                    key={card.id}
                                    pictureInfo={card}
                                    cardList={cardList}
                                    setPlayerCardList={setPlayer1CardList}
                                    playerCardList={player1CardList}
                                    index={index}
                                    revertCardAtCardList={revertCardAtCardList}
                                    
                                />
                            ))}
                            {
                                player1CardList.length < 13 ? <div className={styled.dropPlace}>
                                <PlusSquareOutlined />
                                </div> : <div className={styled.dropFinish}>
                                    完成!
                                </div>
                            }
                        
                        </BoardSquare>
                    </div>
                </Col>
                <Col span={6}>
                    <div className={styled.player}>
                        <span className={styled.playerTxt}>player2</span>
                        <BoardSquare
                            setPlayerCardList={setPlayer2CardList}
                            playerCardList={player2CardList}
                            removeCardAtCardList={removeCardAtCardList}
                        >
                            {player2CardList.map((card, index) => (
                                <DrapPicture
                                    key={card.id}
                                    pictureInfo={card}
                                    cardList={cardList}
                                    setPlayerCardList={setPlayer2CardList}
                                    index={index}
                                    playerCardList={player2CardList}
                                    revertCardAtCardList={revertCardAtCardList}
                                />
                            ))}
                            {
                                player2CardList.length < 13 ? <div className={styled.dropPlace}>
                                    <PlusSquareOutlined />
                                </div> :  <div className={styled.dropFinish}>
                                    完成!
                                </div>
                            }
                            
                        </BoardSquare>
                    </div>
                </Col>
                <Col span={6}>
                    <div className={styled.player}>
                        <span className={styled.playerTxt}>player3</span>
                        <BoardSquare
                            setPlayerCardList={setPlayer3CardList}
                            playerCardList={player3CardList}
                            removeCardAtCardList={removeCardAtCardList}
                        >
                            {player3CardList.map((card, index) => (
                                <DrapPicture
                                    key={card.id}
                                    pictureInfo={card}
                                    cardList={cardList}
                                    setPlayerCardList={setPlayer3CardList}
                                    index={index}
                                    playerCardList={player3CardList}
                                    revertCardAtCardList={revertCardAtCardList}
                                />
                            ))}
                             {
                                player3CardList.length < 13 ? <div className={styled.dropPlace}>
                                    <PlusSquareOutlined />
                                </div> :  <div className={styled.dropFinish}>
                                    完成!
                                </div>
                            }
                            
                        </BoardSquare>
                    </div>
                </Col>
                <Col span={6}>
                    <div className={styled.player}>
                        <span className={styled.playerTxt}>player4</span>
                        <BoardSquare
                            setPlayerCardList={setPlayer4CardList}
                            playerCardList={player4CardList}
                            removeCardAtCardList={removeCardAtCardList}
                        >
                            {player4CardList.map((card, index) => (
                                <DrapPicture
                                    key={card.id}
                                    pictureInfo={card}
                                    cardList={cardList}
                                    setPlayerCardList={setPlayer4CardList}
                                    index={index}
                                    playerCardList={player4CardList}
                                    revertCardAtCardList={revertCardAtCardList}
                                />
                            ))}
                           {
                                player4CardList.length < 13 ? <div className={styled.dropPlace}>
                                    <PlusSquareOutlined />
                                </div> : <div className={styled.dropFinish}>
                                    完成!
                                </div>
                            }
                        </BoardSquare>
                    </div>
                </Col>
            </Row>
        </Flex>
        <div className={styled.otherCard}>
                <span className={styled.cardPoolTxt}>card pool</span>
                <Tooltip title="重整" >
                    <Button onClick={sortCardList} type="default" size="small" style={{marginLeft: "20px"}} shape="circle" icon={<ReloadOutlined /> } />
                </Tooltip>
                <div className="otherCard">
                    <BoardSquare
                        setPlayerCardList={setCardList}
                        playerCardList={cardList}
                        removeCardAtCardList={removeCardAtCardList}
                    >
                        {cardList.map((card, index) => (
                            <DrapPicture
                                key={card.id}
                                pictureInfo={card}
                                cardList={cardList}
                                setPlayerCardList={setCardList}
                                index={index}
                                playerCardList={cardList}
                                revertCardAtCardList={revertCardAtCardList}
                            />
                        ))}
                    </BoardSquare>
                </div>
                <div className="otherCard2"></div>
            </div>
            <Flex vertical gap="small" style={{ width: '100%',marginTop: "20px" }}>
                <Button disabled={cardList.length != 92}   onClick={showModal}> 
                        产生配牌字串
                </Button>
            </Flex>
            <Modal title="配牌TOOL" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{paiCard(player1CardList,player2CardList,player3CardList,player4CardList,cardList,banker)}</p>
            </Modal>
        </>
    );
};
export default MahJong;
