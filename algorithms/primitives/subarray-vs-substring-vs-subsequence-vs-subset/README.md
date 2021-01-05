# Know the Difference: Subarray vs Substring vs Subsequence vs Subset
Today we are going to make a comparison of subarray vs substring vs subsequence vs subset. These are all similar concepts but have important differences. For instance, if you have a requirement to write an algorithm to find the subsets of a certain data and you come up with something that only finds the subsequences, you will only be half done. Or in an interview situation, you need to be extra careful about your choice of wording. If a question asks you to return a subsequence and you return a subset, you might fail the interview. Let me start by describing each concept with examples. Finally, I will give you a comparison table.

## Resources
You can find the video narration of this article on YouTube with illustrations: [https://www.youtube.com/watch?v=uzhN-QhzR2g](https://www.youtube.com/watch?v=uzhN-QhzR2g){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/uzhN-QhzR2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips and illustrations. If you want to read the comments or leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

## Subarray
A subarray is a contiguous sequence of elements within an array. For instance, the subarrays of the array `{1, 2, 1}` would be `{1}`, `{2}`, `{1, 2}`, `{2, 1}`, `{1, 2, 1}`, `{}`. Things to note:
* You can use braces (aka curly brackets) `{}` or square brackets `[]` to denote arrays.
* A subarray should be a contiguous subsequence of the parent array. As a result, `{1, 1}` is not a valid subarray of the array `{1, 2, 1}`, since `{2}` in the middle is skipped, so it is not a contiguous subsequence anymore.
* The full array itself is a subarray of itself.
* An empty array is a subarray of any array.
* You cannot have duplicate subarray members. The element `{1}` appears twice in the array `{1, 2, 1}` but you can only count `{1}` once as the subarray of `{1, 2, 1}`.
* Order of elements in the subarray should be the same as in the array. As a result, `{2, 1, 1}` is not a subarray of `{1, 2, 1}`.

## Substring
A substring is exactly the same thing as a subarray but in the context of strings. For instance, the substrings of the string `"ara"` would be `"a"`, `"r"`, `"ar"`, `"ra"`, `"ara"`, `""`. Things to note:
* A substring is just a subarray that is made up of only characters.
* You can use single `'` or double quotes `"` to denote substrings.
* All the rules mentioned for subarrays also apply to substrings.

## Subsequence
Both in mathematics and computer science, a subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. This means a subsequence is a generalized subarray, where the rule of contiguity does not apply. For instance, the subsequences of the sequence `<A, B, A>` would be `<A>`, `<B>`, `<A, B>`, `<B, A>`, `<A, A>`, `<A, B, A>`, `<>`.
* In math, it is customary to use angle brackets (`<>`) to denote subsequences. In programming, you can use whatever your programming language uses for arrays and lists.
* Unlike subarrays, subsequences do not need to be contiguous so `<A, A>` is a perfectly valid subsequence of `<A, B, A>` whereas it is not a valid subarray.
* Subsequences still need to preserve element order just like subarrays, so `<A, A, B>` and `<B, A, A>` are not valid subsequences.
* Apart from the contiguity difference mentioned above, the rest of the rules that apply to subarrays also apply to subsequences.

Tip: Subsequences is a great interview question topic. I have an algorithm article coming up on Longest Common Subsequence questions. If you want to read it when it is out, don't forget to follow me on social media.

## Subset
A set is subset of another set if all its elements are contained by that set. This means, neither contiguity nor ordering of elements matter. For instance, the subsets of the set `{1, 2, 3}` would be `{1}`, `{2}`, `{3}`, `{1, 2}`, `{1, 3}`, `{2, 3}`, `{1, 2, 3}`, `{}`.
* Subsets do not need to be contiguous. `{1, 3}` is a perfectly valid subset.
* Subsets do not need to preserve element order. As a result, both `{1, 2}` and `{2, 1}` represent the same subset. While listing the subsets of the set, you can either write `{1, 2}` or `{2, 1}`, and it does not matter. But you cannot list both at the same time since they are exactly the same thing.
* Note on Sets: Unlike arrays, strings, and sequences, sets do not allow duplicate elements. As a result, `{1, 2, 1}` would not be a valid set.

## Comparison Table

| | Subarray | Substring | Subsequence | Subset |
|---|---|---|---|---|
| Contiguous | Yes | Yes | No | No |
| Elements Ordered | Yes | Yes | Yes | No |

As you can see in the table, subarrays and substrings need to be made up of contiguous sequence of elements of their parents, while subsequences and subsets do not have to be. In addition, all of subarrays, substrings and subsequences should preserve element order, meaning their elements should appear in the same order that they appear in their parents, while subsets can have their elements appear in any order.

While memorizing all the details about these data structures is hard, learning them is not. And the best way to learn them is to use them in real life. Not everyone does algorithm-heavy programming, so my recommendation for most developers is to solve algorithm questions from time to time. They are not only good exercise to keep your computer science fundamentals sharp, but they will also help you to be familiar with new and improved problem-solving techniques. Computer science is a very active branch of science and existing algorithms are being improved every day, and new solutions for existing questions are being found. Solving an algorithm question once in a while is not only fun, but it is tremendously helpful in interview situations.

If you want to keep your algorithm game up and be ready for interviews at any time, follow me on social media, and in return, I will give you the best and most popular interview questions and the best possible solutions to them. And that is it for this quick article, I will see you in the next algorithm question article. I am planning for a hard one that I plan to ask in the next hiring event, so watch out!
