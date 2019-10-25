import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Demo5 {
    public int[] generate(int row, int column) {

        List<List<int[]>> list = new ArrayList<List<int[]>>(row);
        for (int i = 0; i < row; i++) {
            list.add(new ArrayList<int[]>(i + 1));
        }
        int[] arr0 = new int[]{1};
        list.get(0).add(arr0);
        list.get(1).add(arr0);
        list.get(1).add(arr0);
        for (int i = 2; i < row; i++) {
            List nums = list.get(i);
            nums.add(new int[]{1});
            for (int j = 1; j < i; j++) {
                int[] num = new Demo5().add(list.get(i - 1).get(j - 1) , list.get(i - 1).get(j));
                nums.add(num);
                if (i == row - 1 && j == column - 1) {
                    return num;
                }
            }
            nums.add(new int[]{1});
        }
        return arr0;
    }

    public int[] add(int[] num1, int[] num2) {

        int len = 1 + Math.max(num1.length, num2.length);
        int[] sum = new int[len];

        int overflow = 0;
        for (int i = 0; i < len ; i++) {
            sum[i] = (i>num2.length-1 ? 0 : num2[i]) + (i>num1.length-1 ? 0 : num1[i]) + overflow;
            if (sum[i] >= 10) {
                sum[i] = sum[i] % 10;
                overflow = 1;
            } else {
                overflow = 0;
            }
        }
        if (sum[len-1] == 0) {
            int [] newSum = new int[len-1];
            for(int j = 0; j < newSum.length; j++) {
                newSum[j] = sum[j];
            }
            sum = newSum;
        }
        return sum;
    }

    public static void main(String[] args) {
        Demo5 s = new Demo5();
//        System.out.println("--------");
//        int[] a1 = new int[]{1,2,3,9,1,4};
//        int[] a2 = new int[]{2,3,4,5};
//        int[] sum = s.add(a1, a2);

        int[] sum = s.generate(50, 25);
        for(int j = sum.length - 1; j >= 0; j--) {
            System.out.print(sum[j]);
        }
    }
}