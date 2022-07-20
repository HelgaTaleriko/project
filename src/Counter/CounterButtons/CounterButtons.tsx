import React from "react";
type IProps={
    addOne: () => void;
    minusOne: () => void;

}
export const CounterButtons = ({ addOne, minusOne}: IProps) => {
    return (
        <div>
            <button onClick={addOne} >
                Увеличить
            </button>
            <button onClick={minusOne}>Уменьшить</button>
        </div>
    );
};