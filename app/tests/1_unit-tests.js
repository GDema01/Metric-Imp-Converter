/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = "32.3kg"
      assert.equal(convertHandler.getNum(input), 32.3)
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = "4/2kg"
      assert.equal(convertHandler.getNum(input), 2)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = "4.2/2kg"
      assert.equal(convertHandler.getNum(input), 2.1)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = "4/2/2kg";
      assert.equal(convertHandler.getNum(input), 1)
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = "kg";
      assert.equal(convertHandler.getNum(input), 1)
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase())
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let input = 'gar'
      assert.equal(convertHandler.getUnit(input), false)
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      assert.equal(5, 5)//see above example for hint
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [1, 'gal'];
      var expected = 3.78541;
      assert.equal(convertHandler.convert(input[0],input[1]), expected);
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [3.78541, 'l'];
      var expected = 1;
      assert.equal(convertHandler.convert(input[0],input[1]), expected);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [1, 'mi'];
      var expected = 1.60934;
      assert.equal(convertHandler.convert(input[0],input[1]), expected);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [1.60934, 'km'];
      var expected = 1;
      assert.equal(convertHandler.convert(input[0],input[1]), expected);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [1, 'lbs'];
      var expected = 0.45359;
      assert.equal(convertHandler.convert(input[0],input[1]), expected);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [0.45359, 'kg'];
      var expected = 1;
      assert.equal(convertHandler.convert(input[0],input[1]), expected);
      done();
    });
    
  });

});