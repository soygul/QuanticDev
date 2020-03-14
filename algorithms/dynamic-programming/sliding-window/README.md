# Sliding Window Technique (Subarrays)
Sliding Window Technique is a method for finding subarrays in an array that satisfy given conditions. We do this via maintaining a subset of items as our window, and resize and move that window within the larger list until we find a solution. Sliding Window Technique is a subset of Dynamic Programming, and it frequently appears in algorithm interviews. In this video, you will learn how Sliding Window Technique works (with animations), tips and tricks of using it, along with its applications on some sample questions.

In the video, you will find the solutions to the following questions, as well as their time and space complexities:

* **Difficulty 1**: Statically Sized Sliding Window: Given an array of integers, find maximum/minimum sum subarray of the required size.
* **Difficulty 2**: Dynamically Sized Sliding Window: Given an array of positive integers, find the subarrays that add up to a given number.
  *	**Variation (Difficulty 2.5)**: Same question but for an array with all integers (positive, 0, negative). The optimal solution is Kadane's Algorithm, but Sliding Window can still be applied with modifications (not recommended though).
* **Difficulty 2**: Flipping/Swapping: Given an array of 0's and 1's, find the maximum sequence of continuous 1's that can be formed by flipping at-most k 0's to 1's.
* **Difficulty 3**: Strings: Given a string and n characters, find the shortest substring that contains all the desired characters.

