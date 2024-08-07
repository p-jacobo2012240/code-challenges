class Solution {
    public String intToRoman(int num) {

        StringBuilder result = new StringBuilder();
        final String[] romans = {
            "M", "CM", "D", "CD", "C", 
            "XC", "L", "XL", "X", "IX", "V", "IV", "I"
        };
        
        final int[] decimals = {
            1000, 900, 500, 400, 100, 
            90, 50, 40, 10, 9, 5, 4, 1
        };

        for(int i=0; i < decimals.length; i++) {

            while(num >= decimals[i]) {
                result.append(romans[i]);
                num -= decimals[i];
            }
        }

        return result.toString();
    }
}