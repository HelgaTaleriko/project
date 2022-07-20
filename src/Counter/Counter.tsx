import React, {useState} from "react";
import {CounterButtons} from "./CounterButtons";
import {CounterDisplay} from "./CounterDisplay";

type IProps={
    initial?: number;
    step?: number;

}
export const Counter : React.FC<IProps> = (props) => {
    const { initial = 0, step = 1 } = props;
    const [counter, setCounter] = useState(initial);
    const addOne = () => {
       setCounter(counter + step);
    };
    const minusOne = () => {
        setCounter(counter - step);
    };
    return (
        <div>
            <CounterDisplay value={counter} />
            <CounterButtons addOne={addOne} minusOne={minusOne} />
        </div>
    );
};
