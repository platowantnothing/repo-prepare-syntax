package com.pwn.array;

import java.util.Scanner;

/**
 * @Author Yi
 * @Date 2023/12/10 18:14
 * @Usage: 定义数组
 * 1、使用方式1 - 动态初始化
 * 数组的定义 :  数据类型 数组名[] = new 数据类型[大小]; <
 *          << int a[] = new int[5];// 创建一个int类型的数组, 数组名a, 存放5个int
 * 数组的使用/引用/获取数组元素 : 数组名[下标/索引] 比如: 你要使用a数组的第3个数 a[2]
 * <p>
 * 数组 类似一个层楼， 其中一个元素类似楼里的一个房间。
 *
 *
 * 2、 使用方式2 - 动态初始化
 * 语法： 数据类型 数组名[]; // 数据类型[] 数组名; <<<  int a[]; // int[] a
 * 创建数组: 数组名 = new 数据类型[大小]; e.g. a = new int[10]
 *
 * 3、 使用方式3 - 静态初始化
 * 语法: 数据类型 数组名[] = {元素值,原数值, ...}
 * 使用场景: 如果知道数组有多少个元素
 * int a[] = {1,2,3,4,5} 相当于: int a[] = new int[9]; a[0]=1; ...
 * 写法1:静态方式，避免重复写数组元素，适合元素值不多的情况; 写法2，动态赋值
 *
 */
public class ArrayDemo01 {
    // 快速入门案例， ArrayTest()
    // 循环输入5个数，保存到 double[]

    public static void main(String[] args) {
        /**
         * Sample 1: 使用方式1 - 动态初始化
         */
        // 1 create double array
        double scores[] = new double[5];
        Scanner sc = new Scanner(System.in);
        // 2 loop to input
        for (int i = 0; i < scores.length; i++) {
            System.out.println("Pls input the value of index " + (i + 1));
            scores[i] = sc.nextDouble();
        }

        // 3 输出， 遍历数组
        for (int i = 0; i < scores.length; i++) {
            System.out.println("output is : " + scores[i]);
        }


        /**
         *  Sample 2: 使用方式2 - 动态初始化
         *  先声明再分配空间
         */
        sample2();

    }


    private static void sample2() {
        int a[]; // 在内存里面，有一个变量，是一个空值 null，还没有给它分配空间; <<< 声明一个数组
        a = new int[3]; // 这一步给 a 分配了存储空间;

    }

}
