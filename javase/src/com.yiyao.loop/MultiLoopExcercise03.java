package com.yiyao.loop;

/**
 * @Author Yi
 * @Date 2023/10/22 14:39
 * @Usage: 思路分析
 * 化繁为简
 * 1\先打印一个矩形
 * 2\打印半个金字塔
 * *
 * **
 * ***
 * ****
 * *****
 * <p>
 * 3\打印整个金字塔 ( 在打印之前还要输出空格
 */
public class MultiLoopExcercise03 {
    public static void main(String[] args) {
        int totalLayer = 5;
        //打印空心金字塔
        for (int i = 1; i <= totalLayer; i++) { // i 表示层数
            //在输出*之前，还要输出 对应空格 = 总层数 - 当前层
            for (int k = 1; k <= totalLayer - i; k++) {
                System.out.print(" ");
            }

            // 控制打印每层的*个数
            for (int j = 1; j <= 2 * i - 1; j++) {
                if (j == 1 || j == (2 * i - 1) || i == totalLayer) { // 当前行的第一个位置是 *, 最后一个位置也是*, 最后一层全部*
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println("");
        }
    }
}
