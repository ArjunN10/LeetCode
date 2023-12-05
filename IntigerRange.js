//Question:- You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive 
//interval between starti and endi.Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges.
//Return false otherwise.An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.




function isCovered(ranges, left, right) {
    for (let i = left; i <= right; i++) {
        let covered = false;
        for (const [start, end] of ranges) {
            if (start <= i && i <= end) {
                covered = true;
                break;
            }
        }
        if (!covered) {
            return false;
        }
    }
    return true;
}
const ranges = [[1, 2], [3, 4], [5, 6]]
const left = 2
const right = 5

console.log(isCovered(ranges, left, right)) 





