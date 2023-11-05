package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/10/22 15:29
 * @Usage:
 */
public class Break01 {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            // random() 返回带正号的double值, 该值大于等于0.0且小于1.0
            System.out.println((int) (Math.random() * 100) + 1);

        }
    }
}
