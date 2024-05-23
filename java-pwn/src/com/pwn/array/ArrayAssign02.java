package com.pwn.array;


/**
 * @Author Yi
 * @Date 2023/12/18 22:00
 * @Usage: 数组拷贝
 * 1编写代码实现数组拷贝 内容复制
 * 将int[] arr1 = {10,20,30} 拷贝到数组2, 要求数据空间是独立的
 */
public class ArrayAssign02 {
    public static void main(String[] args) {
        int[] arr1 = {10,20,30};
        int[] arr2 = new int[3];//int[] arr2 = new int[arr1.length]; 开辟新的内存空间
        //值拷贝
        for (int i = 0; i < arr1.length; i++) {
            arr2[i] = arr1[i];
            System.out.println("arr1["+i+"]  :"+arr1[i]);
            System.out.println("arr2["+i+"]  :"+arr2[i]);
        }
        System.out.println(arr1);
        System.out.println("=============");
        System.out.println(arr2);
    }
}
