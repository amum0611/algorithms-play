const input = [5, 4, 1, 8, 7, 2, 6, 3, -1];

console.log(`Input: ${input}`);

const merge = (left, right) => {

    let output = [];
    let leftIndex, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            output.push(left[leftIndex]);
            leftIndex++;
        } else {
            output.push(right[rightIndex]);
            rightIndex++; 
        }
    }

    return output.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (input) => {
    if (input.length <= 1) {
        return input;
    }
    let middle = Math.floor(input.length / 2);
 
    let leftArray = input.slice(0, middle);
    let rightArray = input.slice(middle);

    return merge(mergeSort(leftArray), mergeSort(rightArray))
};

let output = mergeSort(input);

console.log(`Output: ${output}`);
