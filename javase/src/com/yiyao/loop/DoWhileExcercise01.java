package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/10/18 23:07
 * @Usage:
 */
public class DoWhileExcercise01 {
    public static void main(String[] args) {
        //print 1 -100
        //print1To100();

        //sum 1 -100
        //getSum1To100();

        // 1-200 can be divide by 5, not 3
        //divideBy5From1To200();

        // 如果A 不还钱， B 五连鞭, 直到A 说还钱为止
        payBackAfter5Beats();

    }

    private static void payBackAfter5Beats() {
        int count = 1;
        do{
            System.out.println("B ack: \"还不还钱\"? y/n");
            System.out.println("beat count, " + count);
            count++;
        } while (count <= 5);
        System.out.println("B pay back");
    }

    private static void divideBy5From1To200() {
        int start = 1;
        int end = 200;
        do {
            if (start % 5 == 0 && start % 3 != 0) {
                System.out.println("hello, num = " + start);
            }
            start++;
        }while (start <= end);
        System.out.println("END!");
    }

    private static void getSum1To100() {
        int i = 1;
        int sum = 0;
        int end = 100;
        do {
            System.out.println("print num is : " + i);
            sum += i;
            i++;
        } while (i <= end);
        System.out.println("sum : " + sum);
        System.out.println("exit...");
    }

    private static void print1To100() {
        int i = 1;
        int end = 100;
        do {
            System.out.println("print num is : " + i);
            i++;
        } while (i <= end);
        System.out.println("exit...");
    }
}
