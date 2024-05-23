package com.pwn.object;

/**
 * 属性: 成员变量
 * <p>
 * 属性的数值类型可以是任意类型；基本数据类型和引用数据类型
 * <p>
 * 属性不赋值。会有默认值，跟数组一样。(遵守数组分配的规则)
 * <p>
 * 回顾 数组的默认赋值
 * <p>
 * 数组创建后，如果没有赋值，有默认值 int 0
 * <p>
 * short 0
 * <p>
 * byte 0
 * <p>
 * long 0
 * <p>
 * float 0.0
 * <p>
 * double 0.0
 * <p>
 * char \u0000
 * <p>
 * boolean false
 * <p>
 * String null
 *
 * </p>
 * <p>
 * <p>
 * 真正的对象是在 堆 里分配的空间和分配的数据。
 * car 是指向对象, 也被称为"对象引用"。 真正的对象是 new Car();
 */
public class Object02 {
    public static void main(String[] args) {
        Car car = new Car();
        System.out.println(car.mile);// default val is 0
        System.out.println(car.name);// default val is null
        System.out.println(car.price);//0.0
    }
}

class Car {
    String name;
    int mile;
    String brand;
    double price;
}
