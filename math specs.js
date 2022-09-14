
//const assert = require('assert');

const expect = require('chai').expect
const {sum , allUpper , allLower}= require('../index');

 describe( 'SUM', () => {

     it('calc sum with positive numbers', () => {
        expect(sum(5, 7)).equal(12);
    });

    it('calc sum with negative numbers', () => {
        expect(sum(-5, -7)).equal( - 12)
    });
});


describe( 'ALL UPPER', () => {

    it('input all lower cases', () => {
        expect(allUpper(['a' , 'bc'])).eql(['A','BC']);
    });

    it('input all lower cases', () => {
        expect(allUpper(['A','BC'])).eql( ['A','BC' ])
    });
});


describe( 'ALL LOWER', () => {

    it('input all lower cases', () => {
        expect(allLower(['A','BC'])).eql(['a','bc']);
    });

    it('input all upper cases', () => {
        expect(allLower(['a','bc'])).eql( ['a','bc' ])
    });
});