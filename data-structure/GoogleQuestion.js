// 1. Try and go through the 15 steps on your own and answer the same question as in the Google Interview in your own language by yourself or in front of a friend (or a fellow student on Discord). Share your code with everyone in our private Discord community in the #interview-questions channel.

// 2. Rewatch the Google interview video and notice how you understand the steps a lot better now. Don't worry though, by the end of this course, I am going to show you this video one last time and you will see how it will all make sense and become second nature to you even more!

// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
