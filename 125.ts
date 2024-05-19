// https://leetcode.com/problems/valid-palindrome/description/

function isLetter(s) {
    return s.match(/[a-z0-9]/i);
  }
  
  function isPalindrome(s: string): boolean {
      let i = 0;
      let j = s.length - 1;
  
      while(i < j) {
          const f = s[i].toLowerCase();
          const e = s[j].toLowerCase();
  
          if (!isLetter(f)) {
              i++;
              continue;
          }
  
          if (!isLetter(e)) {
              j--;
              continue;
          }
  
          if (f !== e) {
              return false;
          }
  
          i++;
          j--;
      }
  
      return true;
  };