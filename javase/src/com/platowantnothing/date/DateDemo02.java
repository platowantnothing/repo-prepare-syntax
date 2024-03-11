package com.platowantnothing.date;

import java.util.Date;
import java.util.TimeZone;

/**
 * @Author Yi
 * @Date 2023/11/13 21:55
 * @Usage: Date 类, 指定时区
 */
public class DateDemo02 {
    public static void main(String[] args) {
        Date date = new Date();

        TimeZone aDefaultTimeZone = TimeZone.getDefault();// 保存当前系统的默认时区
        System.out.println(aDefaultTimeZone);

        // 指定目标时区
        TimeZone timeZone = TimeZone.getTimeZone("GMT");
        TimeZone.setDefault(timeZone);
        System.out.println(timeZone);

        // 输出 GMT 时间
        System.out.println("GMT : " + date);

        // 指定目标时区
        timeZone = TimeZone.getTimeZone("America/New_York");
        TimeZone.setDefault(timeZone);

        // 输出 纽约 时间
        System.out.println("在纽约的时间: " + date);

        // 恢复原来的默认时区
        TimeZone.setDefault(aDefaultTimeZone);
        System.out.println("default time zone: " + date);
    }
}
