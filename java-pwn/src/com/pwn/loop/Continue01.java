package com.pwn.loop;

/**
 * @Author Yi
 * @Date 2023/12/3 17:24
 * @Usage: Contiune - 跳转控制语句
 * 1 基本介绍
 * 1) continue 语句用于结束本次循环，继续执行下一次循环
 * 2) continue 语句出现在多层嵌套的循环语句体中时，可以通过标签指明要跳过的是哪一层循环，这个和前面的标签使用的规则一样
 * <p>
 * 2 基本语法
 * {    ....
 * contiune;
 * ....
 * }
 * 以while使用continue为例，画出示意图
 */
public class Continue01 {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 4) {
            i++;
            if (i == 2) {
                continue;
            }
            System.out.println("i: " + i);
        }
    }
}
