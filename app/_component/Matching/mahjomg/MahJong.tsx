"use client";
import React, { useState, useEffect } from "react";
import { Card, createAllCard, CardType, DragState } from "../../../_lib/card/mahJong/Card";
import DrapPicture from "./DrapPicture";
import BoardSquare from "./BoardSquare";
import styled from "./MahJong.module.css";
import { PlusSquareOutlined, ReloadOutlined } from "@ant-design/icons";
import { Col, Row, Button, Flex, Tag, Modal, Tooltip } from "antd";
import { paiCard } from "../../../_lib/card/mahJong/paiCard";
import Radio from "antd/lib/radio";
import { useCurrControlPlayerList } from "../../../store/mahJongStore";
import { usePlayerList, useCardPool } from "../../../store/mahJongStore";
export const DraggableCard = () => {};
const MahJong = () => {
    // zustand store data
    
    let { currControl, setCurrControl } = useCurrControlPlayerList();
    let { playerCardList, addPlayerCard, sortPlayerCard,setCardGragState } =
        usePlayerList();
    let {
        cardPoolList,
        setCardPool,
        addCardPool,
        removeCardAtCardList,
        sortCardList,
    } = useCardPool();

   
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



    const addCardHandler = (card:CardType)=>{
        if(playerCardList[currControl].length < 13){
            addPlayerCard(currControl,card)
            removeCardAtCardList(card)
            setCardGragState(currControl,card,DragState.CANNOTDRAG)
            sortPlayerCard(currControl);
        }   
      
    }


    useEffect(() => {
        sortCardList();
    }, []);

    return (
        <>
            <Flex
                vertical={false}
                gap="large"
                className={styled.MahJongContainer}
            >
                <Row gutter={16} style={{ width: "100%", minHeight: "50vh" }}>
                    <Radio.Group
                        className={styled.radioContainer}
                        value={banker}
                        onChange={(e) => {
                            setBanker(e.target.value);
                        }}
                    >
                        <Radio className={styled.radio1} value={1}>
                            庄
                        </Radio>
                        <Radio className={styled.radio2} value={2}>
                            庄
                        </Radio>
                        <Radio className={styled.radio3} value={3}>
                            庄
                        </Radio>
                        <Radio className={styled.radio4} value={4}>
                            庄
                        </Radio>
                    </Radio.Group>

                    {playerCardList.map((info, playerIndex) => (
                        <Col span={6} key={playerIndex}>
                            <div className={styled.player} onClick={()=>{setCurrControl(playerIndex)}}>
                                <span className={styled.playerTxt}>
                                    {"player" + (playerIndex + 1)}
                                </span>
                                    <BoardSquare currBoardIndex={playerIndex}>
                                        {playerCardList[playerIndex].map(
                                            (card, index) => (
                                                    
                                                        <DrapPicture
                                                            key={index}
                                                            pictureInfo={card}
                                                            index={index}
                                                            currBoardIndex={playerIndex}
                                                        />
                                                    
                                                
                                            )
                                        )}
                                        {playerCardList[playerIndex].length < 13 ? (
                                            <div className={styled.dropPlace}>
                                                <PlusSquareOutlined />
                                            </div>
                                        ) : (
                                            <div className={styled.dropFinish}>
                                                完成!
                                            </div>
                                        )}
                                    </BoardSquare>
                                </div>

                        
                        </Col>
                    ))}
                </Row>
            </Flex>
            <div className={styled.otherCard}>
                <span className={styled.cardPoolTxt}>card pool</span>
                <Tooltip title="重整">
                    <Button
                        onClick={sortCardList}
                        type="default"
                        size="small"
                        style={{ marginLeft: "20px" }}
                        shape="circle"
                        icon={<ReloadOutlined />}
                    />
                </Tooltip>
                <div className="otherCard">
                    <BoardSquare currBoardIndex="pool">
                        {cardPoolList.map((card, index) => (
                            <div className="hanlerCube" onClick={()=>{addCardHandler(card)}}>
                                <DrapPicture
                                    key={card.id}
                                    pictureInfo={card}
                                    index={index}
                                    currBoardIndex="pool"
                                />
                            </div>
                            
                        ))}
                    </BoardSquare>
                </div>
                <div className="otherCard2"></div>
            </div>
            <Flex
                vertical
                gap="small"
                style={{ width: "100%", marginTop: "20px" }}
            >
                <Button
                    disabled={cardPoolList.length != 92}
                    onClick={showModal}
                >
                    产生配牌字串
                </Button>
            </Flex>
            <Modal
                title="配牌TOOL"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>
                    {paiCard(
                        playerCardList[0],
                        playerCardList[1],
                        playerCardList[2],
                        playerCardList[3],
                        cardPoolList,
                        banker
                    )}
                </p>
            </Modal>
        </>
    );
};
export default MahJong;
