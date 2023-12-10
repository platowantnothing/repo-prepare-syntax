package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/12/3 17:24
 * @Usage: Contiune detail- 跳转控制语句
 * <p>
 * 1 细节案例说明和分析
 */
public class Continue02 {
    public static void main(String[] args) {
        abc1:
        for (int j = 0; j < 2; j++) {
            abc2:
            for (int i = 0; i < 10; i++) {
                if (i == 2) {
//                    continue; // 等价于 continue label2
                    continue abc1;
                }
                System.out.println("i =" + i); //输出2组，[0,1,3,4,5,6,7,8,9]
            }
        }
    }
}