Table of contents:
* [Resources](#resources)

## Resources
You can find the video narration of this article on YouTube: [https://www.youtube.com/watch?v=XXXXXXXXXX](https://www.youtube.com/watch?v=XXXXXXXXXX){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/XXXXXXXXXX" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips and illustrations. If you want to read the comments or leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

Solution code to examples are available on: [https://github.com/soygul/QuanticDev/tree/master/algorithms/dynamic-programming/sliding-window](https://github.com/soygul/QuanticDev/tree/master/algorithms/dynamic-programming/sliding-window){:target="_blank"}

My article describing Test-Driven Development (TDD) and other software patterns: [Software Design Patterns, Principles, and Best Practices](/articles/software-design-patterns){:target="_blank"}

## Intro
Hi, I am QuanticDev, and this is the Sliding Window Technique of my Algorithm Questions series. Sliding Window is one of the essential Dynamic Programming techniques. It is also one of the common algorithm questions in programming interviews. Any software engineer will have to deal with some form of a sliding window of data at some point in their careers, starting with the job interview of course! It is essential to have an in-depth understanding of algorithms since competitive companies tend to ask more varied and harder questions. If you have a great knowledge of different classes of algorithms, you can apply them to many variations of common interview questions easily.

Today I will give you an in-depth guide of the Sliding Window Technique. I will describe how it works and what class of problems can be solved using it, along with sample questions and their solutions and their tests.

## Overview
Sliding Window Technique is a method for finding subarrays in an array that satisfy given conditions. We do this via maintaining a subset of items as our window and resize and move that window within the larger list until we find a solution.

Sliding Window Technique is a subset of Dynamic Programming. Dynamic Programming is a method for simplifying complicated problems by breaking them down to simpler sub-problems. If you can find a sub-problem with a solution that can be applied to the bigger problem, you can solve the bigger problem by solving the sub-problem. In our case, maintaining a subarray window that satisfies the problem constraints is our sub-problem. Moving that window over the entire data will solve our bigger problem.

Sliding Window Technique frequently appears in algorithm interviews since Dynamic Programming questions are the favorites of interviewers. Sliding Window Technique solutions have a time complexity of 𝑂(𝑛), which is linear time, and space complexity of 𝑂(1), which is constant space.

Sliding Window Technique is mostly used for finding subarrays inside larger arrays. You can apply Sliding Window to majority of minimum/maximum/common subarray/substring type of questions. Note that some subarray related questions have very specific and optimized solutions, like that of Kadane's Algorithm. We will investigate this situation while solving our problems.

## How Does It Work?
![Sliding Windows Technique](media/sliding_window_technique.mp4)

Let's see how the Sliding Window Technique works on a sample question. Given an array [1, 2, 3, 4, 5, 6, 7, 8, 9], we will try to find the subarrays that add up to 9. We will start by creating a sliding window from the first two array elements: [1, 2]. This only adds up to 3 so let's expand the window by one from the right: [1, 2, 3]. The new window still only adds up to 6, so we will expand the window once again: [1, 2, 3, 4]. This new window now adds up to 10, which is bigger than our target of 9. So, we will continue by shrinking the window by one element from the right: [2, 3, 4]. This window now adds up to 9, which is our target. We can continue to expand the window when it is less than or equal to 9 and shrink it when it is above 9, and continue to find rest of the subarrays that add up to 9. And this is basically how the Sliding Window Technique works. Let's move onto some real-world interview questions to examine harder problems.

## Video Solutions
If you want video solutions for the below questions, visit the YouTube link in the resources section. The video has a lot more in-depth info on solution techniques along with helpful visuals.

## Difficulty 1: Statically Sized Sliding Window: Given an array of integers, find maximum/minimum sum subarray of a given size
Example Input: [-1, 2, 3, 1, -3, 2]    -    Subarray Size: 2
Requirements:
	Analyze the requirements even in simple questions, they might not be so simple!
	Subarrays are contiguous by definition, so the elements should be adjacent.
	Input size could be anything.
Analysis:
	Input size is unlimited, so memory can blow up if we are not careful of what we keep in memory.
	Do not pre-calculate and store all possible variations beforehand (brute force approach).
	Do not use recursion. Call stack will overflow.
	Think through all data structures that can be utilized.
Solution: Sliding Window (Statically Sized)
	Start calculating window sum starting with the first 2 elements.
	Slide the window by one element at a time.
	Time complexity: O(n)
	Space complexity: O(1)
	You can find the code for this solution at: [https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/sliding-window/max-subarray-sum.js](https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/sliding-window/max-subarray-sum.js){:target="_blank"}
	You can also watch me solving this problem in the video in the resources section.

## Tips!
	The objective here is to teach you how to think towards a solution in all similar classes of problems.
You will get variations in actual interviews!
	Tech interviews are like college admission. You have to play the game by its rules.
Algorithm and data structure questions are a part of that, and you need to be good at them!
	Code for all these questions and answers (along with their tests) are on GitHub and the link is in the video description below.

## Difficulty 2: Dynamically Sized Sliding Window: Given an array of positive integers, find the subarrays of integers that add up to a given number
Example Input: [1, 7, 4, 3, 1, 2, 1, 5, 1]    -    Desired Sum: 7
Requirements:
	Subarray = contiguous.
	Input size could be anything. It could be first 10^10 decimals of π.
	No negative numbers or 0 to deal with.
Analysis:
	Input size is unlimited, so memory can blow up if we are not careful of what we keep in memory.
	Do not pre-calculate and store all possible variations beforehand (brute force approach).
	Do not use recursion. Call stack will overflow.
	Think through all data structures that can be utilized.
	Use simple arrays to accept input data and output results.
Approach #1: Brute Force
	Find all possible subarrays and calculate their sum and put them in a map.
	Return the subarrays that add up to the desired sum from that map.
	Time complexity: O(n^2)
	Space complexity: O((n(n+1))/2)≅O(n^2)
	Think on how to improve this via reusing subarray sums.
Approach #2: Sliding Window (Dynamically Sized)
	Start calculating window sum starting with the first element.
	Slide, expand, or shrink the window by one element at a time.
	Time complexity: O(n)
	Space complexity: O(1)
	You can find the code for this solution at: [https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/sliding-window/desired-subarray-sum.js](https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/sliding-window/desired-subarray-sum.js){:target="_blank"}
	You can also watch me solving this problem in the video in the resources section.

## Variation (Difficulty 2.5): Same question but for an array with all integers (positive, 0, negative). The optimal solution is Kadane's Algorithm, but Sliding Window can still be applied with modifications (not recommended though)
Example Input: [-1, -4, 0, 5, 3, 2, 1]    -    Desired Sum: 5
Approach #1: Brute Force
	Find all possible subarrays along with their sums and put them in a map.
	Return the subarrays that add up to the desired sum from that map.
Approach #2: is Kadane's Algorithm 
	Optimum solution is Kadane's Algorithm.
	Time Complexity: O(n)
	Sliding Window can still be applied with modifications. (not recommended)

## Difficulty 2: Flipping/Swapping: Given an array of 0's and 1's, find the maximum sequence of continuous 1's that can be formed by flipping at-most k 0's to 1's
Example Input: [0, 1, 0, 1, 0, 0, 1, 1]    -    Max Flips (k): 2
Requirements:
	Input size could be anything. Maybe even all the 0’s and 1’s on your disk.
	Interviewer might ask you to return the subarray(s) that satisfy the given constraints to make the question harder.
Analysis:
	Prefer simple iteration over recursion.
	Write tests if you have time.
	Optionally, start by writing simple test cases to demonstrate your test-driven development skills.
	Solution & test code for these questions are in QuanticDev GitHub repo, and the link is in the description.
	You can also check out my video on test-driven development and other software patterns. The link is also in the description.
Approach #1: Brute Force
	Find all possible subarrays of the input and how many 0’s that they have in them.
	Amongst all the subarrays with 2 or less 0’s in them, return the longest one.
	Time complexity: O(n^2)
	Space complexity: O(n^2)
Approach #2: Sliding Window
	Start checking for elements to flip, starting with the first element.
	Flip 0’s until we reach the limit.
	Un-flip 0’s from left and continue flipping them from right to slide the window.
	Time complexity: O(n)
	Space complexity: O(1)
	You can find the code for this solution at: [https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/sliding-window/max-sequence-by-flipping.js](https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/sliding-window/max-sequence-by-flipping.js){:target="_blank"}
	You can also watch me solving this problem in the video in the resources section.

## Difficulty 3: Strings: Given a string and n characters, find the shortest substring that contains all desired characters
Example Input: fa4chba4c    -    Desired Characters: abc
Requirements:
	Substrings are contiguous by definition, so characters should be adjacent.
	Given string could be of any size. It can even be the entire Harry Potter series.
Analysis:
	Similar to numeric sliding window questions, hence similar principles apply.
	Avoid recursion as usual.
	Both given string and desired characters can have repeating chars, so this question is harder than it looks.
	I would personally not ask this question unless I am interviewing for a senior position as most juniors would not able to come up with an answer in 30 mins.
Approach #1: Brute Force
	Generate all possible substrings of the given input.
	Check each substring to see if they contain all the desired characters.
	Finally, return the shortest one of the matching substrings.
	Time complexity (first time): O(n^2 )
	Space complexity: O(n^2)
	This could theoretically be useful in a CPU sensitive application, like in a web service. We could generate and cache all substrings once and use them. Consecutive lookups would have time complexity of: O(1). Needs ton of memory though!
Approach #2: Sliding Window
	Start checking for needed chars from the left.
	Expand the window from the right until all the needed chars are found.
	Shrink the window from left while keeping track of removed needed chars.
	Time complexity: O(n)
	Space complexity: O(1)
	You can find the code for this solution at: [https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/sliding-window/max-sequence-by-flipping.js](https://github.com/soygul/QuanticDev/blob/master/algorithms/dynamic-programming/sliding-window/max-sequence-by-flipping.js){:target="_blank"}
	You can also watch me solving this problem in the video in the resources section.

## Tips!
Coding interview measures if you are going to:
	Be able to write code in the first place!
	Think independently on technical problems.
	Think analytically and explain and discuss your ideas.
	Reason about arbitrary problems and constraints.
	Operate in an office environment and deliver results.

## Outro
If you like the video and want more algorithm content, give it a thumbs up so I will know. If you want to watch the upcoming algorithm series videos, don't forget to sub. And that is it for the sliding window technique, and I will see you in the next algorithm video.
