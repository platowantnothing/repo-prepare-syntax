package com.platowantnothing.array;

import java.util.Scanner;

/**
 * @Author Yi
 * @Date 2024/1/23 23:15
 * @Usage: 数组添加
 * 要求： 实现动态地给数组添加元素效果，实现对数组扩容
 * 1) 原始数组使用静态分配 in[] arr = {1,2,3}
 * 2)添加的元素4 直接房子啊数组的最后 arr = {1,2,3,4}
 * 3)用户可以通过如下方法来决定是否继续添加  添加成功,是否继续? y/n
 */
public class ArrayAdd {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        char ans;
        Scanner sc = new Scanner(System.in);
        do {
            int[] newArr = new int[arr.length + 1];
            System.out.print("please input the number you want to add: ");
            int inputNumber = sc.nextInt();

            newArr[arr.length] = inputNumber;
            for (int i = 0; i < arr.length; i++) {
                newArr[i] = arr[i];
            }
            System.out.println();
            arr = newArr;
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i] + "\t");
            }
            System.out.println();
            System.out.print("keep adding...? (y/n) ");
            String str = sc.next();
            ans = str.charAt(0);

        } while (ans == 'y');
    }
}
