package com.platowantnothing.loop;

/**
 * @Author Yi
 * @Date 2023/12/3 11:30
 * @Usage: Break 注意事项和细节说明:
 * 1. break 语句出现在多层嵌套的语句块种，可以通过标签指明要终止的是哪一层语句块
 * 2. 标签的基本使用
 * label1:{
 * label2: {
 * label3: {
 * ....
 * break label2;
 * ....
 * }
 * }
 * }
 * 1) break语句可以指定退出哪层
 * 2) label1 是标签，名字由程序员指定
 * 3) break后指定到哪个label就退出到哪里
 * 4) 在实际的开发中，尽量不要使用标签
 * 5) 如果没有指定break， 默认退出最近的循环体
 */
public class Break02 {
    public static void main(String[] args) {
        bac1:
        for (int i = 0; i < 4; i++) {
            bac2:
            for (int j = 0; j < 10; j++) {
                if (j == 2) {
                    break bac2;
                }
                System.out.println("j= " + j);
            }
        }
    }
}
