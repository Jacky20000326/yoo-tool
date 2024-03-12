import React, { Dispatch, SetStateAction } from "react";

import { Flex } from "antd";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/app/_lib/dnd/Constants";
import { CardType } from "../../_lib/card/mahJong/Card";
const BoardSquare = ({
    children,
    setPlayerCardList,
    playerCardList,
}: {
    children: React.ReactNode;
    setPlayerCardList: Dispatch<SetStateAction<CardType[]>>;
    playerCardList: CardType[];
}) => {
    const sortAndUpdateCard = (item: CardType) => {
        setPlayerCardList((card) => [...card, item]);
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
                margin: "20px 0px 0px 0px",
                position: "relative",
                width: "100%",
                height: "100%",
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
