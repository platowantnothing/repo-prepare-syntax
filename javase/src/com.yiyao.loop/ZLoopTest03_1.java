package com.yiyao.loop;

import java.util.Scanner;

/**
 * @Author Yi
 * @Date 2023/12/3 18:22
 * @Usage:
 */
public class ZLoopTest03_1 {
    // 判断一个整数是否是水仙花数
    // 水仙花数: 一个三位数， 其各个位上数字立方和等于其本身 例如: 153 = 1*1*1 + 3*3*3 + 5*5*5
    public static void main(String[] args) {
//        n 的百位: n/100
//        n 的十位: n % 100 / 10
//        n 的个位: n % 10
        int num = 159;
        System.out.println("百位: " + num / 100);
        System.out.println("十位: " + num % 100 / 10);
        System.out.println("各位: " + num % 10);
    }
}
