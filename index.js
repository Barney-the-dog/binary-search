// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch (n, arr, start, end){
    let mid = Math.floor((start + end)/2)
    if (start > end) {
        return -1;
      } 
    if (n==arr[mid]) {
        return mid
    }
    if (n < arr[mid]){
        return binarySearch (n, arr, start, mid-1);
    } 
    if (n > arr[mid]){
        return binarySearch(n, arr, mid+1, end )
   }
}


// function binarySearch (n, arr){
//     let start = 0
//     let end = arr.length - 1
//    while (start <= end) {
//     let mid = Math.floor((start + end)/2)
//     if (n==arr[mid]) {
//       return mid
//     } else if (n < arr[mid]){
//       end = mid - 1
//     } else if (n > arr[mid]){
//       start = mid + 1
//     } 
//    }
//     return -1
//   }
  console.log(binarySearch(7, [1, 2, 3, 4, 5, 6, 7, 8]))

module.exports = binarySearch