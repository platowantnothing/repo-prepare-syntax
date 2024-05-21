package com.platowantnothing.object;


//画图 : img02
public class Object04 {
    public static void main(String[] args) {
        Person p1=new Person();
        p1.age=10;
        p1.name="小明";
        Person p2=p1;//把p1赋给了p2，让p2指向p1
        System.out.println(p2.age);
    }
}
