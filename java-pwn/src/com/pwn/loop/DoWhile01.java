package com.pwn.loop;

/**
 * @Author Yi
 * @Date 2023/10/18 22:57
 * @Usage:
 *  1. 语法:
 *      循环变量初始化;
 *      do {
 *          循环体(语句);
 *          循环变量迭代;
 *      }while(循环条件);
 *  2. 基本思想： 先执行再判断, 至少执行一次!!!
 *  3. while 和 do.while 的区别 : 要账 , 例如展示菜单(至少展示一次
 *  4. 执行流程 :
 *      循环变量初始化 -> 循环体; 循环变量迭代 -> 循环判断 -> 如果为真, -> 循环体; 循环变量迭代 -> 循环判断
 *
 *      */
public class DoWhile01 {
    public static void main(String[] args) {
        int i = 1;
        do{
            System.out.println("hello world, " + i);
            i++;
        }while (i <= 10);
        System.out.println("i is :" + i);
    }
}
