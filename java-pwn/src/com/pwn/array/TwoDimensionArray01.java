package com.pwn.array;

/**
 * @Author Yi
 * @Date 2024/5/20 21:43
 * @Usage: 二维数组
 * 1 使用
 * 1）二维数组动态初始化
 * 类型[][] 数组名 = new 数据类型[][]
 *
 * 2）声明式
 * int arr[][];//声明
 * arr = new int[3][2];//在开辟空间
 *
 * 3） 动态创建二维数组
 * 4）静态初始化 ： int[][] arr = {{1,2,3},{4,5,6},{7,8}};
 *
 * 2 二维数组在内存中
 *
 */
public class TwoDimensionArray01 {
    public static void main(String[] args) {
        int[][] arr = {{1,1,1,1,1},{1,2,2,2,1},{2,2,2,1,1}};

        //关于二维数组的关键概念
        //1
        System.out.println("二维数组的元素个数: " + arr.length);
        //2 二维数组的每个元素是一个一维数组
        //3 如果像访问 第3个一维数组的第2个值 arr[2][1]
        System.out.println("第3个一维数组的第2个值 :" + arr[2][1]);

        //遍历
        for (int i = 0; i < arr.length; i++) { //遍历二维数组的每个元素
            //arr[i].length 得到 对应的 一维数组的长度
            for (int j = 0; j < arr[i].length; j++) { // arr[i] 表示二维数组中等 第 i+1 个元素
                System.out.print(arr[i][j]+"\t");
            }
            System.out.println();
        }
    }
}
