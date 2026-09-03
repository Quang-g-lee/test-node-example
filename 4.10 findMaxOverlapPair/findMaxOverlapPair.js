function findOverlapLength(str1, str2) {
    let maxLength = 0;

    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j <= str1.length; j++) {
            const substring = str1.slice(i, j);

            if ( str2.includes(substring) && substring.length > maxLength ) {
                maxLength = substring.length;
            }
        }
    }

    return maxLength;
}

function largestSubstringOverlap(strings, k) {
    let largestOverlap = 0;
    let result = [];

    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            const overlapLength = findOverlapLength( strings[i], strings[j] );

            // Chỉ nhận phần trùng có độ dài ít nhất là k
            if ( overlapLength >= k && overlapLength > largestOverlap) {
                largestOverlap = overlapLength;
                result = [strings[i], strings[j]];
            }
        }
    }

    return result;
}

module.exports = largestSubstringOverlap;