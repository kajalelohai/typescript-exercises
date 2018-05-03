import numberMultiple from './numbers-multiple';

describe ('numberMultiple', () => {

    test ('returns the multiple of 30 in array', ( ) => {
        const result = [5,6];

        expect((numberMultiple(30,[2,3,4,5,7,6,4]))).toEqual(result);
    });

    test ('returns the multiple of 60 in array', ( ) => {
        const result = [10,6];

        expect((numberMultiple(60,[2,3,10,5,7,6,4]))).toEqual(result);
    });

});