var firstMissingPositive = function(nums) {

    var possible = [];
    for (var i = 0; i < nums.length + 2; i++) {
      possible.push(i);
    }
  
    for (var i = 0; i < nums.length; i++) {
      var number = nums[i];
      if (number <= nums.length && number > 0) {
        possible[number] = -1;
      }
    }
    for (var i = 0; i < possible.length; i++) {
      if (possible[i] > 0) {
        return possible[i]
      }
    }
  
  };
  
console.log(firstMissingPositive([0,-1,2,3,6]))
  