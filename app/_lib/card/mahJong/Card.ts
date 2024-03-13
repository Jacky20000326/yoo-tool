export interface CardType {
    id:string,
    category:string,
    bg:string,
    canDrag: number
}

export enum DragState {
    CANDRAG =  1,
    CANNOTDRAG = 0
} 


export const Card = [{
    id: "1", category: 'w', bg: 'w1',canDrag: 1 
},{
    id: "2", category: 'w', bg: 'w2',canDrag: 1 
},{
    id: "3", category: 'w', bg: 'w3',canDrag: 1 
},{
    id: "4", category: 'w', bg: 'w4',canDrag: 1 
},{
    id: "5", category: 'w', bg: 'w5',canDrag: 1 
},{
    id: "6", category: 'w', bg: 'w6',canDrag: 1 
},{
    id: "7", category: 'w', bg: 'w7',canDrag: 1 
},{
    id: "8", category: 'w', bg: 'w8',canDrag: 1 
},{
    id: "9", category: 'w', bg: 'w9',canDrag: 1 
},{
    id: "10", category: 't', bg: 't1',canDrag: 1 
},{
    id: "11", category: 't', bg: 't2',canDrag: 1 
},{
    id: "12", category: 't', bg: 't3',canDrag: 1 
},{
    id: "13", category: 't', bg: 't4',canDrag: 1 
},{
    id: "14", category: 't', bg: 't5',canDrag: 1 
},{
    id: "15", category: 't', bg: 't6',canDrag: 1 
},{
    id: "16", category: 't', bg: 't7',canDrag: 1 
},{
    id: "17", category: 't', bg: 't8',canDrag: 1 
},{
    id: "18", category: 't', bg: 't9',canDrag: 1 
},{
    id: "19", category: 's', bg: 's1',canDrag: 1 
},{
    id: "20", category: 's', bg: 's2',canDrag: 1 
},{
    id: "21", category: 's', bg: 's3',canDrag: 1 
},{
    id: "22", category: 's', bg: 's4',canDrag: 1 
},{
    id: "23", category: 's', bg: 's5',canDrag: 1 
},{
    id: "24", category: 's', bg: 's6',canDrag: 1 
},{
    id: "25", category: 's', bg: 's7',canDrag: 1 
},{
    id: "26", category: 's', bg: 's8',canDrag: 1 
},{
    id: "27", category: 's', bg: 's9',canDrag: 1 
},{
    id: "28", category: 'z', bg: 'z1',canDrag: 1 
},{
    id: "29", category: 'z', bg: 'z2',canDrag: 1 
},{
    id: "30", category: 'z', bg: 'z3',canDrag: 1 
},{
    id: "31", category: 'z', bg: 'z4',canDrag: 1 
},{
    id: "32", category: 'z', bg: 'z5',canDrag: 1 
},{
    id: "33", category: 'z', bg: 'z6',canDrag: 1 
},{
    id: "34", category: 'z', bg: 'z7',canDrag: 1 
},{
    id: "35", category: 'h', bg: 'h1',canDrag: 1 
},{
    id: "36", category: 'h', bg: 'h2',canDrag: 1 
},{
    id: "37", category: 'h', bg: 'h3',canDrag: 1 
},{
    id: "38", category: 'h', bg: 'h4',canDrag: 1 
},{
    id: "39", category: 'h', bg: 'h5',canDrag: 1 
},{
    id: "40", category: 'h', bg: 'h6',canDrag: 1 
},{
    id: "41", category: 'h', bg: 'h7',canDrag: 1 
},{
    id: "42", category: 'h', bg: 'h8',canDrag: 1 
}]

export const createAllCard = ():CardType[]=>{
    let newCardArr:CardType[] = []
    Card.forEach(card => {
        if(card.category == 's' || card.category == "w" || card.category == 't' || card.category == 'z'){
            for(let i = 0;i<4;i++){
                card = {...card,id: card.id +"_"+i}
                newCardArr.push(card)
            }
        }else{
            newCardArr.push(card)
        }
    })
    return newCardArr
}

export const cardDragState = (card:CardType,DragState:DragState):void=>{
    card.canDrag = DragState
}