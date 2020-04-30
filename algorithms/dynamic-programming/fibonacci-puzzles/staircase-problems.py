"""
Given a number of stairs, you can climb at most m stairs at a time.
For instance, for m=3, you can climb 1, 2, or 3 stairs at a time.
Count the number of different ways that you can reach the top.

:param stair_count: No of stairs to climb.
:param m: Max no of stairs you can climb at a time.
:return: Number of different ways to reach the top.
"""

def climb_stairs_recursive(stair_count, m):
    if stair_count <= 2:
        return stair_count
    if m <= 1:
        return m
    total = 0
    for i in range(m):
        total += climb_stairs_recursive(stair_count - (i + 1), m)
    return total


def climb_stairs_recursive_memoized(stair_count, m):
    pass


def climb_stairs_fibonacci(stair_count, m):
    if stair_count <= 1:
        return stair_count
    if m <= 1:
        return 1

    fib = [0, 1]
    for _ in range(stair_count):
        fib.append(sum(fib))
        if len(fib) > m:
            fib.pop(0)
    return fib[-1]


def climb_stairs_with_variable_steps(stair_count, possibleSteps):
    pass


# tests
assert climb_stairs_fibonacci(0, 2) == 0
assert climb_stairs_recursive(0, 2) == 0
assert climb_stairs_recursive_memoized(0, 2) == 0
assert climb_stairs_fibonacci(1, 2) == 1
assert climb_stairs_recursive(1, 2) == 1
assert climb_stairs_recursive_memoized(1, 2) == 1
assert climb_stairs_fibonacci(2, 2) == 2
assert climb_stairs_recursive(2, 2) == 2
assert climb_stairs_recursive_memoized(2, 2) == 2
assert climb_stairs_fibonacci(7, 2) == 21
assert climb_stairs_recursive(7, 2) == 21
assert climb_stairs_recursive_memoized(7, 2) == 21
assert climb_stairs_fibonacci(40, 1) == 1
assert climb_stairs_recursive(40, 1) == 1
assert climb_stairs_recursive_memoized(40, 1) == 1
assert climb_stairs_fibonacci(16, 7) == 31489
assert climb_stairs_recursive(16, 7) == 31489
assert climb_stairs_recursive_memoized(16, 7) == 31489
assert climb_stairs_fibonacci(30, 30) == 536870912
assert climb_stairs_recursive(30, 30) == 536870912
assert climb_stairs_recursive_memoized(30, 30) == 536870912

print('done: all tests pass')
