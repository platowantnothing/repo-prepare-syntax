package com.pwn.object;

/**
 * 创建对象:
 *
 * 1.先声明 在创建
 * Car car; //声明
 * car = new Car(); //创建 < 在堆里创建空间，地址也指向栈里的 car
 *
 * 2.直接创建
 * Car car = new Car();
 *
 *
 *
 * 访问属性: 对象名.属性
 *
 * <p></p>
 * <b>类与对象的内存分配机制(重要!!!) 参考Readme, img01</b>
 * 1.栈: 一般存放基本数据类型(局部变量)
 * 2.堆: 存放对象(Cat cat, 数组等)
 * 3.方法区: 常量池(常量,比如字符串) , 类加载信息
 * 4.
 */
public class Object03 {
    public static void main(String[] args) {
        Person p = new Person();
        p.name="Jack";
        p.age=10;
        /**
         * Java 创建对象的流程简单分析:
         * 1) 先加载Person 类信息(属性和方法信息，只会加载一次)
         * 2) 在堆中分配空间, 进行默认初始化
         * 3) 将堆中的地址赋给 p , p指向对象
         * 4) 进行指定初始化(赋值), p.name="Jack", p.age=10
         */
    }
}

class Person{
    String name;
    int age;
}