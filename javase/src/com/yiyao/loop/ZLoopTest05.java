package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/12/3 18:53
 * @Usage:
 */
public class ZLoopTest05 {
    public static void main(String[] args) {
        //求出1-1/2+1/3-1/4..1/100的和
        //分析: 偶数是-, 奇数是+
        // zzz: 这里有一个隐藏陷阱，要把公式分子 1 写成1.0， 才能得到精确的小数
        float sum = 0l;
        for (int i = 1; i <= 100; i++) {
            if (!(i % 2 == 0)) {// i%i !=0
                sum += 1.00 / i;
                System.out.println(1.00 / i);
            } else {
                sum -= 1.00 / i;
                System.out.println(1.00 / i);
            }
        }
        System.out.println(sum);
    }
}
