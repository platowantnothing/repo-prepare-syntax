package com.platowantnothing.array;

/**
 * @Author Yi
 * @Date 2024/5/20 22:52
 * @Usage:  二维数组的使用细节和注意事项
 *  0，回顾 一维数组声明方式: int[] x, int x[]
 *  1. 二维数组的声明方式有 int[][] y || int[] y[] || int y[][]
 *  2. 二维数组实际上是由多个一维数组组成的，它的各个一维数组的长度可以相同，也可以不相同。 << 列数不等的二维数组
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
