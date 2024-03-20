import React, { Dispatch, SetStateAction } from "react";

import { Flex } from "antd";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/app/_lib/dnd/Constants";
import { CardType, cardDragState,DragState } from "../../../_lib/card/mahJong/Card";
// import { PlusSquareOutlined } from '@ant-design/icons';
import { usePlayerList,useCardPool } from '../../../store/mahJongStore'
import styled from './BoardSquare.module.css'

const BoardSquare = ({
    children,
    currBoardIndex
}: {
    children: React.ReactNode;
    currBoardIndex:number | 'pool'
}) => {

   

    // zustand store
    let { setCardGragState,playerCardList,setPlayerCard }  = usePlayerList()
    let { removeCardAtCardList } = useCardPool()


    const sortAndUpdateCard = (item: CardType) => {
        
        if(typeof currBoardIndex == "number" ){

            let playerList =  playerCardList[currBoardIndex]

            let findResult = playerList.findIndex(card => card.id == item.id)
    
            if(findResult == -1 && !!item.canDrag && playerList.length < 13){
                
                setPlayerCard(currBoardIndex,item)
    
                removeCardAtCardList(item)
    
                setCardGragState(currBoardIndex,item,DragState.CANNOTDRAG)
            }
        }
    }; 

    // const sortAndUpdateCard = (item: CardType) => {
    
    //     let findResult = playerCardList.findIndex(card => card.id == item.id)

    //     if(findResult == -1 && !!item.canDrag && playerCardList.length < 13){
        
    //         setPlayerCardList((card) => [...card, item]);
    //         removeCardAtCardList(item)
    //         cardDragState(item,DragState.CANNOTDRAG)
    //     }
    // }; 


    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item: CardType) => {
            sortAndUpdateCard(item);
            // 在此处处理放置操作
        },

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <>
            <Flex
                ref={drop}
                style={{
                    margin: "10px 0px 0px 0px",
                    position: "relative",
                    width: "100%",
                    minHeight: "50vh",
                    backgroundColor: "#E5E5E5",
                    padding: "1em",
                    borderRadius: "10px",
                    // boxShadow: "0px 1px 2px 0px rgba(255, 165, 0,0.7),1px 2px 4px 0px rgba(255, 165, 0,0.7),2px 4px 8px 0px rgba(255, 165, 0,0.7),2px 4px 16px 0px rgba(255, 165, 0,0.7)"
                }}
                className="player1HandCards"
                gap="middle"
                wrap="wrap"
            >
                
                {children}
            </Flex>
            
        </>
        
    );
};

export default BoardSquare;
