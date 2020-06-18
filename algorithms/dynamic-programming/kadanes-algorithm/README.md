# Kadane's Algorithm and Its Proof - Max/Min Sum Subarray Problem
In this article, you will get the optimum solution to the maximum/minimum sum subarray problem: The Kadane's Algorithm. The problem at hand is simple. Given an array of integers, say `[-1, 1, 3, -2]`, find the subarrays with the maximum and minimum possible sums (for the given example: `max=[1, 3]`, `min=[-2]`). Kadane's Algorithm solves this problem with a nice `O(n)` time and `O(1)` space complexity. A variation of this problem is when you are trying to find the maximum/minimum sum subarray with at least `k` elements. Again, a slightly modified version of Kadane's Algo can be used in solving it. Finally, we will prove the correctness of Kadane's Algorithms.

When all integers in a given array are positive, you can use the much simpler Sliding Windows Technique. For arrays with negative numbers, you can modify it to be all positive numbers and then apply the sliding window technique, but that requires extra processing; hence it is not the optimum solution. I have a separate article discussing the sliding window technique in depth along with various sample questions, and you can find the link to it below.

Kadane's Algorithm uses optimal substructures to solve the max/min subarray sum problem. Each max/min subarray ending at each index is calculated using the max/min subarray ending at the previous index. You can say that this is an accumulation function with some additional rules. As a result of this, it is one of my favorite examples of Dynamic Programming. In the video, I will explain how Kadane's Algorithm is an optimal substructure problem using a basic animation.

In the video, you will find the solutions to the following questions, as well as their time and space complexities:
* Medium Difficulty: Kadane's Algorithm: Given an array of integers, find the subarray with the maximum/minimum possible sum.
* Medium Difficulty: Sliding Window on Kadane's Algorithm: Given an array of integers, find the subarray with the maximum/minimum possible sum with at least k elements.
* Hard: Prove Kadane's Algorithm: Prove the correctness of Kadane's Algorithm.

## Resources
You can find the video narration of this article on YouTube: [https://www.youtube.com/watch?v=4csAswCkXZM](https://www.youtube.com/watch?v=4csAswCkXZM){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/4csAswCkXZM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips and illustrations. If you want to read the comments or leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

* Solution code to examples are available on: [https://github.com/soygul/QuanticDev/tree/master/algorithms/dynamic-programming/kadanes-algorithm](https://github.com/soygul/QuanticDev/tree/master/algorithms/dynamic-programming/kadanes-algorithm){:target="_blank"}

* My Sliding Window Technique article: [Sliding Window Technique + 4 Questions](/algorithms/dynamic-programming/sliding-window){:target="_blank"}

## Question #1: Medium Difficulty: Given an array of integers, find the subarray with the maximum/minimum possible sum. 
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
* Time complexity: `~O(n^2)` (exponential time complexity)
* Space complexity: `~O(n^2)` (exponential space complexity)

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

## Video Solutions
If you want video solutions for the below questions, visit the YouTube link in the resources section. The video has a lot more in-depth info on solution techniques along with helpful visuals.
