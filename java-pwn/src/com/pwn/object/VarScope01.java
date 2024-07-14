package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/14 23:01
 * @Usage:
 */
public class VarScope01 {
    public static void main(String[] args) {

    }
}


class Elephant {
    // 全局变量
    int globalVar = 10;

    double weight; //global var

    public void cry() {
//1 局部变量一般是指在成员方法中定义的变量
//2 n, name 就是局部变量
//3 n 和 name 的作用域在 cry 方法中
        int n = 10;
        String name = "jack";

        System.out.println("using global var in cry method:" + globalVar);
    }

    public void eat() {
        System.out.println(globalVar);
//        System.out.println(name);
        System.out.println(weight);
    }

    public void h1() {
        int num;
//        System.out.println(num); // ERROR: 局部变量需要赋值后才能使用
    }
}