import {
    increment,
    decrement,

} from "./counterSlice";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();



    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => decrement(decrement())}>-</button>

            </div>

        </section>
    )
}
export default Counter;