package com.pwn.array;

import java.util.Random;

/*
 * 随机生成 10 个整数(1 ~100) 保存到数组, 并倒序打印以及求平均值、求最大值和最大值的下表、并查找是否有8
 * */
public class ZArrayHomework03 {
    public static void main(String[] args) {
        // create an array
        int[] arr = new int[10];

        // random generate number
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) ((Math.random() * 100) + 1);
        }
        int sum = 0;

        System.out.println("=========asc=========");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]+"\t");
            sum +=arr[i];

        }
        System.out.println();
        System.out.println("sum = " + sum);
        System.out.println("avg = " + (sum/arr.length));
        System.out.println();
        System.out.println("=========desc=========");
        // print desc
        for (int i = 0, j=arr.length-1; i < arr.length; i++) {
            System.out.print(arr[j]+"\t");
            j--;
        }
        System.out.println("=========max=========");
        int max=-1;
        for (int i = 0; i < arr.length; i++) {
            if(max<arr[i]) {
                max = arr[i];
                System.out.println("max:" +max);
                System.out.println("max index:"+i);
            }
        }
    }

}
