var removeElement = function(nums, val) {
    let len = nums.length;
    let i = 0 , j = len - 1, count = 0;
    for(; i <= j; i++) {
        if(nums[i] == val) {
            for(; j >= i; j--) {
                ++count;

                if(nums[j] != val) {
                    let temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                    j--;
                    break;
                }
            }
           }
    }
    return [len - count,nums];
};

let query = removeElement([2],2);
console.log(query);

































/*#include <bits/stdc++.h>
using namespace std;
void call() {
    string s;
    cin >> s;
    
}
int main()
{
    int t;
    cin >> t;
    for(int i = 1; i <= t; i++) {
        call();
    }
    
    

    return 0;
}
*/
