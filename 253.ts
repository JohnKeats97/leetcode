// https://leetcode.com/problems/meeting-rooms-ii/

function minMeetingRooms(intervals: number[][]): number {
    // сортирую все начала и концы конференций
    const starts = intervals.sort((a, b) => a[0] - b[0]);
    const ends = intervals.sort((a, b) => a[1] - b[1]);

    // смотрю что начало меньше конца - тогда нужна еще 1 - комната, то есть есть пересекающиеся конференции
    let rooms = 0;
    let j = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (starts[i][0] < ends[j][1]) {
            rooms++;
        } else {
            j++;
        }
    }

    return rooms;
};

// var minMeetingRooms = function(intervals) {
//     let rooms = 0;
//     let end = 0;
//     const starts = intervals.map(a => a[0]).sort((a, b) => a-b);
//     const ends = intervals.map(a => a[1]).sort((a, b) => a-b);
//     for(let i=0; i < intervals.length; i++) {
//         if(starts[i] < ends[end]) {
//             rooms++;
//         } else {
//             end++;
//         }
//     }
//     return rooms;
// };