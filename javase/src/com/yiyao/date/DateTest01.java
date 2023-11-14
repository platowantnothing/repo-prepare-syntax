package com.yiyao.date;

import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;

/**
 * @Author Yi
 * @Date 2023/11/13 22:56
 * @Usage:
 */
public class DateTest01 {
    public static void main(String[] args) throws ParseException {
        // 获取当前时间的时间戳
        Date now = new Date();
        System.out.println(now); // 输出当前日期和时间

        // 创建特定日期时间的 Date 对象
        long timestamp = 1603960800000L; // 2020-10-29 16:40:00的时间戳
        Date specificDate = new Date(timestamp);
        System.out.println(specificDate); // 输出指定日期和时间

        //
        String str = "11月04日 09:57:48 SGT 2023年";
        SimpleDateFormat sdf = new SimpleDateFormat("MM月dd日 HH:mm:ss z yyyy年");//相当于这里是系统的时区
        Date parse = sdf.parse(str);
        System.out.println(parse);

        System.out.println(Locale.getDefault());//打印 Date类运行的 Jvm的操作系统的默认时区
        //It’s essential to provide a locale. Otherwise the JVM’s default locale will be used, and if it’s not English, parsing will fail.

        /*Sample 1: Date format parse exception - "EEE MMM dd HH:mm:ss Z yyyy" [duplicate]
        From:https://stackoverflow.com/questions/19861642/date-format-parse-exception-eee-mmm-dd-hhmmss-z-yyyy
        *
        **/
        SimpleDateFormat parserSDF = new SimpleDateFormat("EEE MMM dd HH:mm:ss Z yyyy", Locale.ENGLISH);
        parserSDF.parse("Wed Oct 16 00:00:00 CEST 2013");

        /*Instead of using Locale.default that you and others often don't know which default, you can decide by using locale.ENGLISH because I see your string date is format in English. If you are at other countries, the format will be different.*/

        System.out.println("--------------------------------");

        /*
         * Sample2 : How can I convert Date.toString back to Date?
         * From: https://stackoverflow.com/questions/9431927/how-can-i-convert-date-tostring-back-to-date
         * */
        // solution1: SimpleDateFormat(pattern, Locale.ENGLISH)
        Date date = new Date();
        String ss = date.toString();
        System.out.println(parserSDF.parse(ss));

        //solution2: date.getTime()
        long l = date.getTime();
        Date theSameDate = new Date(l);
        System.out.println(theSameDate);

        //solution3: Use Instant class
        Instant instant = Instant.now();
        String s = instant.toString();
        Instant theSameInstant = Instant.parse(s);
        System.out.println("instant: " + instant);
        System.out.println("theSameInstant: " + theSameInstant);

        //solution4: kinda like solution1, it's essential to provide a locale!!!
        /**
         * Otherwise the JVM's default locale will be used, and if it;s not English, parsing will fail.
         * In the worst case you will see your code running fine for many years and suddenly it will break when one day someone runs it on a computer or device with a different locale setting.
         */
        DateTimeFormatter dtf
                = DateTimeFormatter.ofPattern("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ROOT);
        Date d = new Date();
        String sss = d.toString();
        Instant nearlyTheSameInstant = ZonedDateTime.parse(sss, dtf).toInstant();
        System.out.println("nearlyTheSameInstant: " + nearlyTheSameInstant);
        /*
        * The point from jambjo’s answer still applies: The three and four letter time zone abbreviations used in Date.toString() are very often ambiguous, so there is no guarantee that the time zone is interpreted correctly, and again, it will be interpreted differently on different JVMs.
        Finally, Date.toString() does not render the milliseconds that the Date holds, which leads to an inaccuracy of up to 999 milliseconds. If using the string from Date.toString(), there is nothing we can do about it (which was why I named the variable nearlyTheSameInstant).
        * */

        //solution5: use Time Zone (also java.time)
        String input = "Wed, 09 Feb 2011 12:34:27";
        Locale ll = Locale.US;
        DateTimeFormatter f = DateTimeFormatter.ofPattern("EEE, dd MMM uuuu HH:mm:ss", ll);
        LocalDateTime ldt = LocalDateTime.parse(input, f);
        System.out.println("ldt: " + ldt);
        //time zone
        ZoneId z = ZoneId.of("America/Montreal");
        ZonedDateTime zdt = ldt.atZone(z); // Assigning a time zone to determine an actual moment on the timeline.
        System.out.println("zdt: " + zdt);
        //convert
        /**
         * A `java.util.Date` is a moment on the timeline in UTC. So we need to extract an Instant from our ZonedDateTime.
         * The Instant class represents a moment on the timeline in UTC with a resolution of nanoseconds (up to nine (9) digits of a decimal fraction).
         */
        Instant ii = zdt.toInstant();
        Date fromiiToDate = Date.from(ii);
        System.out.println(fromiiToDate);
        // then convert again
        Instant toInstant = fromiiToDate.toInstant();
        ZonedDateTime zonedDateTime = toInstant.atZone(z);
    }
}
