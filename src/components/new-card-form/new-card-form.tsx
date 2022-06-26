import React, { useState } from "react";
import { CreditCard } from "../../models/credit-card";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IState as Props } from "../../pages/credit-card";

interface IProps {
    setCreditCards: React.Dispatch<React.SetStateAction<Props["creditCards"]>>
}

export const NewCardForm: React.FC<IProps> = ({ setCreditCards }) => {

    const [details, setDetails] = useState<CreditCard>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    };

    const handleClick = () => {
        if (!details || !details?.name || !details?.cardNumber || !details?.cardLimit) {
            toast.error('Please enter all the details', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        } else {
            axios.post("http://localhost:8080/credit-card/add", details)
                .then(item => {
                    toast.success(`Card number ${item.data["cardNumber"]} has been saved successfully`, {
                        position: "top-center"
                    });
                    setDetails({});
                    axios.get("http://localhost:8080/credit-card/getAll").then(item => {
                        setCreditCards(item.data);
                    })
                    .catch(err => {
                        toast.error(err?.response?.data?.errorMessage || "Something went wrong", {
                            position: "top-center"
                        });
                    })
            })
            .catch(err => {
                toast.error(err?.response?.data?.errorMessage || "Something went wrong", {
                    position: "top-center"
                });
            })
        }
    }

    return (
        <div className="new-card-form">
            <h2>Add</h2>
            <ToastContainer />
            <p className="form-label">Name</p>
            <input 
                type="text"
                onChange={handleChange}
                className="add-input"
                name="name"
                value={details?.name || ''}
                placeholder="Name"
            />
            <p className="form-label">Card number</p>
            <input 
                type="number"
                onChange={handleChange}
                className="add-input"
                name="cardNumber"
                value={details?.cardNumber || ''}
                placeholder="Card number"
            />
            <p className="form-label">Limit</p>
            <input 
                type="number"
                onChange={handleChange}
                className="add-input"
                name="cardLimit"
                value={details?.cardLimit || ''}
                placeholder="Limit"
            />
            <button onClick={ handleClick } className="add-btn">Add</button>
        </div>
    );
}