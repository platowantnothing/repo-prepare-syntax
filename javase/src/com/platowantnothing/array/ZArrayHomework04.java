package com.platowantnothing.array;

/**
 * [24,69,80,57,13]
 * Bubble Sorted
 */
public class ZArrayHomework04 {
    public static void main(String[] args) {
        int[] arr = {24, 69, 80, 57, 13};
        int temp;
        for (int i = 0; i < 4; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

        for (int j : arr) {
            System.out.print(j + "\t");
        }
        System.out.println();
        for (int i = 0; i < 3; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

        for (int j : arr) {
            System.out.print(j + "\t");
        }
    }

}
