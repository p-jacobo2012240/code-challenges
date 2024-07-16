class GreatestDivisor {
    public String gcdOfStrings(String str1, String str2) {
        int sizeOne = str1.length();
        int sizeTwo = str2.length();

        if(!(str1 + str2).equals(str2 + str1)) {
            return "";
        }

        return str1.substring(0, compareDivisor(sizeOne, sizeTwo));        
    }

    public int compareDivisor(int sizeOne, int sizeTwo) {
        while(sizeTwo != 0) {
            int temp = sizeTwo;
            sizeTwo = sizeOne % sizeTwo;
            sizeOne = temp;
        }
        return sizeOne;
    }
}