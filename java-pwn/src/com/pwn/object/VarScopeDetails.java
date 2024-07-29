package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/21 12:37
 * @Usage:
 */
public class VarScopeDetails {
    public static void main(String[] args) {
        PersonJack p = new PersonJack();
        p.say();
    }
}

class PersonJack {
    String name = "jack";

    public void say() {
//        String name = "Ellen";
        System.out.println("say() name =" + name);
    }
}
