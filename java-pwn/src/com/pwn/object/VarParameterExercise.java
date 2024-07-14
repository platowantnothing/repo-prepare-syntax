package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/14 22:52
 * @Usage:
 */
public class VarParameterExercise {
    public static void main(String[] args) {
        String score = showScore("lihua", 99, 10.5);
        System.out.println(score);
    }


    public static String showScore(String name, double... scores) {
        double totalScore = 0;
        for (int i = 0; i < scores.length; i++) {
            totalScore += scores[i];
        }
        return name + "'s total score is " + totalScore;
    }
}
