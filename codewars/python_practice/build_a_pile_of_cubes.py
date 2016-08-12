# Your task is to construct a building which will be a pile of n cubes.
# The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3
# and so on until the top which will have a volume of 1^3.
#
# You are given the total volume m of the building.
# Being given m can you find the number n of cubes you will have to build?
#
# The parameter of the function findNb (find_nb, find-nb) will be an integer m
# and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m
# if such a n exists or -1 if there is no such n.
#
# Examples:
#
# findNb(1071225) --> 45
# findNb(91716553919377) --> -1

# num_cubes has to be a certain size, a certain proportion of the input
# and then n^3, n-1^3...1^3 all must add up to the input
# if we cannot find such an n or we can't calculate it, then we return -1
# what are the conditions that will prevent such an n from existing??

import math

def cube_root(x):
    x = abs(x)
    return int(math.pow(x, (1/3.0)))

def find_nb(m):
    num_cubes = 0
    sum_of_cubed_cubes = m - 1
    working_total = 0
    while working_total < sum_of_cubed_cubes:
        if blah:
            working_total += ?????
    return num_cubes
