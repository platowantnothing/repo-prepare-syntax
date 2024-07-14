package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/14 22:37
 * @Usage:
 */
public class VarParameter01 {
    public static void main(String[] args) {
        HspMethod method = new HspMethod();
        System.out.println(method.sum(1, 2, 100));
    }
}
class HspMethod{
    //可以计算 2个数的和， 3个数的和， 4.. 5...

    /**
     * int... 表示接受的是可变参数，类型 int, 即可以接受多个 int
     * nums 可以看作数组
     * @param nums
     * @return
     */
    public int sum(int... nums) {
//        System.out.println(nums.length);
        int res = 0;
        for (int i = 0; i < nums.length; i++) {
            System.out.println(i+"===");
            res += nums[i];
        }
        return res;

    }
}
