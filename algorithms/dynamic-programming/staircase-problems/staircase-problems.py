"""
This is the solution to the staircase problem using Fibonacci-like sequences.
If you want to see the other solutions as well some other staircase problem variants, see the JavaScript file.
"""


def climb_stairs(stair_count, max_steps):
    """
    Given n number of stairs, you can climb at most m stairs at a time.
    For instance, for m=3, you can climb 1, 2, or 3 stairs at a time.
    Count the number of different ways that you can reach to the top.

    Solution below uses the optimal approach of calculating the solution using a Fibonacci-like sequence.

    Time Complexity: O(m*n)
    Space Complexity: O(m)

    :param stair_count: No of stairs to climb (n).
    :param max_steps: Max no of stairs you can climb at a time (m).
    :return: Number of different ways to reach the top.
    """
    if stair_count <= 1:
        return stair_count
    if max_steps <= 1:
        return 1

    stairs = [1]
    for _ in range(stair_count):
        stairs.append(sum(stairs))
        if len(stairs) > max_steps:
            stairs.pop(0)
    return stairs[-1]


# tests
assert climb_stairs(0, 2) == 0
assert climb_stairs(1, 2) == 1
assert climb_stairs(2, 2) == 2
assert climb_stairs(7, 2) == 21
assert climb_stairs(40, 1) == 1
assert climb_stairs(16, 7) == 31489
assert climb_stairs(30, 30) == 536870912

print('done: all tests pass')
