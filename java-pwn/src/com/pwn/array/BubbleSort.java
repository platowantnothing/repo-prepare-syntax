package com.pwn.array;


import java.util.Arrays;

/**
 * 排序:
 * 1) 内部排序，需要处理的数据加载到内部存储器中进行排序 like: 交换式排序、选择式排序、插入式排序
 * 2)　外部排序: 数据量大，没办法加载到内存中，需要使用外部存储进行排序, like : 合并排序法、直接合并排序法
 * <p>
 * 冒泡排序:
 */
public class BubbleSort {
    public static void main(String[] args) {
        // [24,69,80,57,13]
        int[] arr = {24, 69, 80, 57, 13, 111, -10};

        /*
        1st: sorted the 1st max number and put it in last position
        1) [24,69,80,57,13]
        2) [24,69,80,57,13]
        3) [24,69,57,80,13]
        4) [24,69,57,13,80]
        */


        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - 1; j++) {
                int temp;
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            System.out.println("round " + (i + 1) + ", the res: " + Arrays.toString(arr));

        }




/*        for (int j = 0; j < 4; j++) {
            int temp;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        System.out.println("round 1, the res: " + Arrays.toString(arr));

        for (int j = 0; j < 3; j++) {
            int temp;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        System.out.println("round 2, the res: " + Arrays.toString(arr));

        for (int j = 0; j < 2; j++) {
            int temp;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        System.out.println("round 3, the res: " + Arrays.toString(arr));


        for (int j = 0; j < 1; j++) {
            int temp;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        System.out.println("round 4, the res: " + Arrays.toString(arr));
    }*/


    }
}
