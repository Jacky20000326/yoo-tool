import React,{useState} from "react";
import Image from "next/image";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../../_lib/dnd/Constants";
import { CardType, cardDragState,DragState } from "../../../_lib/card/mahJong/Card";
import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import styled from './DrapPicture.module.css'
import { usePlayerList,useCardPool } from '../../../store/mahJongStore'
const DrapPicture = ({
    pictureInfo,
    index,
    currBoardIndex
}: {
    pictureInfo: CardType;
    index: number;
    currBoardIndex:number | 'pool'

}) => {

    let dafaultTarget = 0 // player1

    let { playerCardList,setPlayerCard,removePlayerCardAtList }  = usePlayerList()
    let { setCardPool,addCardPool,removeCardAtCardList,sortCardList,setCardGragState } = useCardPool()

    const removeCardAtPlayerList = (card:CardType)=>{
        addCardPool(card) // revert card pool
        setCardGragState(card,DragState.CANDRAG)
        if(typeof currBoardIndex == "number"){
            removePlayerCardAtList(currBoardIndex,card)
        }
    }


    const swapCard = (Card:CardType, targetIndex:number) :void=> {
        // 确认playerCardList内是否有此card
        let isExist =  playerCardList[dafaultTarget].find(card => card.id == Card.id)
        if(isExist){
            let findResult = playerCardList[dafaultTarget].findIndex(card => card.id == Card.id)
            const newItems = [...playerCardList[dafaultTarget]];
            [newItems[findResult], newItems[targetIndex]] = [newItems[targetIndex], newItems[findResult]];
            setCardPool(newItems)
        }else{
        
        }
        
    };

    

    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.CARD,

            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            }),
            item: pictureInfo,

            end:(cardList,monitor)=>{
              
            },


            
        }),
        []
    );

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => {
           
            swapCard(monitor.getItem(),index)
            // 在此处处理放置操作
        },
        hover: (item, monitor) => {
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

    });

    return (
            <div className={styled.DragPicture} ref={drag}>
                <div style={{"borderLeft": isOver ? "thick double #32a1ce" : "thick double transparent"}}  className={styled.PictureContainer} ref={drop}>
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
