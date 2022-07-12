let maxProfit = function(prices) {
    // 1. Решение со сдвигом границ
    // left = buy, right = sell
    let left = 0
    let right = 1
    let profit = 0

    for (; right < prices.length; ++right) {
        if (prices[left] < prices[right]) {
            profit = Math.max(prices[right] - prices[left], profit)
        } else {
            left = right
        }
    }
    return profit

    // 2. Решение с 1 циклом
    // let buy = prices[0]
    // prices[0] = 0
    // let profit = 0
    //
    // for (let i = 1; i < prices.length; i++) {
    //     if (buy > prices[i]) {
    //         buy = prices[i]
    //         prices[i] = 0
    //     } else {
    //         profit = Math.max(prices[i] - buy, profit)
    //     }
    // }
    // return profit

    // 3. Решение с 2 циклами
    // let profit = 0
    // for (let i = 0; i < prices.length; i++) {
    //     console.log("Цена покупки", prices[i])
    //     for (let j = i; j < prices.length; j++) {
    //         console.log("Цена продажи",prices[j])
    //         if (prices[j] - prices[i] > profit) {
    //             profit = prices[j] - prices[i]
    //             console.log("Прибыль", profit)
    //         }
    //     }
    // }
    // return profit
};

let price = [3,2,6,5,0,3]

console.log(maxProfit(price))