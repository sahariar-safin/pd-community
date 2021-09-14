import { getCounter } from "../../api/counter";
import { increment } from "../reducers/counterSlice";

export const getCounterAndSet = () => async (dispatch) => {
    try {
        const { data } = await getCounter();
        dispatch(increment(data));
    } catch (error) {
        console.error(error.message);
    }
}