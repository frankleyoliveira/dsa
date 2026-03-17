// 228. Summary Ranges
// https://leetcode.com/problems/summary-ranges/description/

function summaryRanges(nums: number[]): string[] {
  const result: string[] = []
  let rangeStart = nums[0]
  let currentNum = rangeStart

  const fillResult = (idx: number) => {
    if (rangeStart === currentNum) {
      result.push(rangeStart.toString())
    } else {
      result.push(`${rangeStart}->${currentNum}`)
    }
    rangeStart = nums[idx]
    currentNum = rangeStart
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 === currentNum) {
      currentNum = nums[i]
    } else {
      fillResult(i)
    }
  }

  if (rangeStart !== undefined) {
    fillResult(nums.length - 1)
  }

  return result
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7])) // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])) // ["0","2->4","6","8->9"]

export { }
