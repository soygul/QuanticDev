def two_way_merge(array1, array2):
    """
    Given two sorted arrays, merge them into a single sorted array.

    This is a very simple operation but is a precursor to k-way merge.
    We compare each element at the beginning of each array and remove smaller one and add it to the merged array.
    If one of the arrays run out of elements, we just copy rest of the other array into the merged array and return.

    Time Complexity: O(n) - Since we only need to do one comparison operation per element.
    Auxiliary Space: O(n) - We will store the final sorted data in an array of size O(n),
                            which is the combined length of the given arrays.

    If you want to see the fully animated video explanation, it is here: https://www.youtube.com/watch?v=Xo54nlPHSpg

    :param array1: A sorted array of values.
    :param array2: Another sorted array of values.
    :return: A single sorted array.
    """

    longer_arr_len = len(array1) + len(array2)
    merged_arr = []

    for i in range(longer_arr_len):
        if len(array1) == 0:
            merged_arr += array2
            break
        if len(array2) == 0:
            merged_arr += array1
            break

        if array1[0] < array2[0]:
            merged_arr.append(array1.pop(0))
        else:
            merged_arr.append(array2.pop(0))

    return merged_arr


# tests
assert two_way_merge([], []) == []
assert two_way_merge([1], []) == [1]
assert two_way_merge([], [5]) == [5]
assert two_way_merge([7, 9, 13], [1, 11]) == [1, 7, 9, 11, 13]
assert two_way_merge([1, 3, 8], [0]) == [0, 1, 3, 8]
assert two_way_merge([-9, -4, 3], [-5, 5]) == [-9, -5, -4, 3, 5]
assert two_way_merge([], []) == []

print('done: all tests pass')
