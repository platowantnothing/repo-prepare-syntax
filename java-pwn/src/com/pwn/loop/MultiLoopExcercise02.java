package com.pwn.loop;

/**
 * @Author Yi
 * @Date 2023/10/22 14:26
 * @Usage:
 */
public class MultiLoopExcercise02 {
    public static void main(String[] args) {
        // 九九乘法表打印
        for (int i = 1; i <= 9; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + "*" + i + "=" + (i*j) + "\t");
            }
            System.out.println();
        }
    }
}
