// Function to perform merge sort on an array
function mergeSort(arr) {
    // Base case: if the array has 1 or 0 elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Calculate the middle index of the array
    const mid = (arr.length / 2);

    // Divide the array into two halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively apply mergeSort to both halves
    return merge(mergeSort(left), mergeSort(right));
   
}

// Function to merge two sorted arrays
function merge(left, right) {
    let result = []; // Array to store the merged result
    let leftIndex = 0; // Index for the left array
    let rightIndex = 0; // Index for the right array

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            // If the left element is smaller, add it to the result
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            // If the right element is smaller, add it to the result
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Copy the remaining elements from the left and right arrays (if any)
    result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    // Return the merged and sorted array
    return result;
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];

// Call mergeSort on the unsorted array
const sortedArray = mergeSort(unsortedArray);

// Print the sorted array to the console
console.log("Sorted array:", sortedArray);
