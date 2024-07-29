package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/21 13:41
 * @Usage:
 */
public class Constructor01 {
    public static void main(String[] args) {
        Kittle miumiu = new Kittle("miumiu", 999);
        System.out.println("name: " + miumiu.name);
        System.out.println("age: " + miumiu.age);

        Kittle tom = new Kittle("Tom");
        System.out.println("tom:" + tom.name + "," + tom.age);

        AnDog anDog = new AnDog();//ERROR without no-arg cons
    }
}

class AnDog {
    // default constructor
    /*
    AnDog(){

    }
     */
    // new AnDOg();

    AnDog(){

    }
    //- 一旦定义了构造器， 默认的就不能被使用， 除非显示定义无参构造
    public AnDog(String name){
        System.out.println("My cons1");
    }
}

class Kittle {
    String name;
    int age;

    //cons1
    public Kittle(String kName, int kAge) {
        System.out.println("call constructor1");
        name = kName;
        age = kAge;
    }

    //cons2
    public Kittle(String pName) {
        System.out.println("call constructor2");
        name = pName;
    }


}
