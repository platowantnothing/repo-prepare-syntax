package com.yiyao.array;

/**
 * @Author Yi
 * @Date 2023/12/10 20:32
 * @Usage: Array details - 数组的使用细节
 * 1、数组是【多个】【相同类型】的数据的组合，实现对这些数据的统一管理
 * 2、数组中的元素可以是任何数据类型，包括基本类型和引用类型，但是不可混用
 * 3、数组创建后，如果没有赋值，有默认值， int 0, short 0, byte 0, long 0 , float 0.0, double 0.0, char \u0000,
 * boolean false, String null
 * 4、使用数组的步骤是： 1)声明数组并开辟空间 2)给数组各个元素赋值 3)使用数组
 * 5、数组下标从0开始
 * 6、数组下标必须再指定范围内使用，否则报: 下标越界异常,比如
 *  int[] arr = new int[5]; 有效下标0-4 <<< 即 数组的下标/索引 最小0 最大(数组大小-1)
 *
 * 7、数组属于引用类型，本质是对象
 */
public class ArrayDemo02 {
    public static void main(String[] args) {
        // point 1
        double[] arr1 = {1, 2, 3, 88.90, 6.6, 4};//int->double自动类型转换
        // point 2
        String[] arr2 = {"kjj", "beijing"};
        // point 3
        System.out.println("==========Arr3==========");
        short[] arr3 = new short[3];
        for (int i = 0; i < arr3.length; i++) {
            System.out.println(arr3[i]);
        }


        // point 6
        int[] arr4 = new int[4];
        //System.out.println(arr4[5]); //Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 5

        //
    }
}
