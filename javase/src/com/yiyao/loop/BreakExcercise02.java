package com.yiyao.loop;

import java.util.ArrayList;

/**
 * @Author Yi
 * @Date 2023/11/5 11:14
 * @Usage:
 */
public class BreakExcercise02 {
    public static void main(String[] args) {
        // test 1: 1-100以内的数求和，求出当和第一次大于20的当前数
        int count = 0;
        //define a container
        ArrayList<Integer> intArr = new ArrayList<>();
        for(int i=0;i<=100;i++){
            count+=i;
            intArr.add(i);
            if(count>20){
                break;
            }
        }
        System.out.println(intArr.toString());
    }
}