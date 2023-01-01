// Problem 1 //

function reverse(str, len) {
            if (len === str.length) {
                return;
            }
            reverse(str, len + 1);
            document.write(str[len]);
        }

// Problem 2 //

const palidrome = (str) => {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1))
    return false;
}

// Problem 3 //

const flatTheArray = (arr) => {
    const flat = [];
    arr.forEach(item => {
      if (Array.isArray(arr)) {
        flat.push(...flatten(arr));
      } else {
        flat.push(arr);
      }
    });
    return flatTheArray;
  }

