// Write out the "inner intervals" of an array
// ex: [10, 20, 30]
// you would want to return 11 - 19, 21 - 29 in string form 
// (not actually printing out each number, just these hyphenated ranges)

public static void printInterval(int[] arr) {
    StringBuffer result = new StringBuffer();

    for (int i = 1; i < arr.length; i++) {
        int start = arr[i-1] + 1;
        int end = arr[i] - 1;
        boolean appended = false;
        if (end - start >= 0 ) {
            result.append(start);
            appended = true;
        }
        if (end - start > 0) {
            result.append("-").append(end);
        }
        if (appended) {
            result.append(",");
        }

        result.setLength(sb.length()-1); // remove extra comma
        System.out.println(result);
    }
}