class MergeStringsAlternaty {
    public String mergeAlternately(String word1, String word2) {
        String finalWord = "";
        int first = word1.length();
        int second = word2.length();

        for(int i = 0; i < Math.max(first, second); i++) {
            if(i < first) {
                finalWord += word1.charAt(i);
            }

            if(i < second) {
                finalWord += word2.charAt(i);
            }
        }

        return finalWord;
    }
}