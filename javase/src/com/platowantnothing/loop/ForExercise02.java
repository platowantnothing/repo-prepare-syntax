package com.platowantnothing.loop;

/**
 * @Author Yi
 * @Date 2023/10/16 22:53
 * @Usage:
 */
public class ForExercise02 {
    public static void main(String[] args) {
        // 化繁为简
        /**
         * 0 + 5 = 5
         * 1 + 4 =
         * 2 + 3 =
         * 3 + 2 =
         */
        // 先死后活
        int n = 0;
        int m = 10;
        for (int i = n; i <= m; i++) {
            System.out.println(i + "+" + (m - i) + "=5");
        }
    }
}
