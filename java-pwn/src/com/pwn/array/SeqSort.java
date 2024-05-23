package com.pwn.array;


import java.util.Scanner;

/**
 * 顺序查找和二分查找
 * <p>
 * 顺序查找，从0~arr.length-1, 相当于遍历查找
 * <p>
 * 二分查找， 有序的数组, 分成两边，根据数的大小不停二分
 */
public class SeqSort {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();

        //顺序查找 ： 上海，北京，成都，安徽
        String[] name = {"shanghai", "beijing", "chengdu", "xian"};
        System.out.println("plz input the location: ");
        Scanner sc = new Scanner(System.in);
        String userInputStr = sc.next();

        int index = -1;
        for (int i = 0; i < name.length - 1; i++) {
            if (userInputStr.equals(name[i])) {
                System.out.println("Bingo");
                System.out.println("index is : " + i);
                index = i;
                break;
            }
        }
        // 没找到
        if (index == -1) {
            System.out.println("NOT FOUND");

            long endTime = System.currentTimeMillis();
            System.out.println("cost:" + (endTime - startTime));
        }
    }
}
