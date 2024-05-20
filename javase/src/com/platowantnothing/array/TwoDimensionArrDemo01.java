package com.platowantnothing.array;

/**
 * @Author Yi
 * @Date 2024/5/20 22:52
 * @Usage:
 */
public class TwoDimensionArrDemo01 {
    public static void main(String[] args) {
//        int[][] arr = new int[10][];
//        for (int i = 0; i < arr.length; i++) {
//            arr[i]=new int[i+1];
//
//            for (int j = 0; j < arr[i].length; j++) {
//                arr[i][j] = i+1;
//            }
//        }
//
//        for (int i = 0; i < arr.length; i++) {
//            for (int j = 0; j < arr[i].length; j++) {
//                System.out.print(arr[i][j]+"\t");
//            }
//            System.out.println();
//        }
        int[] arr = new int[2];// 长度
        System.out.println(arr.length);
        arr[2] = 1;// 索引越界； 因为new int[2]动态初始化，指定的是数组的长度为2，可以存放2个元素； arr[2]指的是数组里的第3个元素
    }

}
