## Template
Xxxxxxxxxx

![XXXXXXXXXXXXXXXXXX](media/XXXXXXXXXXXXXXXXXX)

<video width="790" height="300" controls><source src="media/kadanes-algorithm.mp4" type="video/mp4"></video>


# Staircase Problem + 3 Variants - Different Ways to Reach the N'th Stair With M Different Steps
In a staircase problem, you try to calculate the different ways to reach the n'th stair where you are allowed to take up to m steps at a time. Say you are given a staircase problem with 5 stairs to climb, and you can take 1 or 2 steps at a time. How would you solve this problem? This and its variants are the focus in this video. It is a great problem to demonstrate the properties of dynamic programming and how to solve problems with it. Due to this, staircase problem and its variants like unique paths problem are commonly used as programming interview questions.

![Staircase Problems](media/thumb.png)

In the article, you will find the solutions to the following questions, as well as their time and space complexities:

* Medium Difficulty: Staircase Problem - Different Ways to Reach the N'th Stair: Given n stairs, you can climb 1 or 2 stairs at a time. Count the number of different ways that you can reach the top.
* Medium Difficulty: Generalized Fibonacci-like Sequences: Same question but you can climb up to m steps at a time.
* Medium Difficulty: Generalized Fibonacci-like Sequences With Variable Steps: Same question but you can only climb 2, 3, 6 steps at a time.

Table of contents:
* [Resources](#resources)
* [Overview](#overview)
* [Video Solutions](#video-solutions)
* [Staircase Problem - Different Ways to Reach the N'th Stair](#xxxxx)
* [Generalized Fibonacci-like Sequences](#xxxxx)
* [Generalized Fibonacci-like Sequences With Variable Steps](#xxxxx)
* [xxxxx](#xxxxx)
* [Conclusion](#conclusion)

## Resources
You can find the video version of this article on YouTube: [https://www.youtube.com/watch?v=qSE2iKRU4UA](https://www.youtube.com/watch?v=qSE2iKRU4UA){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/qSE2iKRU4UA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The video has illustrations for all the problems and their solutions. If you want to read the comments or leave a comment, do so under the YouTube video. If you want to contribute to the article, make a pull request on GitHub.

Solution code to examples are available on:
* [https://github.com/soygul/QuanticDev/tree/master/algorithms/dynamic-programming/fibonacci-puzzles](https://github.com/soygul/QuanticDev/tree/master/algorithms/dynamic-programming/fibonacci-puzzles){:target="_blank"}

My other articles relevant to staircase problems:
* My [Sliding Window Technique + 4 Questions](/algorithms/dynamic-programming/sliding-window){:target="_blank"} article, which will help you solve Fibonacci problems more efficiently.
* My [Big O Time/Space Complexity Types Explained](/algorithms/primitives/big-o-time-space-complexity-types-explained){:target="_blank"} article, which can help you refresh your memory on Big O notation:

Recursion visualization tool used in the video:
* [https://recursion.now.sh](https://recursion.now.sh){:target="_blank"}

## Overview
* Staircase problem is just a special case of "unique variations" questions like that of unique paths problem. I might make quick videos for those too, but you can apply the same methods that you will learn here to solve them also.
* You can identify variation finding questions if you are asked to find unique ways of doing XXX.
* Solutions to these problems are a subset of Dynamic Programming (the technique of solving a problem by dividing it into subproblems). We can solve them using recursion or iteration.
* Since solutions to these questions resemble Fibonacci Sequences, they are referred to as Fibonacci Puzzles, and they commonly appear in programming interviews and LeetCode. Especially the staircase problem!

## Video Solutions
If you want video solutions for the below questions, visit the YouTube link in the resources section. The video has a lot more in-depth info on solution techniques along with helpful visuals.

## Staircase Problem - Different Ways to Reach the N'th Stair
Question: Given n stairs, you can climb 1 or 2 stairs at a time. Count the number of different ways that you can reach to the top.

Difficulty: Medium.

Requirements:
* There are no bounds specified for n.

Analysis:
* There is no upper bound to n so recursive solutions might blow up the call stack.
* There is no lower bound specified for n so users might try to put in zero as the parameter. Write a test for n=0 case.

Formula:
To formulate a way to calculate all possible ways to reach a stair, think in reverse. What are the unique paths that lead to n'th stair. It is the sum of unique paths leading to n-1'th stair plus n-2'nd stairs.

* ways(n) = ways(n-1) + ways(n-2)
* ways(4) = ways(3) + ways(2)
* ways(3) = ways(2) + ways(1)
* ...

This is Fibonacci Sequence!

Tip: Visualize in a regular (forward) manner and trying to figure out a pattern/formula. If that does not work, try to think in reverse (i.e. reverse path in this question).

Calculate solution for n=4:
* Remember the formula: ways(n) = ways(n-1) + ways(n-2)
* ways(4) = ways(3) + ways(2)
* ways(3) = ways(2) + ways(1)
* ways(2) = ways(1) + ways(0)
* ways(1) = 1
* ways(0) = 1
* This is the iterative Fibonacci Solution!

### Solution: Iteration (Fibonacci Sequence)
* Remember the formula:
  * ways(n) = ways(n-1) + ways(n-2)
* Start with stair 0:
  * ways(0) = 1
* Continue with stair 1:
  * ways(1) = ways(0) = 1
* Continue with stair 2:
  * ways(2) = ways(1) + ways(0) = 1 + 1 = 2
* Calculate consecutive ones via adding the previous two until you reach n (stair count).
* Time complexity: 𝑶(𝒏) (linear time)
* Space complexity: 𝑶(𝟏) (constant space)

Code: Iteration (Fibonacci Sequence)
```
def ways(n):
a, b = 1, 1
for _ in range(n):
    next_b = a + b
    a = b
    b = next_b
    # shorthand: a, b = b, a + b
return b
```

### Solution: Recursion
* Start with ways(n) = ways(n-1) + ways(n-2)
* Recurse all the way down to ways(0) = 1, ways(1) = 1
* Time Complexity: 𝑶(𝟐^𝒏 ) (exponential time)
  * Size of recursion tree will grow exponentially. (visualization in a moment)
* Space Complexity: 𝑶(𝟏) (constant space)
  * No extra variables allocated in mem per recursive call.
* Call Stack: 𝑶(𝒏)
  * Depth of recursion tree will grow linearly.


