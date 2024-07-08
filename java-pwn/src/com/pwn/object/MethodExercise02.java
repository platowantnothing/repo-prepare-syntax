package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/8 23:33
 * @Usage:
 */
public class MethodExercise02 {
    // clone object, but new and old object are independent. Only attributes are same.
    public static void main(String[] args) {
        PersonX p = new PersonX();
        p.name = "hali";
        p.age = 23;
        //creat tools
        MyTools myTools = new MyTools();
        PersonX p2 = myTools.copyPerson(p);

        System.out.println("About P:" + p.name + " " + p.age);
        System.out.println("About P2:" + p2.name + " " + p2.age);

        // print object hashcode
        System.out.println(p == p2);
        System.out.println("p hashcode:" + p.hashCode());
        System.out.println("p2 hashcode:" + p2.hashCode());
    }

}

class PersonX {
    String name;
    int age;
}

class MyTools {
    public PersonX copyPerson(PersonX person) {
        // create a new object
        PersonX p2 = new PersonX();
        p2.name = person.name;
        p2.age = person.age;

        return p2;
    }
}
