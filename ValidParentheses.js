let isBracePair = function (leftBrace, rightBrace) {
    return leftBrace === "(" && rightBrace === ")" ||
           leftBrace === "{" && rightBrace === "}" ||
           leftBrace === "[" && rightBrace === "]";
}

let isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        // console.log("Сейчас итерация " + i)
        stack.push(s[i]);
        // console.log("Добавили элемент " + s[i])
        // console.log("Текущее состояние стека: ", stack)

        if (isBracePair(stack[stack.length-2], stack[stack.length-1])) {
            stack.pop();
            stack.pop();
            // console.log("Нашли пару. Удаляем два верхних элемента из стека. Текущее состояние стека: ", stack);
        }


        // if (stack[stack.length-1] === ")" && stack[stack.length-2] === "(" ||
        //     stack[stack.length-1] === "}" && stack[stack.length-2] === "{" ||
        //     stack[stack.length-1] === "]" && stack[stack.length-2] === "[") {
        //     stack.pop();
        //     stack.pop();
        //     console.log("Нашли пару. Удаляем два верхних элемента из стека. Текущее состояние стека: ", stack);
        // }

    }
    // Вернуть результат выражения
    return stack.length === 0;
};

s = "";

console.log(isValid(s))