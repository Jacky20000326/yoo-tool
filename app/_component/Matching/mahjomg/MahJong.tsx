"use client";
import React, { useState, useEffect,useRef } from "react";
import { Card, createAllCard, CardType, DragState } from "../../../_lib/card/mahJong/Card";
import DrapPicture from "./DrapPicture";
import BoardSquare from "./BoardSquare";
import styled from "./MahJong.module.css";
import { PlusSquareOutlined, ReloadOutlined } from "@ant-design/icons";
import { Col, Row, Button, Flex, message, Modal, Tooltip,Input,FloatButton   } from "antd";
import { paiCard } from "../../../_lib/card/mahJong/paiCard";
import Radio from "antd/lib/radio";
import { useCurrControlPlayerList } from "../../../store/mahJongStore";
import { usePlayerList, useCardPool } from "../../../store/mahJongStore";
import { extractContentFromTags,getCardDataAndTranArr } from "@/app/_lib/card/mahJong/ReadPaiCard";


const OverWritePaiCardButton: React.FC = () => {

    const { TextArea } = Input;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [messageApi, contextHolder] = message.useMessage(); 


    const paiCardTxt = useRef<any>(null)

    
    let { setPlayerCard }  = usePlayerList();
    let { setCardPool } = useCardPool();
                

    const showModal = () => {
        setIsModalOpen(true);

    };

    const handleOk = () => {

        
        if (paiCardTxt.current) {
            let getTxt = paiCardTxt.current.resizableTextArea.textArea.value 
            let templete = `<templete>00</templete>` + getTxt  // `<templete>00</templete>` 让正规表达式侦测的样板  20240322 测试

            let getPaiCardArrResult = extractContentFromTags(getTxt)

            if(typeof  getCardDataAndTranArr(getPaiCardArrResult) == "string" || !getCardDataAndTranArr(getPaiCardArrResult)){
                messageApi.open({
                    type: 'error',
                    content: '格式不正确你要配个毛啊 操'
                });
            }else{  

                let { cardPoolResultList,player0ResultList,player1ResultList,player2ResultList,player3ResultList } = getCardDataAndTranArr(getPaiCardArrResult) as unknown as any
                    setPlayerCard(0,player0ResultList)
                    setPlayerCard(1,player1ResultList)
                    setPlayerCard(2,player2ResultList)
                    setPlayerCard(3,player3ResultList)
                    setCardPool(cardPoolResultList)

                    messageApi.open({
                        type: 'success',
                        content: '配牌成功'
                    });
                    

                    // setTimeout(()=>{
                    //     setIsModalOpen(false);
                    // },100) 
            }




            


        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    

    return (
        <>
            <Modal
                title="放入配牌文挡"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="开始配牌"
                cancelText="取消">
                <div className="description" style={{backgroundColor: "#ECEFF7",borderRadius:"10px",margin:"0px 0px 10px 0px",padding: "10px"}}>
                    <h3>范例:</h3>
                    <p>&lt;CardPool2&gt;49 48 47 46 45 44 43 42 37 37  ... (共13向)&lt;/CardPool2&gt;</p>
                    <p>&lt;CardPool1&gt;49 48 47 46 45 44 43 42 37 37  ... (共13向)&lt;/CardPool2&gt; </p>
                    <p>&lt;player0&gt;49 48 47 46 45 44 43 42 37 37  ... (共13向)&lt;/CardPool2&gt;</p>
                    <p>&lt;player1&gt;49 48 47 46 45 44 43 42 37 37  ... (共13向)&lt;/CardPool2&gt;</p>
                    <p>&lt;player2&gt;49 48 47 46 45 44 43 42 37 37  ... (共13向)&lt;/CardPool2&gt;</p>
                    <p>&lt;player3&gt;49 48 47 46 45 44 43 42 37 37  ... (共13向)&lt;/CardPool2&gt;</p>
                </div>
                <TextArea rows={12} placeholder="maxLength is 6" ref={paiCardTxt}/>
              
                {contextHolder}
            </Modal>

          



            <FloatButton onClick={showModal} />
        </>
    );
}



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

    const [messageApi, contextHolder] = message.useMessage(); 



    const addCardHandler = (card:CardType)=>{
        if(playerCardList[currControl].length < 13){
            addPlayerCard(currControl,card)
            removeCardAtCardList(card)
            setCardGragState(currControl,card,DragState.CANNOTDRAG)
            sortPlayerCard(currControl);
        }else{
            messageApi.open({
                type: 'warning',
                content: '玩家手牌以补满无法新增'
            });
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
                            <div className="hanlerCube" key={card.id} onClick={()=>{addCardHandler(card)}}>
                                <DrapPicture
                                    
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
            {contextHolder}
            <OverWritePaiCardButton/>
        </>
    );
};
export default MahJong;
