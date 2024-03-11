package com.platowantnothing.loop;


/**
 * @Author Yi
 * @Date 2023/12/3 17:55
 * @Usage: 跳转控制语句 -return
 * 1 Intro
 * Return 使用在方法，表示跳出所在的方法，在讲解方法的是哦后，会详细的介绍
 * 注意： 如果使用在main方法，会跳出程序
 */
public class Return01 {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                System.out.println("haha+" + i);
                return;
//                continue;
//                break;
            }
            System.out.println("hello world");
        }
        System.out.println("go on...");
    }
}
