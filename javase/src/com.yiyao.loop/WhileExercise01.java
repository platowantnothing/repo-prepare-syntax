package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/10/18 22:50
 * @Usage:
 */
public class WhileExercise01 {
    public static void main(String[] args) {
        // 打印1-200 能被3整除的数、
        int start = 1;
        int end = 200;
        while (start <= end) {
            if(start % 3 == 0) {
                System.out.println("hello, and num is : " + start);
            }
            start++;
        }
        System.out.println("=========================");
        //打印 40 -200 的偶数
        printEvenNumber();

    }

    private static void printEvenNumber() {
        int start = 40;
        int end = 200;
        while (start <= end) {
            if (start % 2 == 0) {
                System.out.println("hello, even number is : " + start);
            }
            start++;
        }
    }
}
