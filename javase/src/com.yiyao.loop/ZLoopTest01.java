package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/12/3 18:04
 * @Usage:
 */
public class ZLoopTest01 {
    //某人有100，000元，每次经过一次路口，需要缴费，规则如下
    // 1）当现金 > 50000, 每次交5%
    // 2）当现金 <= 50000, 每次交1000
    // 变成计算该人可以经过多少次路口，要求: 使用while break

    /**
     * 编程分析:
     * 1 循环判断条件 100 000， 没钱就不循环了
     * 2 交钱是 if else 判断
     */
    public static void main(String[] args) {
//        int count = 0; //定义次数
//        double money= 100000.00;;
//        while (money > 0) {
//            if (money > 50000.00) {
//                money = money - (money * 0.05);
//                count++;
//            } else if (money <= 50000.00) {
//                money -= 1000.00;
//                count++;
//            } else if (money < 0) {
//                break;
//            }
//        }
//        System.out.println("次数: " + count);

        int count = 0; //定义次数
        double money = 100000.00;
        while (true) {
            if (money > 50000) {
                money *= 0.95;
                count++;
            } else if (money >= 1000) {
                money -= 1000;
                count++;
            } else {//一定是小于1000
                break;
            }
        }
        System.out.println(count);

    }

}
