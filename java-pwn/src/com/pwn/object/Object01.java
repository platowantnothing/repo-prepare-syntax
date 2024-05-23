package com.pwn.object;

public class Object01 {
    public static void main(String[] args) {
        Cat cat = new Cat();
        cat.name = "miu";
        cat.age = 100;
        cat.color = "red";
        System.out.println("cat1 is " + cat.name);
    }
}

class Cat{
    String name;
    int age;
    String color;
}
