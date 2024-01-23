package com.yiyao.array;

/**
 * @Author Yi
 * @Date 2023/12/18 22:00
 * @Usage: 数组分配机制
 * 1 基本数据类型赋值
 */
public class ArrayAssign01 {
    public static void main(String[] args) {
        //基本数据类型赋值 , 拷贝是 值拷贝
        // n2 的变化不会影响 n1
        int n1 = 10;
        int n2 = n1;
        n2 = 80;
        System.out.println("n1:" + n1);
        System.out.println("n2:" + n2);

        System.out.println("-------------");

        //数组 引用传递, 赋的值是地址, 赋值方式为引用传递
        int[] arr1 = {1, 2, 3};
        int[] arr2 = arr1;// 把 arr1 赋给 arr2
        arr2[0] = 10;
        System.out.println("arr1 ....");
        for (int i = 0; i < arr1.length; i++) {
            System.out.println(arr1[i]);
        }
    }
}
