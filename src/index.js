module.exports = function check(str, bracketsConfig) {
    const openingBrackets = bracketsConfig.map((value) => value[0]).join("");
    const closingBrackets = bracketsConfig.map((value) => value[1]).join("");
    let bracketsStack = [];

    for (let i = 0; i < str.length; i++) {
        const nextBracket = str.charAt(i);
        
        if (closingBrackets.includes(nextBracket)) {
            let closingBracketIndex = closingBrackets.indexOf(nextBracket); 
            if (bracketsStack[bracketsStack.length - 1] == openingBrackets[closingBracketIndex]) {
                bracketsStack.pop();
                continue;
            } else {
                bracketsStack.push(nextBracket);
                continue;
            }
        }

        if (openingBrackets.includes(nextBracket)) {
            bracketsStack.push(nextBracket);
        }
    }

    return bracketsStack.length == 0;
};
