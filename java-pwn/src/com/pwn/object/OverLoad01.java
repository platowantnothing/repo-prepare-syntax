package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/14 22:21
 * @Usage:
 */
public class OverLoad01 {
    public static void main(String[] args) {
//        System.out.println(100);
//        System.out.println("Hello World");
//        System.out.println('h');
        MyCalculator obj = new MyCalculator();
        System.out.println(obj.calculate(1, 2.4));
    }
}

class MyCalculator {
    public int calculate(int n1, int n2) {
        return n1 + n2;
    }

    public double calculate(int n1, double n2) {
        return n1 + n2;
    }

    public double calculate(double n1, int n2) {
        return n1 + n2;
    }

    public int calculate(int n1, int n2, int n3) {
        return n1 + n2 + n3;
    }
}