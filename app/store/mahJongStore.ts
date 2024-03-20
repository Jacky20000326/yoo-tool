import { create } from "zustand";
import { produce } from "immer";
import { CardType, DragState } from "../_lib/card/mahJong/Card";
import { createAllCard }from '../_lib/card/mahJong/Card'
interface CurrControlType {
    // state
    currControl: number;

    // action
    setCurrControl: (currState:number) => void;
}

interface PlayerListType {
    // state
    playerCardList: CardType[][];


    // action
    setPlayerCard:(currState: number,card:CardType)=>void
    removePlayerCardAtList:(currState: number,card:CardType)=>void
    setCardGragState:(currBoardIndex:number,card:CardType,dragState:DragState)=>void
}


interface CardPoolType {
     // state
    cardPoolList: CardType[];

     // action
    setCardPool:(card:CardType[])=>void
    addCardPool:(card:CardType)=>void
    removeCardAtCardList:(removeCard:CardType)=>void
    sortCardList:()=>void,
    setCardGragState:(card:CardType,dragState:DragState)=>void
    
}




export const useCurrControlPlayerList = create<CurrControlType>((set,get)=>({

    currControl: 0,
    setCurrControl: (currState: number)=>{
        set(produce((state)=>{
            state.currControl = currState
        }))
    } 
}))

export const usePlayerList = create<PlayerListType>((set,get)=>({


    playerCardList: [[],[],[],[]], // 依序为 [player1,player2,player3,player4]
    
    setPlayerCard: (playerIndex:number,card:CardType)=>{
        set(produce((state)=>{
            state.playerCardList[playerIndex].push(card)
        }))
    },

    removePlayerCardAtList:(playerIndex:number,card:CardType)=>{
        set(produce((state)=>{
            console.log(playerIndex)
            state.playerCardList[playerIndex] = state.playerCardList[playerIndex].filter((item:CardType) => item.id != card.id)
        }))
    },

    setCardGragState:(currBoardIndex:number,card:CardType,dragState:DragState)=>{
        let temp:CardType[] = []
        set(produce((state)=>{
            state.playerCardList[currBoardIndex].forEach((Card:CardType) => {
                if(Card.id == card.id){
                    Card.canDrag = dragState
                }
            })
        }))
    }

    
}))

export const useCardPool = create<CardPoolType>((set,get)=>({
    cardPoolList: createAllCard(),

    addCardPool: (card:CardType)=>{
        set(produce((state)=>{
            state.cardPoolList.push(card)
        }))
    },

    setCardPool: (cardList:CardType[])=>{
        set(produce((state)=>{
            state.cardPoolList = cardList;
        }))
    },

    removeCardAtCardList:  (removeCard:CardType)=>{
        set(produce((state)=>{
            state.cardPoolList = state.cardPoolList.filter((card: CardType) => card.id != removeCard.id)
        }))
    },

    sortCardList: ()=>{
        set(produce((state)=>{
            state.cardPoolList = state.cardPoolList.sort((pre:CardType, next:CardType) => pre.sort - next.sort);
        }))
    },

    setCardGragState:(card:CardType,dragState:DragState)=>{

        set(produce((state)=>{
            state.cardPoolList.forEach((Card:CardType) => {
                if(Card.id == card.id){
                    Card.canDrag = dragState
                }
            })
        }))
    }
}))


