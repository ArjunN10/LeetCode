


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





