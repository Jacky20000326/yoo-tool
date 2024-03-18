export interface CardType {
    id:string,
    category:string,
    bg:string,
    canDrag: number,
    value:string
}

export enum DragState {
    CANDRAG =  1,
    CANNOTDRAG = 0
} 


export const Card = [{
    id: "1", category: 'w', bg: 'w1',canDrag: 1 , value: '01'
},{
    id: "2", category: 'w', bg: 'w2',canDrag: 1 , value: '02'
},{
    id: "3", category: 'w', bg: 'w3',canDrag: 1 , value: '03'
},{
    id: "4", category: 'w', bg: 'w4',canDrag: 1 , value: '04'
},{
    id: "5", category: 'w', bg: 'w5',canDrag: 1 , value: '05'
},{
    id: "6", category: 'w', bg: 'w6',canDrag: 1 , value: '06'
},{
    id: "7", category: 'w', bg: 'w7',canDrag: 1 , value: '07'
},{
    id: "8", category: 'w', bg: 'w8',canDrag: 1 , value: '08'
},{
    id: "9", category: 'w', bg: 'w9',canDrag: 1 , value: '09'
},{
    id: "10", category: 't', bg: 't1',canDrag: 1  , value: '21'
},{
    id: "11", category: 't', bg: 't2',canDrag: 1  , value: '22'
},{
    id: "12", category: 't', bg: 't3',canDrag: 1  , value: '23'
},{
    id: "13", category: 't', bg: 't4',canDrag: 1  , value: '24'
},{
    id: "14", category: 't', bg: 't5',canDrag: 1  , value: '25'
},{
    id: "15", category: 't', bg: 't6',canDrag: 1  , value: '26'
},{
    id: "16", category: 't', bg: 't7',canDrag: 1  , value: '27'
},{
    id: "17", category: 't', bg: 't8',canDrag: 1  , value: '28'
},{
    id: "18", category: 't', bg: 't9',canDrag: 1 , value: '29'
},{
    id: "19", category: 's', bg: 's1',canDrag: 1 , value: '11'
},{
    id: "20", category: 's', bg: 's2',canDrag: 1 , value: '12'
},{
    id: "21", category: 's', bg: 's3',canDrag: 1 , value: '13'
},{
    id: "22", category: 's', bg: 's4',canDrag: 1 , value: '14'
},{
    id: "23", category: 's', bg: 's5',canDrag: 1 , value: '15'
},{
    id: "24", category: 's', bg: 's6',canDrag: 1 , value: '16'
},{
    id: "25", category: 's', bg: 's7',canDrag: 1 , value: '17'
},{
    id: "26", category: 's', bg: 's8',canDrag: 1 , value: '18'
},{
    id: "27", category: 's', bg: 's9',canDrag: 1 , value: '19'
},{
    id: "28", category: 'z', bg: 'z1',canDrag: 1 , value: '31'
},{
    id: "29", category: 'z', bg: 'z2',canDrag: 1 , value: '32'
},{
    id: "30", category: 'z', bg: 'z3',canDrag: 1 , value: '33'
},{
    id: "31", category: 'z', bg: 'z4',canDrag: 1 , value: '34'
},{
    id: "32", category: 'z', bg: 'z5',canDrag: 1 , value: '35'
},{
    id: "33", category: 'z', bg: 'z6',canDrag: 1 , value: '36'
},{
    id: "34", category: 'z', bg: 'z7',canDrag: 1 , value: '37'
},{
    id: "35", category: 'h', bg: 'h1',canDrag: 1 , value: '42'
},{
    id: "36", category: 'h', bg: 'h2',canDrag: 1 , value: '43'
},{
    id: "37", category: 'h', bg: 'h3',canDrag: 1 , value: '44'
},{
    id: "38", category: 'h', bg: 'h4',canDrag: 1 , value: '45'
},{
    id: "39", category: 'h', bg: 'h5',canDrag: 1 , value: '46'
},{
    id: "40", category: 'h', bg: 'h6',canDrag: 1 , value: '47'
},{
    id: "41", category: 'h', bg: 'h7',canDrag: 1 , value: '48'
},{
    id: "42", category: 'h', bg: 'h8',canDrag: 1 , value: '49'
}
// ,{
//     id: "42", category: 'h', bg: 'h8',canDrag: 1 , value: '49'
// }
]

export const createAllCard = ():CardType[]=>{
    let newCardArr:CardType[] = []
    Card.forEach(card => {
        if(card.category == 's' || card.category == "w" || card.category == 't' || card.category == 'z'){
            for(let i = 0;i<4;i++){
                card = {...card,id: card.id +"_"+i}
                newCardArr.push(card)
            }
        }else if(card.category == 'h'){
            // for(let i = 0;i<2;i++){
            //     card = {...card,id: card.id +"_"+i}
            //     newCardArr.push(card)
            // }
            newCardArr.push(card)
        }else{
            newCardArr.push(card)
        }
    })
    return newCardArr
}

export const cardDragState = (card:CardType,DragState:DragState):void=>{
    card.canDrag = DragState
}