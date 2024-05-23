package com.pwn.array;

/**
 * @Author Yi
 * @Date 2024/5/20 21:43
 * @Usage: 杨辉三角
 * 1
 * 1 1
 * 1 2 1
 * 1 3 3 1
 * 1 4 6 4 1
 * i j        i  j
 * arr[2][1] = arr[1][0] + arr[1][1]
 *  arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
 */
public class YangHui {
    public static void main(String[] args) {
        int[][] arr;
        // declare
        arr = new int[10][];
        //添加元素
        for (int i = 0; i < arr.length; i++) {
            arr[i] = new int[i + 1];

            for (int j = 0; j < arr[i].length; j++) {
                if (j == 0 || j == (arr[i].length - 1)) {
                    arr[i][j] = 1;
                } else {
                    // 21           11   10
                    arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
                }
            }
        }

        //遍历结果
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + "\t");
            }
            System.out.println();
        }

    }
}
