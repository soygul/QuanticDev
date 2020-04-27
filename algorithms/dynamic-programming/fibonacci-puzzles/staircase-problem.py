def climb_stairs(stair_count, m):
    """
    Given a number of stairs, you can climb at most m stairs at a time.
    For instance, for m=3, you can climb 1, 2, or 3 stairs at a time.
    Count the number of different ways that you can reach the top.

    :param stair_count: No of stairs to climb.
    :param m: Max no of stairs you can climb at a time.
    :return: Number of different ways to reach the top.
    """
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


def climb_stairs_recursive(stair_count, m):
    if stair_count <= 1:
        return stair_count
    return climb_stairs_recursive(stair_count-1) + climb_stairs_recursive(stair_count-2)


# tests
assert climb_stairs(0, 2) == 0
assert climb_stairs(1, 2) == 1
assert climb_stairs(2, 2) == 2
assert climb_stairs(7, 2) == 21
assert climb_stairs(40, 1) == 1
assert climb_stairs(16, 7) == 31489
assert climb_stairs(30, 30) == 536870912

print('done: all tests pass')
