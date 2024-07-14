package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/14 20:22
 * @Usage:
 */
public class RecursionExercise01 {
    public static void main(String[] args) {
        TT t = new TT();
//        System.out.println("n =7, the fibonacci is : " + t.fibonacci(-1));

        int peaches = t.monkeyEatPeach(10);
        System.out.println("第10天，还剩:" + peaches + "个桃子");

    }
}

class TT {
    // 使用递归求出斐波那契数列 1，1，2，3，5，6，13，...
    public int fibonacci(int n) {
        if (n >= 1) {
            if (n == 1 || n == 2) {
                return 1;
            } else {
                return fibonacci(n - 1) + fibonacci(n - 2);
            }
        } else {
            return -1;
        }
    }


    // 猴子吃桃子

    /**
     * 逆推
     * day10, peach = 1;
     * day9, peach = (day10 + 1) * 2
     * day8, peach = (day8 + 1) * 2
     *
     * @return
     */
    public int monkeyEatPeach(int day) {
        if (day == 10) {
            return 1;
        } else if (day >= 1 && day <= 9) {
            return (monkeyEatPeach(day + 1) + 1) * 2;
        } else {
            System.out.println("Day is between 1 and 10");
            return -1;
        }
    }
}
