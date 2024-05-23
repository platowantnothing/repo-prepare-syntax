package com.pwn.loop;

import java.util.Scanner;

/**
 * @Author Yi
 * @Date 2023/12/3 18:22
 * @Usage:
 */
public class ZLoopTest03 {
    // 判断一个整数是否是水仙花数
    // 水仙花数: 一个三位数， 其各个位上数字立方和等于其本身 例如: 153 = 1*1*1 + 3*3*3 + 5*5*5
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("please input a number: ");
        int number = sc.nextInt();

//        System.out.println(153%100%10);
//        System.out.println(((153%100)-(153%100)%10)/10);1
//        System.out.println((153-(153%100))/100);
        int bai = (number - (number % 100)) / 100;
        int shi = ((number % 100) - (number % 100) % 10) / 10;
        int ge = number % 100 % 10;
        if (number == bai * bai * bai + shi * shi * shi + ge * ge * ge) {
            System.out.println("yes");
        } else System.out.println("no");
    }
}
