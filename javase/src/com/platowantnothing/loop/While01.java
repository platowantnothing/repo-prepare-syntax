package com.platowantnothing.loop;

/**
 * @Author Yi
 * @Date 2023/10/16 22:59
 * @Usage:
 *
 * 1. 基本语法
 *  循环变量初始化;
 *  while (循环条件) {
 *      循环体(语句);
 *      循环变量迭代;
 *  }
 *
 * 2. 流程图
 *  循环变量初始化 -> 循环条件判断 (true) -> 走循环体； -> 循环变量迭代 -> 循环条件判断 ...
 *                 循环条件判断 (false) -> while 循环结束
 *
 */
public class While01 {

    public static void main(String[] args) {
        int i = 0; //循环变量初始化
        while (i <= 10) { //循环条件
            System.out.println("hello, Yiyao" + i);//执行语句
            i++;//循环变量迭代
        }
        System.out.println("i=" + i);
        System.out.println("exit loop,....");
    }

}
