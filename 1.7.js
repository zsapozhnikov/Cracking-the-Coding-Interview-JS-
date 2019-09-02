/*
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
Hints:#92, #110
*/
/**
 * @param {array} m
 * @returns {string}
 */
function rotateMatrix(m) {
    const size = m.length;
    if (size !== m[0].length) return '';

    for (let i = 0; i < size; i++) {
        let innerSize = m[i].length - 1;

        let ind1 = innerSize - i;
        for (let j = i; j < ind1; j++) {
            let ind2 = innerSize - j;

            let tempTop = m[i][j];
            m[i][j] = m[ind2][i];
            m[ind2][i] = m[ind1][ind2];
            m[ind1][ind2] = m[j][ind1];
            m[j][ind1] = tempTop;
        }
    }

    return m;
}

console.log(rotateMatrix([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]));// [[1,1,1,1],[2,2,2,2]...[4,4,4,4]]
console.log(rotateMatrix([[2,2,2],[4,4,4],[3,3,3]]));// [[3,4,2],[3,4,2],[3,4,2]]
