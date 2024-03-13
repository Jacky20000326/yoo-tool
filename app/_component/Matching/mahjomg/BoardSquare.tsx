import React, { Dispatch, SetStateAction } from "react";

import { Flex } from "antd";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/app/_lib/dnd/Constants";
import { CardType, cardDragState,DragState } from "../../../_lib/card/mahJong/Card";



const BoardSquare = ({
    children,
    setPlayerCardList,
    playerCardList,
    removeCardAtCardList
}: {
    children: React.ReactNode;
    setPlayerCardList: Dispatch<SetStateAction<CardType[]>>;
    playerCardList: CardType[];
    removeCardAtCardList: (removeCard:CardType)=>void
}) => {

    const sortAndUpdateCard = (item: CardType) => {
        console.log(playerCardList)
        let findResult = playerCardList.findIndex(card => card.id == item.id)

        if(findResult == -1 && !!item.canDrag){
            console.log("canDrag")
            setPlayerCardList((card) => [...card, item]);
            removeCardAtCardList(item)
            cardDragState(item,DragState.CANNOTDRAG)
        }
    }; 


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
        <Flex
            ref={drop}
            style={{
                margin: "10px 0px 0px 0px",
                position: "relative",
                width: "100%",
                minHeight: "50vh",
                backgroundColor: "#E5E5E5",
                padding: "1em",
                borderRadius: "10px"
            }}
            className="player1HandCards"
            gap="middle"
            wrap="wrap"
        >
            {children}
        </Flex>
    );
};

export default BoardSquare;
