import React,{useState} from "react";
import Image from "next/image";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../../_lib/dnd/Constants";
import { CardType, cardDragState,DragState } from "../../../_lib/card/mahJong/Card";
import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import styled from './DrapPicture.module.css'

const DrapPicture = ({
    pictureInfo,
    cardList,
    setPlayerCardList,
    index,
    playerCardList,
    revertCardAtCardList
}: {
    pictureInfo: CardType;
    cardList: CardType[];
    setPlayerCardList: (cardType: CardType[]) => void;
    index: number;
    playerCardList: CardType[],
    revertCardAtCardList: (cardType: CardType) => void
}) => {


    const removeCardAtPlayerList = (card:CardType)=>{
        revertCardAtCardList(card)
        cardDragState(card,DragState.CANDRAG)
        let newArr = playerCardList.filter(item => item.id != card.id)
        setPlayerCardList(newArr)
    }


    const swapCard = (Card:CardType, targetIndex:number) :void=> {
        // 确认playerCardList内是否有此card
        let isExist =  playerCardList.find(card => card.id == Card.id)
        if(isExist){
            let findResult = playerCardList.findIndex(card => card.id == Card.id)
            const newItems = [...playerCardList];
            [newItems[findResult], newItems[targetIndex]] = [newItems[targetIndex], newItems[findResult]];
            setPlayerCardList(newItems)
        }else{


        }
        
    };

    

    const [{ }, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.CARD,

            collect: (monitor) => ({
                // isDragging: monitor.isDragging() ? 0.5 : 1,
            }),
            item: pictureInfo,

            end:(cardList,monitor)=>{
                console.log(cardList)
            },


            
        }),
        []
    );

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => {
            console.log({item, monitor})
            swapCard(monitor.getItem(),index)
            // 在此处处理放置操作
        },
        hover: (item, monitor) => {
            console.log(index);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

    });

    return (
            <div className={styled.DragPicture} ref={drag}>
                <div className="DropPicture" ref={drop}>
                    <Image
                        width={60}
                        height={90}
                        src={"/Mah-jong/Cards/" + pictureInfo.bg + ".png"}
                        alt={"Mah-jong"}
                    />
                </div>
                {
                    !pictureInfo.canDrag &&  <Button onClick={()=>{removeCardAtPlayerList(pictureInfo)}} className={styled.CloseCircleBtn} type="primary" shape="circle" icon={<CloseCircleOutlined />} size="small" danger/> 
                }
            </div>
        
    );
};

export default DrapPicture;
