package com.pwn.test;

import java.util.HashMap;

public class Test {
  public static void main(String[] args) {
    int[] numbers = {2, 1, 5, 3};
    int target = 5;

    int res = solution(numbers, target);
    System.out.println(res);
  }

  private static int solution(int[] nums, int target) {
    HashMap<Integer, Integer> hashMap = new HashMap<Integer, Integer>();
    for (int i = 0; i < nums.length; i++) {
      hashMap.put(nums[i], i);
    }

    return 0;
  }
}
