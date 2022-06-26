import React from "react";
import { CreditCard } from "../../models/credit-card";


export interface IProps {
    creditCards: CreditCard[]
}

export const CreditCardList: React.FC<IProps> = ({ creditCards }) => {

    const renderCardList = (): JSX.Element[] => {
        return creditCards.map(item => {
            return (
                <tr key={item.cardNumber}>
                    <td>{item.name}</td>
                    <td>{item.cardNumber?.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')}</td>
                    <td className={`${Number(item.balance) < 0 ? "negative-bal" : ""}`}>£{item.balance}</td>
                    <td>£{item.cardLimit}</td>
                </tr>
            );
        })
    } 

    if(!creditCards || creditCards.length === 0) {
        return (<div></div>);
    }

    return (
        <div>
            <h2>Existing Cards</h2>
            <table className="card-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card number</th>
                        <th>Balance</th>
                        <th>Limit</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCardList()}
                </tbody>
            </table>
        </div>
    );
}