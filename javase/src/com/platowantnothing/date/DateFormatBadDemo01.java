package com.platowantnothing.date;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

/**
 * @Author Yi
 * @Date 2023/11/14 21:20
 * @Usage:
 */
public class DateFormatBadDemo01 {
    public static void main(String[] args) {
        final String strDateTime = "Wed, 09 Feb 2011 12:34:27";
        DateTimeFormatter dtfWithDefaultLocale = null;

        System.out.println("JVM's Locale: " + Locale.getDefault());
        // Using DateTimeFormatter with the default Locale
        dtfWithDefaultLocale = DateTimeFormatter.ofPattern("EEE, dd MMM uuuu HH:mm:ss");
        System.out.println("DateTimeFormatter's Locale: " + dtfWithDefaultLocale.getLocale());
        System.out
                .println("Parsed with JVM's default locale: " + LocalDateTime.parse(strDateTime, dtfWithDefaultLocale));

        // Setting the JVM's default locale to Locale.FRANCE
        Locale.setDefault(Locale.FRANCE);

        // Using DateTimeFormatter with Locale.ENGLISH explicitly (recommended)
        DateTimeFormatter dtfWithEnglishLocale = DateTimeFormatter.ofPattern("EEE, dd MMM uuuu HH:mm:ss",
                Locale.ENGLISH);
        System.out.println("JVM's Locale: " + Locale.getDefault());
        System.out.println("DateTimeFormatter's Locale: " + dtfWithEnglishLocale.getLocale());
        LocalDateTime zdt = LocalDateTime.parse(strDateTime, dtfWithEnglishLocale);
        System.out.println("Parsed with Locale.ENGLISH: " + zdt);

        System.out.println("JVM's Locale: " + Locale.getDefault());
        // Using DateTimeFormatter with the default Locale
        dtfWithDefaultLocale = DateTimeFormatter.ofPattern("EEE, dd MMM uuuu HH:mm:ss");
        System.out.println("DateTimeFormatter's Locale: " + dtfWithDefaultLocale.getLocale());
        System.out
                .println("Parsed with JVM's default locale: " + LocalDateTime.parse(strDateTime, dtfWithDefaultLocale));

    }
}
