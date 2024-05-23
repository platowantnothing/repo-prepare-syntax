package com.pwn.object;

/**
 * 1. 同一个类中 方法调用直接调用即可
 * 2.....
 * 3.跨类的方法调用和方法的访问修饰符相关
 */
public class MethodDetails02 {
    public static void main(String[] args) {
        A a = new A();
//        a.sayOk();
        a.m1();
    }
}

class A {
    public void print(int n) {
        System.out.println("print()方法被调用 n =" + n);
    }

    //     * 1. 同一个类中 方法调用直接调用即可
    public void sayOk() {
        print(2);
        System.out.println("This is sayOk method");
    }

    public void m1() {
        System.out.println("invoke m1...");
        B b = new B();
        b.sayHi();
        System.out.println("m1 running...");
    }
}

// 2.跨类方法调用, 需要通过对象名调用
class B {
    public void sayHi() {
        System.out.println("Hi from B");
    }
}