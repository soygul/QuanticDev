# Lockable Tree - Google Interview Question
Lockable tree is a great programming interview question asked by Google, and it is a very well thought out one. A lockable tree is a tree with nodes that can be locked if none of its ancestors or descendants is locked. In the question, we are asked to implement locking/unlocking operations that should run in `O(h)` time where `h` is the `height of the tree`. Lock/unlock methods do not need to be thread-safe.

## Resources
You can find the video narration of this article on YouTube: [https://www.youtube.com/watch?v=1mTGZHcs7zw](https://www.youtube.com/watch?v=1mTGZHcs7zw){:target="_blank"}{:rel="noopener"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/1mTGZHcs7zw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips and illustrations. If you want to read the comments or leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

Solution code to the question is at: [https://github.com/soygul/QuanticDev/blob/master/algorithms/trees/lockable-tree/lockable-tree.js](https://github.com/soygul/QuanticDev/blob/master/algorithms/trees/lockable-tree/lockable-tree.js){:target="_blank"}{:rel="noopener"}

Articles that I referenced in this article:
* Index locking: [https://en.wikipedia.org/wiki/Index_locking](https://en.wikipedia.org/wiki/Index_locking){:target="_blank"}{:rel="noopener"}
* Blocking vs Non-Blocking functions: [https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/){:target="_blank"}{:rel="noopener"}

Reddit discussion on this article:
* [https://www.reddit.com/r/programming/comments/gjiwh4/lockable_tree_google_interview_question/](https://www.reddit.com/r/programming/comments/gjiwh4/lockable_tree_google_interview_question/){:target="_blank"}{:rel="noopener"}

## Overview
This is a very well-crafted interview question by Google. Both the requirements and the question itself are quite clear, which is a rarity in the industry. Often, the interviewers will intentionally make the question a little obscure, so they can observe how you do your requirements analysis and if you can communicate with the interviewers clearly. However, in this case, the requirements are clear cut, which I think reflects how Google operates. It is a medium difficulty question. But a fair knowledge of tree data structures is necessary to come up with a clean and concise solution. Do not worry though, I have an article comping up on general tree structures soon.

## Question
Design a tree with nodes that can be locked if none of its ancestors or descendants is locked. Locking/unlocking operations should run in `O(h)` time (`h` = `height of the tree`). Lock/unlock methods do not need to be thread-safe. I will explain how this question relates to databases and why single-threaded locking/unlocking is still useful in the last section.

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

## How Does This Question Relates to Databases?
One of the prime use of lockable data structures like trees is databases. Say in a relational database, you use a tree to represent a table's index, and you want to execute a transaction that will lock a portion of the index. Depending on the tree and locking strategy you use, you might end up with requirements very similar to this question, and you will want your lock operations to run in `O(h)` time. The solution we came up in this exercise would be a good fit for this job. If you want to read more on database index locking, I have the link to a Wikipedia article on the subject in the resources section above.

Now let's address the elephant in the room. What good is a locking/unlocking algorithm if it is not thread-safe? There are single-threaded databases, and locking/unlocking is still applicable there. You can ask, what is locking guarding against in a single-threaded application? JavaScript applications are always single-threaded, but they can be asynchronous. For instance, you have one asynchronous task that initiates a database transaction and yields the control to another asynchronous task while `await`-ing the result from an HTTP request. If we don't use locking, the second task can initiate a new database transaction and invalidate the work that is still being done by the first task that we are still `await`-ing. All these happen in a single thread, but not everything happens synchronously. If everything were synchronous, long-running tasks like HTTP requests would make the CPU sit mostly idle while waiting. If you want to read more about synchronous/asynchronous/blocking/non-blocking functions, I have the link to a nice writeup in Node.js documentation, and the link to it is in the resources section again.

You can make this tree thread-safe by using read/read-write mutexes at appropriate places if you want. For `lock()` operation, you can obtain a read-write mutex at the tree level the moment you access the tree. As you traverse the ancestors and descendants of the tree, you can release the mutexes for the nodes' siblings, as they don't affect our target node's lockability (only their ancestors and descendants do).

## Tips!
* A real-world implementation of tree locking in databases would mostly have to be thread-safe, but I think it would be very domain-specific to be a general interview question.
* Write tests if you have time. I almost forgot that siblings could be locked/unlocked independently but realized that mistake while writing tests!
* I have a article coming up on General Tree Implementations. If your knowledge on generic trees is lagging, check it out when it is published.
* All my Algorithms Series is full of questions like this one from top software companies. You can see them listed on the home page.
