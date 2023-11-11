const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const result = []

const extractBiggest = () => {
    let first = data.lists[0][1]
    let second = data.lists[1][1]
    let third = data.lists[2][1]

    let largestValue;
    let largestArray;

    if (first[first.length - 1] >= (second[second.length - 1] || 0) && first[first.length - 1] >= (third[third.length - 1] || 0)) {
        largestArray = first;
    } else if (second[second.length - 1] >= (third[third.length - 1] || 0)) {
        largestArray = second;
    } else {
        largestArray = third;
    }

    largestValue = largestArray.pop();
    return largestValue;
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)