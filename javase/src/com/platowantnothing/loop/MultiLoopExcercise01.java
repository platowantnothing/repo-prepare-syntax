package com.platowantnothing.loop;

import java.util.Scanner;

/**
 * @Author Yi
 * @Date 2023/10/22 13:43
 * @Usage:
 */
public class MultiLoopExcercise01 {
    public static void main(String[] args) {
        // 1 统计 3 个班成绩情况, 每个班有5名同学, 求出各个班的平均分和所有班级的平均分
        // 2 统计三个班及格人数, 每个班有5名同学
        int classNum = 3;
        int studentNum = 5;
        double sumAll = 0; //累计
        int countAvg = 0; //累计
        Scanner scanner = new Scanner(System.in);//输入对象
        for (int o = 1; o <= classNum; o++) {
            System.out.println(o + "班开始统计!");
            double sumByClass = 0; //累计
            // Demo - 只是统计一个班5名学生的成绩并算出平均成绩
            for (int i = 1; i <= studentNum; i++) {
                System.out.println("请输入, 学号为：" + i + "的成绩");
                double score = scanner.nextDouble();
                if (score >= 60) {
                    countAvg ++;
                }
                sumByClass += score;
            }
            System.out.println("这个班的成绩总和是" + sumByClass);
            System.out.println("这个班的平均成绩是" + (sumByClass / studentNum));
            sumAll += sumByClass;
        }
        System.out.println("所有班级的平均分:" + (sumAll / classNum));
        System.out.println("及格人数是: " + countAvg);
    }


}
