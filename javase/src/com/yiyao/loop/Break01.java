package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/10/22 15:29
 * @Usage:在·
 *  1 Intro
 *   跳转控制语句 - break
 *
 *   需求： 随机生成1-100的一个数，知道生成了97这个数，看看你一共用了几次？
 *   思路分析：循环，但是循环的次数并不清楚。 break，当某个条件满足，终止循环，通过该需求可以说明其他流程控制的必要性，比如 break
 *
 *  2 基本语法。用于终止某个语句块的执行，一般使用在switch或者循环 (for, while, do while)
 */
public class Break01 {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            // random() 返回带正号的double值, 该值大于等于0.0且小于1.0
            System.out.println((int) (Math.random() * 100) + 1);

        }
    }
}
