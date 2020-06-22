# Kadane's Algorithm and Its Proof - Max/Min Sum Subarray Problem
In this article, you will get the optimum solution to the maximum/minimum sum subarray problem: The Kadane's Algorithm. The problem at hand is simple. Given an array of integers, say `[-1, 1, 3, -2]`, find the subarrays with the maximum and minimum possible sums (for the given example: `max=[1, 3]`, `min=[-2]`). Kadane's Algorithm solves this problem with a nice `O(n)` time and `O(1)` space complexity. A variation of this problem is when you are trying to find the maximum/minimum sum subarray with at least `k` elements. Again, a slightly modified version of Kadane's Algo can be used in solving it. Finally, we will prove the correctness of Kadane's Algorithms.

In the article, you will find the solutions to the following questions, as well as their time and space complexities:
* Medium Difficulty: Kadane's Algorithm: Given an array of integers, find the subarray with the maximum/minimum possible sum.
* Medium Difficulty: Sliding Window on Kadane's Algorithm: Given an array of integers, find the subarray with the maximum/minimum possible sum with at least k elements.
* Hard: Prove Kadane's Algorithm: Prove the correctness of Kadane's Algorithm.

## Resources
You can find the video narration of this article on YouTube: [https://www.youtube.com/watch?v=4csAswCkXZM](https://www.youtube.com/watch?v=4csAswCkXZM){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/4csAswCkXZM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips and illustrations. If you want to read the comments or leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

* Solution code to examples are available on: [https://github.com/soygul/QuanticDev/tree/master/algorithms/dynamic-programming/kadanes-algorithm](https://github.com/soygul/QuanticDev/tree/master/algorithms/dynamic-programming/kadanes-algorithm){:target="_blank"}

* My Sliding Window Technique article: [Sliding Window Technique + 4 Questions](/algorithms/dynamic-programming/sliding-window){:target="_blank"}

## Overview
When all integers in a given array are positive, you can use the much simpler Sliding Windows Technique. For arrays with negative numbers, you can modify it to be all positive numbers and then apply the sliding window technique, but that requires extra processing; hence it is not the optimum solution. I have a separate article discussing the sliding window technique in depth along with various sample questions, and you can find the link to it above.

Kadane's Algorithm uses optimal substructures to solve the max/min subarray sum problem. Each max/min subarray ending at each index is calculated using the max/min subarray ending at the previous index. You can say that this is an accumulation function with some additional rules. As a result of this, it is one of my favorite examples of Dynamic Programming. In the article, I will explain how Kadane's Algorithm is an optimal substructure problem using a basic animation.

## Question #1: Medium Difficulty: Given an array of integers, find the subarray with the maximum/minimum possible sum
Example Input: `[1, 2, -4, 3, 4, -2]`

Requirements Analysis:
* Analyze the requirements even in simple questions, they might not be so simple!
* Input size could be anything so we should limit memory usage.
* We should be able to handle negative numbers.

Problem Analysis:
* Input size is unlimited, so memory can blow up if we are not careful of what we keep in memory.
* Do not pre-calculate and store all possible variations beforehand (brute force approach).
* Do not use recursion. Call stack will overflow.
* Think of corner cases like empty array, all negative numbers, all zeroes, etc.

Approach #1: Brute Force
* Calculate all possible subarray sums and store them in a separate array.
* Iterate over the sums array and return the maximum or minimum sum.
* Time complexity: `~O(n^2)` (quadratic time complexity)
* Space complexity: `~O(n^2)` (quadratic space complexity)

Approach #2: Kadane's Algorithm
* Start summing the elements starting with the first element. Record the max sum as 0.
* If current sum is greater than the max sum, assign it to the max sum.
* If current sum is less than 0, restart summing from the next element.
* Time complexity: `O(n)` (linear time complexity)
* Space complexity: `O(1)` (constant space complexity)
* Inverse the "less than / greater than" checks to find the minimum subarray sum.
* You can find the code for this solution at: [https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/kadanes-algorithm/max-min-sum-subarray.js](https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/kadanes-algorithm/max-min-sum-subarray.js){:target="_blank"}
* You can also watch me solving this problem in the video in the resources section.

## How Does It Work?
<video width="790" height="300" controls><source src="media/kadanes-algorithm.mp4" type="video/mp4"></video>

Rules:
* Maximum subarray sum at every index =  maximum subarray sum at previous index + element value at index
* If max sum at an index is < 0, set sum at that index to 0.
* `MaxSum(index) = Max(MaxSum(index - 1) + arr[index], 0)`

## Tips!
* You can use a modified version of Sliding Windows Technique instead of Kadane's Algorithm. It is simpler but not as efficient. If you are interested, I have the link to my Sliding Window Technique article in the resources section above.
* Kadane's Algorithm is just a specialized accumulation algorithm. You will frequently see it and similar accumulation algorithms in programming interviews.

## Question #2: Medium Difficulty: Given an array of integers, find the subarray with the maximum/minimum possible sum with at least k elements
Example Input `(k=3)`: `[1, 2, -4, 3, 4, -2]`

Max Sum at Each Index: `[1, 3,  0,  3, 7,  5]`

Solution: Sliding Window on Kadane's Algorithm
* Apply Kadane's Algorithm to the array and store maximum sum up to every index in another array.
* Use a sliding sum window of k elements on given array. Check if max sum at previous index makes the sliding window sum bigger.
* Time Complexity: `O(2n)`
* Space Complexity: `O(n)` (can be made `O(1)`)

## Proof of Correctness of Kadane's Algorithm
* Define: `MaxSum(i) = Max(Sum(0->i), Sum(1->i), Sum(2->i), ..., Sum(i->i))` where `Sum(x->i)` is the sum of all elements from index x to i. We established this in the brute-force solution.
* Note: `Sum(x->i+1) = Sum(x->i) + El(i)` where `El(i)` is the element value at index `i`.
* As a Result: `MaxSum(i+1) = Max(Sum(0->i) + El(i), Sum(1->i) + El(i), ..., Sum(i->i) + El(i), El(i))= Max(Max(Sum(0->i) + El(i), Sum(1->i) + El(i), ..., Sum(i->i) + El(i)), El(i))`
* Note: `max(a+y, b+y, c+y)=max(a, b, c) + y`
* As a Result: `MaxSum(i+1) = Max(Max(Sum(0->i), Sum(1->i), Sum(2->i), ..., Sum(i->i)) + El(i), El(i) )= Max(MaxSum(i) + El(i), El(i))`
* Note: We used `MaxSum(i+1) = Max(MaxSum(i) + El(i), 0)` in our problems before, which is also valid.
* You can also use `induction` or `contradiction` to prove Kadane's Algorithm.

## More Tips!
* In interviews, you can always get questions combining multiple algorithms and techniques.
* You can be asked to prove the correctness of an algorithm in a more senior interview.
* You can check out rest of my algorithms articles on the home page.

## Video Solutions
If you want video solutions for the above questions, visit the YouTube link in the resources section. The video has a lot more in-depth info on solution techniques along with helpful visuals.
