package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/12/3 19:01
 * @Usage:
 */
public class ZLoopTest06 {
    // 1+(1+2) + (1+2+3) + ...+ (1+2+3+...+100)
    public static void main(String[] args) {
//        for (int i = 1; i < 101; i++) {
//            for (int j = 1; j <= i; j++){
//                System.out.print(j+" ");
//            }
//            System.out.println();
//        }
        int sum = 0;
        int finalSum=0;
        for (int i = 1; i < 101; i++) {
            for (int j = 1; j <= i; j++){
//                System.out.print(j+" ");
                sum +=j;
            }
            //finalSum+=sum;
        }
        System.out.println(sum);
    }
}
