
import { CardType } from "./Card";

export const playerPaiCardFormat = (player: CardType[]):string=>{
	let playerPaiCardArr = player.map(card => card.value)
	let playerPaiCardToString = playerPaiCardArr.join(' ')
	return playerPaiCardToString
}


export const PaiCardtemplateFormat = (player1:string,player2:string,player3:string,player4:string,allCard: CardType[],banker:number)=>{
	let halfNum = allCard.length / 2 ;

	console.log(allCard)
	
	let allCardInFirstArr = allCard.slice(0, halfNum).reverse();
	let allCardInSecondArr = allCard.slice(halfNum, allCard.length).reverse();
	let allCardInFirstArrToString = playerPaiCardFormat(allCardInFirstArr)
	let allCardInSecondArrToString = playerPaiCardFormat(allCardInSecondArr)

	

	return (
		`
			<root>
				<open>1</open>
				<goodcard>1</goodcard>
				<seed>0</seed>
				<srand>1</srand>
				<banker>${banker - 1}</banker>
				<table player1="0" player2="0">
					<CardPool2>${allCardInSecondArrToString}</CardPool2>
					<CardPool1>${allCardInFirstArrToString}</CardPool1>
					<player3>${player4}</player3>
					<player0>${player1}</player0> 
					<player1>${player2}</player1>
					<player2>${player3}</player2>
				</table>
			</root>
		`
	)
}

export const paiCard = (player1CardList: CardType[],player2CardList: CardType[],player3CardList: CardType[],player4CardList: CardType[],allCardList: CardType[],banker:number) => {
	let player1paiCard = playerPaiCardFormat(player1CardList)
	let player2paiCard = playerPaiCardFormat(player2CardList)
	let player3paiCard = playerPaiCardFormat(player3CardList)
	let player4paiCard = playerPaiCardFormat(player4CardList)
	// let allpaiCard = playerPaiCardFormat(allCardList)
    return PaiCardtemplateFormat(player1paiCard,player2paiCard,player3paiCard,player4paiCard,allCardList,banker)
};

