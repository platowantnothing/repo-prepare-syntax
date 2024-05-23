package com.pwn.object;


public class MethodExercise01 {
    public static void main(String[] args) {
        AAA a = new AAA();
//        a.isOddOrEven(1000);

        a.printChar(2,10,'#');

    }
}

class AAA{
    public void isOddOrEven(int number){
        if(number % 2 == 0){
            System.out.println("even number");
        }else {
            System.out.println("odd number");
        }
    }

    public void printChar(int row, int column, char cc){
        for (int r = 0; r < row; r++) {
            for (int c = 0; c < column; c++) {
                System.out.print(cc);
            }
            System.out.println();
        }
    }

}


