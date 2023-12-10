package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/12/3 18:46
 * @Usage:
 */
public class ZLoopTest04 {
    public static void main(String[] args) {
        // 6 输出1-100之间的不能被5整除的数，每5个一行
        int count = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 5 != 0) {
                System.out.print(i + " ");
                count++;
                if (count % 5 == 0) System.out.println();
            }
        }

        System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        //7 输出小写的 a-z
        // 思路： 考察对 a-z编码 和 for 循环的使用
        /*  1. 'b'='a'+1, 'c'='b'+1  <<< ASCII
            2. 使用 for 循环
        */
        excerciies07();

    }

    private static void excerciies07() {
        for (char c1 = 'a'; c1 < 'z'; c1++) {
            System.out.println(c1);
        }
        System.out.println("==================");
        for (char c2 = 'Z'; c2 >= 'A'; c2--) {
            System.out.println(c2);
        }
    }
}
