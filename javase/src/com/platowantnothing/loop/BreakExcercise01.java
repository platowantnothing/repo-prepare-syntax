package com.platowantnothing.loop;

/**
 * @Author Yi
 * @Date 2023/11/5 11:14
 * @Usage:
 */
public class BreakExcercise01 {
    public static void main(String[] args) {
        // test demo
        for (int i = 0; i < 10; i++) {
            if (i == 3) break;
            System.out.println("i: " + i);
        }
        System.out.println("Exist the loop for, and xxxx");
    }
}