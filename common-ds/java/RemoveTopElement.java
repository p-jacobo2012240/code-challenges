class Solution {
    public int removeElement(int[] nums, int val) {
        int match = 0;
        for (int i = 0; i < nums.length; i++) {
            if(nums[i] != val){
                nums[match] = nums[i];
                match++;
            }
        }
        return match;
    }
}