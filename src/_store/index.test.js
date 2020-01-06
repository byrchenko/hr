import store, {initialState} from "./index";

describe('Store', () => {
    it('should return initial state', () => {
        const sample = store.getState();

        expect(sample).toEqual(initialState);
    });

});