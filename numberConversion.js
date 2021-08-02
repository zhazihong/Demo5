/**
 * 进制转换
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * https://www.nowcoder.com/practice/2cc32b88fff94d7e8fd458b8c7b25ec1?tpId=188&&tqId=38624&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking
 */
/**
 * 进制转换
 * @param M int整型 给定整数
 * @param N int整型 转换到的进制
 * @return string字符串
 */
 function solveFun( M ,  N ) {
    // write code here
    const keyMap = {10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'};
    let stack = [];
    let absFlag = '';
    if (M < 0) {
        absFlag = '-';
        M = Math.abs(M);
    }
    while(M >= N) {
        stack.push(M % N);
        M = M / N | 0;
    }
    stack.push(M);
    stack = stack.map((val) => {
        if (val > 9) {
            val = keyMap[val];
        }
        return val;
    });
    return absFlag + stack.reverse().join('');
}

console.log(solveFun(-4, 3));