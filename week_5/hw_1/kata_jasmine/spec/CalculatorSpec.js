

describe('Calculator', function() {
  var calculator;
  var add;


  beforeEach(function() {
    calculator = new Calculator();
    add = calculator.add;
  });

  it('should be a function', function() {
	expect(typeof add).toEqual('function');
  });

  it('should be a function with one parameter', function() {
	expect(add.length).toEqual(1);
  });

  it('should return summ of 2 numbers or 0 for empty string', function() {
	expect(add('1, 2')).toEqual(3);
	expect(add('')).toEqual(0);
  });

  it('should return summ any amount of numbers', function() {
	expect(add('1,2,3')).toEqual(6);
	expect(add('10,50,40')).toEqual(100);
  });

  it('should handle new lines between numbers', function() {
	expect(add('1\n2,3')).toEqual(6);
	expect(add('1,2,3\n4')).toEqual(10);
  });

  it('should support different delimiters', function() {
	expect(add('//;\n1;2')).toEqual(3);
  });

  it('should throw error if neganive numbers used with message containing this numbers', function() {
	expect(() =>add('5, 8, -3, 9, -42')).toThrowError(TypeError, 'negatives are not allowed:-3,-42')
  });

  it('should ignore numbers bigger than 1000', function() {
	expect(add('1, 999, 1000')).toEqual(1000)
  });

  it('should handle delimiters of any length', function() {
	expect(add('//[;;;]\n1;;;2;;;3')).toEqual(6)
  });

  it('should handle different delimiters at time', function() {
	expect(add('//[*][%]\n1*2%3')).toEqual(6)
  });

  it('should handle different delimiters of different length at time', function() {
	expect(add('//[***][%%]\n1***2%%7')).toEqual(10)
  });

});
