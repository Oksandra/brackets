module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '{', '[' , '|', '1', '3', '5', '7', '8'];
  const bracketsPair = {
    [')'] : '(',
    ['}'] : '{',
    [']'] : '[',
    ['|'] : '|',
    ['2'] : '1',
    ['4'] : '3',
    ['6'] : '5',
    ['7'] : '7',
    ['8'] : '8',
  };
    let stack = [];
    for(let i = 0; i < str.length; i++) {
    let activateSymbol = str[i];
    let topElement = stack[stack.length - 1];
      if(stack.length !== 0 && bracketsPair[activateSymbol] === topElement) {
        stack.pop();
      } else {
        stack.push(activateSymbol)
        }

        

}
  return stack.length === 0;
  
}

