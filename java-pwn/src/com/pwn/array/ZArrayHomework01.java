package com.pwn.array;

import java.util.Scanner;

/**
 * 已知有升序的数组， 要求插入一个元素， 该数组顺序依然是升序，比如[10,12,45,90], 添加23后， 数组为[10,12,23,45,90]
 */
public class ZArrayHomework01 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("input : " );
        int num = sc.nextInt();

        int[] arr = {10, 12, 45, 90};

        int oldArrLen = arr.length;
        //insert value
        int[] newArr = new int[oldArrLen + 1];
        int newArrLen = newArr.length;

        // combin the new array
        for (int i = 0; i < newArrLen- 1; i++) {
            newArr[i] = arr[i];
            newArr[oldArrLen] = num;
        }
        // Bubble sorted
        for (int i = 0; i < newArrLen - 1; i++) {
            for (int j = 0; j < newArrLen - 1; j++) {
                int temp;
                if (newArr[j] > newArr[j + 1]) {
                    temp = newArr[j];
                    newArr[j] = newArr[j + 1];
                    newArr[j + 1] = temp;
                }
            }
        }

        // print the new array
        for (int i = 0; i < newArrLen; i++) {
            System.out.print(newArr[i] + "\t");
        }
    }
}
