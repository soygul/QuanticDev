# Lockable Tree - Google Interview Question
Lockable tree is a great programming interview question asked by Google, and it is a very well thought out one. A lockable tree is a tree with nodes that can be locked if none of its ancestors or descendants is locked. In the question, we are asked to implement locking/unlocking operations that should run in `O(h)` time where `h` is the `height of the tree`. Lock/unlock methods do not need to be thread-safe.

## Resources
You can find the video narration of this article on YouTube: [https://www.youtube.com/watch?v=1mTGZHcs7zw](https://www.youtube.com/watch?v=1mTGZHcs7zw){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/1mTGZHcs7zw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips and illustrations. If you want to read the comments or leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

* Solution code to the question is at: [https://github.com/soygul/QuanticDev/blob/master/algorithms/trees/lockable-tree/lockable-tree.js](https://github.com/soygul/QuanticDev/blob/master/algorithms/trees/lockable-tree/lockable-tree.js){:target="_blank"}

## Overview
This is a very well-crafted interview question by Google. Both the requirements and the question itself are quite clear, which is a rarity in the industry. Often, the interviewers will intentionally make the question a little obscure, so they can observe how you do your requirements analysis and if you can communicate with the interviewers clearly. However, in this case, the requirements are clear cut, which I think reflects how Google operates. It is a medium difficulty question. But a fair knowledge of tree data structures is necessary to come up with a clean and concise solution. Do not worry though, I have an article comping up on general tree structures soon.

## Question
Design a tree with nodes that can be locked if none of its ancestors or descendants is locked. Locking/unlocking operations should run in `O(h)` time (`h` = `height of the tree`). Lock/unlock methods do not need to be thread-safe.

## Requirements Analysis
* Required time complexity: `O(h)`
* Required space complexity: `Unspecified`
* If necessary, we can sacrifice any amount of space complexity to hit the time complexity target for `lock`/`unlock` methods.
* For instance we can store some info in nodes about the state of `ancestor`/`descendant`/`sibling` nodes.
* Thread-safety is not a concern, meaning all locking/unlocking operations will run in the same thread.

## Brute Force Approach: `lock()`
* Check if node to be locked is already locked or have locked descendants. If so, stop.
* Check if any of the ancestors are locked. If so, stop.
* Time complexity: `O(n)` (`n` = `node count`)
* Space complexity: `O(1)`

## Improvement
Let's try to implement a basic `lock()` method with `O(h)` time complexity target (`h` = `height of the tree`):
* Calculate time complexity for: locking the root node.
* Calculate time complexity for: locking bottom nodes.
* Calculate time complexity for: locking sibling nodes.
* Think of what variables we can store in nodes to reduce time complexity.

## Solution: Parents Keep Track of Locked Descendants
Store `locked` and `lockedDescendantCount` variables in each node.

### Method: `lock()`
* Check if node to be locked is already locked or have locked descendants using the variables. If so, stop.
* Check if any of the ancestors are locked. If so, stop.
* Inform all ancestors that their locked descendant count increased by one.
* Time complexity: `O(h)`
* Space complexity: `O(1)`

### Method: `unlock()`
* Check if node to be unlocked is already unlocked. If so, stop.
* Inform all ancestors that their locked descendant count decreased by one.
* Time complexity: `O(h)`
* Space complexity: `O(1)`

## Tips!
* A real-world implementation of tree locking in databases would mostly have to be thread-safe, but I think it would be very domain-specific to be a general interview question.
* Write tests if you have time. I almost forgot that siblings could be locked/unlocked independently but realized that mistake while writing tests!
* I have a article coming up on General Tree Implementations. If your knowledge on generic trees is lagging, check it out when it is published.
* All my Algorithms Series is full of questions like this one from top software companies. You can see them listed on the home page.
