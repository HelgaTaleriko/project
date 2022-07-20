import React from "react";

export const CounterDisplay = (props: { value: any; }) => {
    const {value}=props

    return (
        <h1> Счетчик {value} </h1>
    )


}
