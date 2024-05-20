package com.platowantnothing.array;

/**
 * @Author Yi
 * @Date 2024/5/20 22:03
 * @Usage: 二维数组列数不确定 + 声明式使用二维数组
 */
public class TwoDimensionArray02 {
    public static void main(String[] args) {
        int[][] arr;
        arr = new int[3][]; //列数不确定
        for (int i = 0; i < arr.length; i++) {
            //给每个一维数组开空间
            //如果没有给一维数组 new, 那么 arr[i] 为null
            arr[i] = new int[i + 1];

            //遍历1维数组，给1维数组中的每个元素赋值
            for (int j = 0; j < arr[i].length; j++) {
                arr[i][j] = i + 1;
            }
        }
        //遍历这个二维数组
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + "\t");
            }
            System.out.println();
        }

    }
}
