import { Card } from "./Card";

export const extractContentFromTags = (input:any) => {

    

    const regex = /<([^>]+)>([^<]+)<\/\1>/g;
 
    const matches = input.matchAll(regex);

    const result: Record<string, string> = {};
    for (const match of matches) {
        const tagName = match[1];
        const content = match[2];
        result[tagName] = content;
    }


    return result;
    
}


export const getCardDataAndTranArr = (transData:any)=>{

    let { CardPool2,CardPool1,player0,player1,player2,player3 } = transData


    if( !CardPool2 || !CardPool1 || !player0 || !player1|| !player2 || !player3 ){
        return
    }




    let cardPool = [...CardPool2.split(" "),...CardPool1.split(" ")]
    let player0CardList = player0.split(" ")
    let player1CardList = player1.split(" ")
    let player2CardList = player2.split(" ")
    let player3CardList = player3.split(" ")

    

    // 若玩家配牌未2达13张则配牌失败
    let cardPoolListLen = cardPool.length
    let player0CardListLen = player0CardList.length
    let player1CardListLen = player1CardList.length
    let player2CardListLen = player2CardList.length
    let player3CardListLen = player3CardList.length

  

    let allCardLen = cardPoolListLen + player0CardListLen + player1CardListLen + player2CardListLen + player3CardListLen

    // 若所有牌总数未达144张则配牌失败

    if(player0CardListLen != 13 || player1CardListLen != 13 || player2CardListLen != 13 || player3CardListLen != 13 ){
        // return "玩家配牌未满13张"
        return
    }

    if(allCardLen != 144  ){
        // return "总配牌数未达144张"
        return
    }

    // 将牌配对应Card资料

    const findCardsByValues = (CardList:number[],isCanDrag:number) => {
        let resultArr = [];
        for(let i = 0; i<CardList.length; i++){
            for(let j = 0; j<Card.length; j++){
                if(String(CardList[i]) == Card[j].value){
                    resultArr.push({
                        id:  Card[j].id + i + j,
                        bg:  Card[j].bg,
                        canDrag:  isCanDrag,
                        value:  Card[j].value,
                        sort:  Card[j].sort,
                    })
                }
            }
        }

        return resultArr
    }

    

    let cardPoolResultList = findCardsByValues(cardPool,1).reverse()
    let player0ResultList = findCardsByValues(player0CardList,0)
    let player1ResultList = findCardsByValues(player1CardList,0)
    let player2ResultList = findCardsByValues(player2CardList,0)
    let player3ResultList = findCardsByValues(player3CardList,0)

    return {cardPoolResultList,player0ResultList,player1ResultList,player2ResultList,player3ResultList}

}