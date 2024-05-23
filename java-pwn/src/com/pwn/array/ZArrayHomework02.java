package com.pwn.array;

import java.util.Scanner;

/**
 * 已知有升序的数组， 要求插入一个元素， 该数组顺序依然是升序，比如[10,12,45,90], 添加23后， 数组为[10,12,23,45,90]
 * 1 现决定要插入的索引位置
 * 2 扩容
 */
public class ZArrayHomework02 {
    public static void main(String[] args) {
// 1 define the origin arr
        int[] arr = {10, 12, 45, 90};
        // 2 the insert value
        int insertVal = 23;
        //3 define the index
        int index = -1;
        //4 iterate the arr
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > insertVal) {
                index = i;
                break;
            }
        }
        System.out.println(index);


        // 5 Array expansion
        // define a new arr
        int[] newArr = new int[arr.length + 1];
        // check index
        if (index == -1) {
            index = arr.length;
        }

        System.out.println(index);
//        for (int i = 0, j = 0; i < newArr.length; i++) {
//            if (i != index) {
//                newArr[i] = arr[j];
//                j++;
//            } else {
//                newArr[i]=insertVal;
//        }}
        //-----
        for (int i = 0, j = 0; i < newArr.length; i++) {
            if (i == index) {
                newArr[i] = insertVal;
            } else {
                newArr[i] = arr[j];
                j++;
            }
        }
        arr = newArr;
        //6 iterate the result
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "\t");
        }

    }
}
