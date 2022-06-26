import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CreditCardList } from "../components/credit-card-details/credit-card-list";
import { NewCardForm } from "../components/new-card-form/new-card-form";
import { CreditCard } from "../models/credit-card";

export interface IState {
    creditCards: CreditCard[]
}

export const CreditCardHome = () => {

    const [creditCards, setCreditCards] = useState<IState["creditCards"]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/credit-card/getAll")
        .then(item => {
            setCreditCards(item.data);
        })
        .catch(err => {
            toast.error(err?.response?.data?.errorMessage || "Something went wrong", {
                position: "top-center"
            });
        });
    }, []);

    return (
        <div className="credit-card-wrapper">
            <h1>Credit Card System</h1>
            <ToastContainer />
            <NewCardForm setCreditCards = { setCreditCards }/>
            <CreditCardList creditCards = { creditCards }/>
        </div>
    );
}