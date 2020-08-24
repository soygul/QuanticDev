# Big O Time/Space Complexity Types Explained - Logarithmic, Polynomial, Exponential, and More
Today we will investigate the most important time and space complexity types. Time and space complexities are a measure of a function's processing power and memory requirements. Many time/space complexity types have special names that you can use while communicating with others. While some of the names for complexity types are well known, like linear and constant time, some others are living in the shadows, like quadratic and factorial time. In this article, I will use the big O notation to denote the complexities, which is specifically used to describe the worst-case performance of algorithms.

Table of contents:
* Overview
* Constant Time/Space Complexity: O(1)
* Logarithmic Complexity: O(logn)
* Linear Complexity: O(n)
* Polynomial Complexity: O(n^k)
* Exponential Complexity: O(2^n)
* Factorial Complexity: O(n!)
* Alternative Big O Notation
* Conclusion

## Resources
You can find the video narration of this article on YouTube with illustrations: [https://www.youtube.com/watch?v=4K1O6SXRSws](https://www.youtube.com/watch?v=4K1O6SXRSws){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/4K1O6SXRSws" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips and illustrations. If you want to read the comments or leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

Alternative Big O Notation poster, stickers, mugs, and more:
* https://quanticdev.com/shop[xxx](xxx){:target="_blank"}
* https://www.redbubble.com/shop/ap/54268092[xxx](xxx){:target="_blank"} (Redbubble shop direct link)
* https://www.redbubble.com/shop/ap/54006599[xxx](xxx){:target="_blank"} (Quantic Developers Club artwork)

My "Kadane's Algorithm" video, which is a great demonstration of an O(n) linear time complexity and O(1) constant space complexity algorithm:
* https://www.youtube.com/watch?v=4csAswCkXZM[xxx](xxx){:target="_blank"}

Wikipedia articles referenced in this video:
* List of all time/space complexities: https://en.wikipedia.org/wiki/Time_complexity[xxx](xxx){:target="_blank"}
* Asymptotic analysis: https://en.wikipedia.org/wiki/Asymptotic_analysis[xxx](xxx){:target="_blank"}

## Constant Time/Space Complexity: O(1)
Simplest of all complexities. Not complex at all! If an operation always completes in the same amount of CPU time regardless of the input size, it is called a constant time operation. If it always uses the same amount of memory regardless of the input size, it is called a constant space operation.

The classic example of constant time complexity is arrays. Accessing an element by its index will always take the same amount of time regardless of the array size. Same goes for hash-table lookup. No matter how many elements a hash table has, retrieving an element by its key will always take a constant amount of time.

When it comes to constant space complexity, calculating Fibonacci numbers is a great example. To calculate the next Fibonacci number, all you need to keep in memory is the previous two Fibonacci numbers. Hence, you will always use a constant amount of memory, no matter how big the Fibonacci number that you are trying to calculate.

## Logarithmic Complexity: O(logn)
This is a complexity type found in efficient algorithms, where the time complexity of a function only grows logarithmically in relation to the input. Let me remind you that log⁡n is the shorthand for log_10⁡n, and the definition of logarithm is: log_a⁡n=x only if a^x=n. Since big O notation is asymptotic, we always use log⁡n regardless of the logarithm's base. The logarithm's base changes nothing but a constant multiplier, hence it is irrelevant to our analysis. If you want to learn more about asymptotic analysis, I will put the Wikipedia link in the video description below.

## Binary search is a classic example of logarithmic time complexity. Imagine you have a sorted array of integers. When you are searching for a specific value, all you need to do is to get the middle element of the array and compare it to the value that you are looking for. If the middle element is less than the value you are looking for, you can safely discard the first half of the array, and repeat the same process on the second half, until you find your value. As a result, you will discard half of the remaining elements on each iteration, which will give you a log_2⁡n time complexity in the worst-case scenario, where n is the number of elements in the array. As I said, in big O notation, we do not care about the base of logarithms, so we denote the time complexity of binary search as just O(logn).

Logarithmic space complexity, however, is quite rare to see. I have only seen it once in a real-life problem, which was quite an edge case, so there is no need to worry about it.

## Linear Complexity: O(n)
This is yet another straightforward complexity type. If an algorithm's time/space usage only grows linearly with the number of elements in the input, then it has linear time/space complexity. A great example of this is Kadane's Algorithm. When you have an array of integers, and you are looking for the subarray with the maximum possible sum, you can apply Kadane's Algorithm to get the solution in linear time. Kadane's Algorithm only needs to read each member of the array once; hence you can process the entire array in only O(n) time. On the other hand, it has O(1) space complexity, since it only needs to create a couple of variables. If you want to learn more about Kadane's Algorithm, I have a dedicated video on it with a ton of illustrations, and the link to it is in the video description.

## Polynomial Complexity: O(n^k)
If an algorithm takes n to the power of k time, where k is some constant, it has polynomial time complexity. Let me remind you that a polynomial takes the form of [dir: "this"] An^k + Bn^(k-1) + …. + Fn^2 + Gn + H, where A, B, …, G, H are some constants. Remember that big O notation is asymptotic, so if an algorithm takes An^3 + n amount of time, we simply denote it as O(n^3).

A decent number of sorting algorithms run on polynomial time, including bubble sort, insertion sort, selection sort and more. Also, basic arithmetic operations (multiplication, division, etc.) can be implemented in polynomial time.

O(n^2) polynomial complexity has the special name of "quadratic complexity". Likewise, O(n^3) is called "cubic complexity". For instance, brute force approaches to max-min subarray sum problems generally have O(n^2) quadratic time complexity. You can see an example of this in my Kadane's Algorithm video.

## Exponential Complexity: O(2^n)
This is where things are starting to get serious. When the complexity of an algorithm is proportional to a constant k raised to the power of n, you get exponential complexity. Remember that n is the number of elements in the input. With this complexity type, when your input array is big enough, resource consumption will quickly approach infinity! Yet again, due to the asymptotic nature of big O notation, you can ignore the constant k and always denote exponential complexity as O(2^n), as n gets very big, the value of k will not matter.

The classic example of exponential complexity is password cracking. To be able to discover someone's password, you need to try every possible combination of every letter. Say that you have a password of length of 5 (n=5), which is made up of only English letters (k=26). Your time complexity in the worst-case scenario would be O(k^n) = 26^5, which can be computed in less than a second. Now if you have a password of length 10, and you use special characters that can be typed using a regular computer keyboard (~100 of them, including digits and letters), your time complexity would be 100^10. This would take years to compute and try using a single computer (assuming there is some slow hashing involved). That is why you should always use a 10+ character password with special characters in it! Even longer, if you want to be safe against organizational attacks.

[Tip: If you want this video to reach more fellow software engineers like you, give it a thumbs up. Google tends to promote more favorable content to more people, which in turn generates more thumbs up, which then leads to exponential views... hopefully!]

## Factorial Complexity: O(n!)
This is the endgame. Factorial complexity means that you are trying to compute all possible permutations of a given input. You might remember that in high-school, you are thought how to calculate all permutations of a list. Now that is your factorial time complexity! Brute-force solution to traveling salesman problem is also O(n!), where you basically calculate all possible paths to your destination and then take the shortest one. Of course, there are much more creative and efficient approaches to solving it, which I will get into in another video full of illustrations. If you want to see it when it is out, don't forget to sub, so you won't miss it.

## Alternative Big O Notation
If you were wondering what the thumbnail of this video was about, hold on tight. I have compiled an alternative version of the big O notation. I always found things easy to remember when they rhyme, especially with humor. So, here is my take on big O notation, which can help you remember the rankings of big O types:

O(1) = O(yeah)
O(logn) = O(nice)
O(n) = O(k)
O(n^2) = O(my)
O(2^n) = O(no)
O(n!) = O(mg)
O(n^n) = O(sh*t!)

If you want to have the alternative big O notation as a sticker, so you can stick it to unusual places, you can get it from [quanticdev.com/shop](https://quanticdev.com/shop){:target="_blank"}. I will leave the link to it in the video description below. If you really want to confuse fellow software engineers, you can also get it as a small poster, bigger poster, framed print, hoodie, phone case, mug, blanket, or even a shower curtain! And if you want to join the quantic developers club, you can get a sticker for your computer or even a nice canvas poster for your study corner.

Anything you order or gift helps the channel, while hopefully bringing you some motivation. If you want to see the full collection, check out quanticdev shop.

Side Note: Asymptotically, O(n^n) is equal to O(2^n), so the last line in the alternative big O notation list is just for the humor's sake.

## Conclusion
Big O notation list goes longer than what I covered here. If you want to see the rest of it, check out the Wikipedia link in the description. However, rest assured that it is enough if you are familiar with the ones that I mentioned. The rest gets increasingly rare to see in real-world situations, and they are much less likely to appear in an algorithm interview. As always, you can find the written version of this guide in quanticdev.com, along with all the other articles. And if you want to see future algorithms videos like this one, don't forget to sub. I will see you on the next one.
