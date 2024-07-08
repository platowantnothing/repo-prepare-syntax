package com.pwn.object;

/**
 * <b>方法的传参机制之 引用数据类型的传参机制(重要!!!)</b>
 * 结论: 引用数据类型传递的是地址 (传递的值 但是这个值是地址), 可以通过形参影响实参
 */
public class MethodParameter02 {
    //编写一个main方法
    public static void main(String[] args) {
        //test
        BB b = new BB();
        int[] arr = {1, 2, 3};
        b.test100(arr);
        System.out.println("For main ...");

        //iterate
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "\t");
        }
        System.out.println();

        //test person
        PersonBB personBB = new PersonBB();
        personBB.name = "Lee";
        personBB.age = 23;

        b.testPerson(personBB);

        System.out.println("main:" + personBB.name + " " + personBB.age);


    }
}

class PersonBB {
    String name;
    int age;
}

class BB {

    public void testPerson(PersonBB personBB) {
        personBB.name = "xiao Qiang";
        System.out.println("test:" + personBB.name + " " + personBB.age);
    }

    public void test100(int[] arr) {
        arr[0] = 200;
        //iterate
        System.out.println("For test100 ...");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "\t");
        }
        System.out.println();
    }
}

