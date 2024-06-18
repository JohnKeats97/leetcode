// https://leetcode.com/problems/meeting-rooms/

function canAttendMeetings(intervals: number[][]): boolean {
    const sortInterval = intervals.sort((a, b) => a[0] - b[0]);

    // начало нового больше конца старого
    for (let i = 1; i < sortInterval.length; i++) {
        if (sortInterval[i][0] < sortInterval[i-1][1]) {
            return false;
        }
    }

    return true;
};