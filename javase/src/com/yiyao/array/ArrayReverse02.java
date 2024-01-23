package com.yiyao.array;

/**
 * @Author Yi
 * @Date 2024/1/23 22:48
 * @Usage: 数组反转2
 * arr{11,22,33,44,55,66} -> {66,55,44,33,22,11}
 */
public class ArrayReverse02 {
    public static void main(String[] args) {
        //使用逆序赋值的方式
        //1先创建一个新的数组 arr2 , 大小 arr.length
        //2逆序遍历 arr, 将 每个元素拷贝到 arr2 的元素中 (顺序拷贝)

        int[] arr = {11, 22, 33, 44, 55, 66};
        System.out.println("arr addr:" + arr);
        int[] arr2 = new int[arr.length];
        System.out.println("arr2 addr:" + arr2);
        for (int i = arr.length - 1, j = 0; i >= 0; i--, j++) {
            arr2[j] = arr[i];
        }
        arr = arr2;
        System.out.println("arr new addr:" + arr);
        System.out.println("----------");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "\t");
        }
    }
}
