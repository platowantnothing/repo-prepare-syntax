package com.yiyao.loop;

import java.util.Scanner;

/**
 * @Author Yi
 * @Date 2023/11/5 11:14
 * @Usage:
 */
public class BreakExcercise02_2 {
    public static void main(String[] args) {
        // test 2: 实现登录验证，有3次机会，如果用户名为 "丁真"， 密码"666" 提示登录成功，
        // 否者提示还有几次机会，请使用 for + break 完成
        Scanner sc = new Scanner(System.in);
        int count = 3;
        for (int i = 1; i <= 3; i++) {
            System.out.println("please input your username:");
            String strUserName = sc.next();
            System.out.println("please input your password");
            String strPassWord = sc.next();
            if ("丁真".equals(strUserName) && "666".equals(strPassWord)) {
                System.out.println("登录成功！");
                break;
            } else {
                System.out.println("账户密码错误，还剩: " + (count - i) + "次机会");
            }

        }

    }
}