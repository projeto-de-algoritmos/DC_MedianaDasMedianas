function partition(arr: number[], pivot: number): [number[], number[]] {
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [left, right];
}

export default function getMedianOfMedians(arr: number[], k: number): number {
  if (arr.length <= 5) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
  }

  let medians: number[] = [];
  for (let i = 0; i < arr.length; i += 5) {
    let subArr = arr.slice(i, Math.min(i + 5, arr.length));
    subArr.sort((a, b) => a - b);
    medians.push(subArr[Math.floor(subArr.length / 2)]);
  }

  let pivot = getMedianOfMedians(medians, Math.ceil(medians.length / 2));
  let [left, right] = partition(arr, pivot);

  if (k <= left.length) {
    return getMedianOfMedians(left, k);
  } else if (k > arr.length - right.length) {
    return getMedianOfMedians(right, k - (arr.length - right.length));
  } else {
    return pivot;
  }
}
