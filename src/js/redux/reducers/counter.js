import { ADD } from '../actions/counter.js';

const initialState = {
    count: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
    case ADD:
        return { count: state.count + 1 };
    }
    return state;
}
