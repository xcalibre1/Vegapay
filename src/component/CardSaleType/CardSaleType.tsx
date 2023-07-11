import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import "./CardSaleType.css";
import { issueNewcard, newCardSales } from "../../contants";
import { cardElement } from "../../global.type";
interface cardSaleProps {
    cards: Array<cardElement>;
    setCardType: (cardType: string) => void
}
function CardSaleType(props: cardSaleProps) {
    const { cards, setCardType } = props;
    const [cardArray, setCardsArray] = useState<Array<any>>([]);
    const onCardClickHandler = (cardIndex: number) => {
        cardArray[cardIndex].active = true;
        const newArray = cardArray.map((item, index) => {
            if (index === cardIndex) {
                return { ...item, active: true };
            }
            return { ...item, active: false };
        });
        setCardsArray(newArray);
        setCardType(cardArray[cardIndex].title)
    }

    useEffect(() => {
        setCardsArray(cards);
    }, [cards])
    return (
        <div className="cardCompWrapper">
            <Container maxWidth="xl" className="parentContainer">
                <div className="heading">
                    <span>{newCardSales}</span>
                    <span>{issueNewcard}</span>
                </div>
                <div className="cards">
                    {cardArray.map((element: cardElement, index: number) => {
                        return <div className={`typeBox ${element.active ? "filled" : ""}`} onClick={() => onCardClickHandler(index)}>{element.title}</div>
                    })}
                </div>
            </Container>
        </div>
    )

}
export default CardSaleType