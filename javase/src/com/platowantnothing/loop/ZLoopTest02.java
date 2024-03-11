package com.platowantnothing.loop;

import java.util.Scanner;

/**
 * @Author Yi
 * @Date 2023/12/3 18:16
 * @Usage:
 */
public class ZLoopTest02 {
    public static void main(String[] args) {
        // 实现判断一个证书属于哪个范围 大于0； 小于0； 等于0
       test2();

        //判断一个年份是否为闰年
        test3();


    }

    private static void test3() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("please input a year number: ");
        int year = scanner.nextInt();
        if (year % 4 == 0) {
            System.out.println("闰年");
        } else {
            System.out.println("不是闰年");
        }
    }

    private static void test2() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("please input a number: ");
        double number = scanner.nextDouble();
        if (number > 0) {
            System.out.println("大于0");
        } else if (number == 0) {
            System.out.println("等于0");
        } else if (number < 0) {
            System.out.println("小于0");
        }
    }
}
