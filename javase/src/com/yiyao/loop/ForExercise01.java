package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/10/16 22:44
 * @Usage:
 */
public class ForExercise01 {
    public static void main(String[] args) {
        // 化繁为简 思想
        // 1 完成 1-100 的输出
        // 2 在输出的过程中，进行过滤，只输出9的倍数
        // 3 统计个数， 定义一个变量；当条件满足时， count++
        // 4 总和， 定义一个变量 int sum = 0; 当条件满足时，累计 sum += i；

        /**
         * 先死后活 -思想
         * 现在是打印 1~100； 为了适应更好的需求，把范围的开始的值&结束的值，做成变量
         * start
         * end
         * multiNum
         */
        int count = 0; //表示统计个数的变量
        int sum = 0; // 总和 累积
        int start = 1; //变量改造
        int end = 100; //变量改造
        int multiNum = 5; //变量改造 - 倍数 做成变量
        for (int i = start; i <= end; i++) {
            if (i % multiNum == 0) {
                System.out.println("i: " + i);
                count++;
                sum += i;
            }
        }
        System.out.println("count is : "  + count);
        System.out.println("sum is : "  + sum);
    }
}
