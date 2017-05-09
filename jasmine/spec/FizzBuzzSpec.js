describe('FizzBuzz', function() {

var fizzbuzz;
beforeEach(function(){
    fizzbuzz = new FizzBuzz();
});

describe('knows when a number is', function() {

  it('divisible by 3', function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

describe ('knows when a number is divisible by 5', function(){

  it('is divisible by 5', function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });

});
describe ('knows when a number is divisible by 15', function (){
  it('is divisible by 15', function(){
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

describe('when playing it calls Fizz, Buzz or Fizzbuzz', function(){
  it('3 returns Fizz', function(){
    expect(fizzbuzz.says(3)).toEqual("Fizz");
  });
  it('5 returns Buzz', function(){
    expect(fizzbuzz.says(5)).toEqual("Buzz");
  });
  it('15 returns FizzBuzz', function(){
    expect(fizzbuzz.says(15)).toEqual("FizzBuzz")
  });
});






});
