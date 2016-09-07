var main = require('../index');
var assert = require('assert');

describe('testing Stack', function () {
    it('we can push to an empty stack', function () {
        var st = main.StackClassConstructor();
        st.push(3);
        assert.equal(st.x[0], 3);
    });

    it('we get undefined when we pop from an empty stack', function () {
        
        var st = main.StackClassConstructor
        var actual = st.pop();
        assert.equal(actual, undefined); 

});
});