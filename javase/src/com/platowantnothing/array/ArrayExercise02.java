package com.platowantnothing.array;

/**
 * @Author Yi
 * @Date 2023/12/10 20:46
 * @Usage:
 */
public class ArrayExercise02 {
    public static void main(String[] args) {
        // 2 请求出一个数组int[] 最大值， 和对应的下标
        /**
         * 思路分析:
         * 1 创建数组
         *
         */
        int[] arr = {4, -1, 9, 20, 23};
        int maxNumber = 0;
        int index = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > maxNumber) {
                maxNumber = arr[i];
                index = i;
            }
        }
        System.out.println(maxNumber);
        System.out.println(index);
    }
}

