package com.platowantnothing.loop;

/**
 * @Author Yi
 * @Date 2023/10/16 22:15
 * @Usage:
 *
 * 1.基本语法：
 *  for(循环变量初始化；循环条件； 循环变量迭代){
 *      循环操作
 *  }
 * 2. for循环控制
 * 循环变量初始化 -> 循环条件 (如果为真，走 循环操作) -> 循环变量迭代 -> 循环条件 (如果为真，走 循环操作) ... < 循环
 *                循环条件 (如果为假，退出 for 循环操作)
 * 3. 内存分析法, 查看代码执行
 *
 * 4. 注意事项
 *  1) 循环条件, 最终返回 true/ false, 一定是返回布尔值
 *  2) for(;循环判断条件;)
 *  3) 对多个循环变量的迭代
 *      for (int i = 0, int j = 0; i < count; i++, j+=2 )
 */
public class For01 {
    public static void main(String[] args) {
        // use for
        for (int i = 1; i <= 10; i++) {
            System.out.println("yiyao " + i);
        }

        // 另外一种写法, num 在外部还可以调用
        int num = 1;
        for (; num <= 10;) {
            System.out.println("yiyi " + num);
            num++;
        }
        System.out.println("num :" + num);

        // 死循环
        for (;;) {
            System.out.println("ok~");
        }
    }
}
