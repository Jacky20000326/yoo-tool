import React from 'react'

import { Flex } from "antd";
import { useDrop } from 'react-dnd';
import { ItemTypes } from '@/app/_lib/dnd/Constants';
import { CardType } from '../../_lib/card/mahJong/Card'
const BoardSquare = ({children}:{children:React.ReactNode}) => {

    const moveCard = ()=>{
        console.log('moveCard')
    }

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => {
            console.log({item})
          // 在此处处理放置操作
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });



    return (
        <Flex ref={drop} style={{margin: "20px 0px 0px 0px", position: 'relative',width: '100%',height: '100%',}} 
            className="player1HandCards" gap="middle" wrap='wrap'>
            {children}
        </Flex>
    )
}

export default BoardSquare