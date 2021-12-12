function evenfy_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenfy(num);

    }
}
function evenfy(num) {
    if (num % 2 == 0) {
        console.log(num, ': Even number.');
    }
    else {
        console.log(num, ': Odd number.');
    }
}
nums = [5, 12, 89, 45, 18, 8];
friends_age = [27, 2, 29, 19, 18, 23];

evenfy_all(nums);
evenfy_all(friends_age);
