export interface CardType {
    id:string,
    category:string,
    bg:string
}


export const Card = [{
    id: "1", category: 'w', bg: 'w1' 
},{
    id: "2", category: 'w', bg: 'w2' 
},{
    id: "3", category: 'w', bg: 'w3' 
},{
    id: "4", category: 'w', bg: 'w4' 
},{
    id: "5", category: 'w', bg: 'w5' 
},{
    id: "6", category: 'w', bg: 'w6' 
},{
    id: "7", category: 'w', bg: 'w7' 
},{
    id: "8", category: 'w', bg: 'w8' 
},{
    id: "9", category: 'w', bg: 'w9' 
},{
    id: "10", category: 't', bg: 't1' 
},{
    id: "11", category: 't', bg: 't2' 
},{
    id: "12", category: 't', bg: 't3' 
},{
    id: "13", category: 't', bg: 't4' 
},{
    id: "14", category: 't', bg: 't5' 
},{
    id: "15", category: 't', bg: 't6' 
},{
    id: "16", category: 't', bg: 't7' 
},{
    id: "17", category: 't', bg: 't8' 
},{
    id: "18", category: 't', bg: 't9' 
},{
    id: "19", category: 's', bg: 's1' 
},{
    id: "20", category: 's', bg: 's2' 
},{
    id: "21", category: 's', bg: 's3' 
},{
    id: "22", category: 's', bg: 's4' 
},{
    id: "23", category: 's', bg: 's5' 
},{
    id: "24", category: 's', bg: 's6' 
},{
    id: "25", category: 's', bg: 's7' 
},{
    id: "26", category: 's', bg: 's8' 
},{
    id: "27", category: 's', bg: 's9' 
},{
    id: "28", category: 'z', bg: 'z1' 
},{
    id: "29", category: 'z', bg: 'z2' 
},{
    id: "30", category: 'z', bg: 'z3' 
},{
    id: "31", category: 'z', bg: 'z4' 
},{
    id: "32", category: 'z', bg: 'z5' 
},{
    id: "33", category: 'z', bg: 'z6' 
},{
    id: "34", category: 'z', bg: 'z7' 
},{
    id: "35", category: 'h', bg: 'h1' 
},{
    id: "36", category: 'h', bg: 'h2' 
},{
    id: "37", category: 'h', bg: 'h3' 
},{
    id: "38", category: 'h', bg: 'h4' 
},{
    id: "39", category: 'h', bg: 'h5' 
},{
    id: "40", category: 'h', bg: 'h6' 
},{
    id: "41", category: 'h', bg: 'h7' 
},{
    id: "42", category: 'h', bg: 'h8' 
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