import pyramid from './pyramid-right';

describe('pyramid', () => {
    test('return pyramid to the right when input is 3', () =>{
        const stars = '* \n* * \n* * * \n* * \n* \n';

        expect(pyramid(3)).toBe(stars);
    });
})