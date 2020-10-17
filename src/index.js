module.exports = function check(str, bracketsConfig) {
    const openingBrackets = bracketsConfig.map((value) => value[0]).join("");
    const closingBrackets = bracketsConfig.map((value) => value[1]).join("");
    let bracketsStack = [];

    for (let i = 0; i < str.length; i++) {
        const curBracket = str.charAt(i);
        
        if (closingBrackets.includes(curBracket)) {
            let closingBracketIndex = closingBrackets.indexOf(curBracket); 
            if (bracketsStack[bracketsStack.length - 1] == openingBrackets[closingBracketIndex]) {
                bracketsStack.pop();
            } else {
                bracketsStack.push(curBracket);
            }
        } else if (openingBrackets.includes(curBracket)) {
            bracketsStack.push(curBracket);
        }
    }

    return bracketsStack.length == 0;
};
