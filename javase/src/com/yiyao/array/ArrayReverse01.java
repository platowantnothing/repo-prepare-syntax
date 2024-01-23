package com.yiyao.array;

/**
 * @Author Yi
 * @Date 2024/1/23 22:48
 * @Usage: 数组反转
 * arr{11,22,33,44,55,66} -> {66,55,44,33,22,11}
 */
public class ArrayReverse01 {
    public static void main(String[] args) {
/*        int[] arr = {11,22,33,44,55,66};
        for (int i = 0; i < arr.length/2; i++) {
            arr[i] = arr[arr.length-(1+i)];
        }
        System.out.println("----");
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }*/
        int[] arr = {11, 22, 33, 44, 55, 66};
        //优化
        int temp = 0;
        int len = arr.length;
        for (int i = 0; i < len / 2; i++) {
            temp = arr[len - (1 + i)];
            arr[len - (1 + i)] = arr[i];
            arr[i] = temp;
        }
        System.out.println("------------");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "\t");
        }
    }
}
