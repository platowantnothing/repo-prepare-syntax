package com.pwn.array;

import java.util.Scanner;

public class ArrayReduce {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        Scanner sc = new Scanner(System.in);
        char ans;

        while (true) {

            System.out.print("reduce index?(y/n)");
            ans = sc.next().charAt(0);
            if (ans == 'y') {
                int[] newArr = new int[arr.length - 1];
                for (int i = 0; i < newArr.length; i++) {
                    newArr[i] = arr[i];
                }
                arr = newArr;
            }
            System.out.println("----");
            for (int i = 0; i < arr.length; i++) {
                System.out.println(arr[i] + "\t");
            }

            if (arr.length <= 1) {
                System.out.println("Gonna STOP!");
                break;
            }
        }
    }
}
