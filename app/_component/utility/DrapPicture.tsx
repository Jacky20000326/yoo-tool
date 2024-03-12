import React from "react";
import Image from "next/image";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../_lib/dnd/Constants";
import { CardType } from "../../_lib/card/mahJong/Card";
const DrapPicture = ({
    pictureInfo,
    cardList,
    setPlayerCardList,
    index,
}: {
    pictureInfo: CardType;
    cardList: CardType[];
    setPlayerCardList: (cardType: CardType[]) => void;
    index: number;
}) => {
    const sortCard = (item: CardType) => {
        // 交換位置
    };

    const [{ isDragging, draggingResul }, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.CARD,

            collect: (monitor) => ({
                isDragging: monitor.isDragging() ? 0.5 : 1,
                draggingResul: monitor.getItem(),
            }),
            item: pictureInfo,
        }),
        []
    );

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => {
            // console.log({item, monitor})
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
        <div className="DragPicture" ref={drag}>
            <div className="DropPicture" ref={drop}>
                <Image
                    width={60}
                    height={90}
                    src={"/Mah-jong/Cards/" + pictureInfo.bg + ".png"}
                    alt={"Mah-jong"}
                />
            </div>
        </div>
    );
};

export default DrapPicture;
