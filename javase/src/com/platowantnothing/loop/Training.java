package com.platowantnothing.loop;

/**
 * @Author Yi
 * @Date 2023/10/22 15:11
 * @Usage:
 */
public class Training {
    public static void main(String[] args) {
        //打印
        int totalLayer = 5;
        //打印空心金字塔
        for (int i = 1; i <= totalLayer; i++) { // i 表示层数
            //在输出*之前，还要输出 对应空格 = 总层数 - 当前层
            for (int k = 1; k <= totalLayer - i; k++) {
                System.out.print(" ");
            }

            // 控制打印每层的*个数
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }
}
