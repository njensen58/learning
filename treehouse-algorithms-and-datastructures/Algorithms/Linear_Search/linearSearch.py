def linear_search(list, target):
    """
    Returns the index position of the target if found, else returns none
    """
    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return -1

"""
The code can be cleaned up a bit by using the enumerate function on the list.
"""

def linear_search_improved(lst, target):
    for index, value in enumerate(lst):
        if value == target:
            return index
    return -1


def verify(index):
  if index is not None:
    print("Target found at index: ", index)
  else:
    print("Target not found in list")
    
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = linear_search(numbers, 10)
verify(result)