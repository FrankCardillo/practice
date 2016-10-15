# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution:
    # @param intervals, a list of Intervals
    # @return a list of Interval
    def merge(self, intervals):
        results = []

        if len(intervals) == 0:
            return results

        intervals.sort(key=lambda x:x.start)

        results.append(intervals[0])

        for i in xrange(1,len(intervals)):
            current = intervals[i]
            previous = results[-1]
            if current.start <= previous.end:
                results[-1].end = max(previous.end, current.end)
            else:
                results.append(current)

        return results
