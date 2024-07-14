package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/14 20:40
 * @Usage:
 */
public class Maze {
    public static void main(String[] args) {
        // 1 create maze, int[][] map = new int[8][7] //行, 列
        // 2 set rules, 0> could run, 1>stop
        int[][] map = new int[8][7];

        //3 set top row and last row with 1
        for (int i = 0; i < 7; i++) {
            map[0][i] = 1;
            map[7][i] = 1;

        }
        // 4 set right and left with 1
        for (int i = 0; i <8; i++){
            map[i][0]=1;
            map[i][6]=1;
        }
        map[3][1]=1;
        map[3][2]=1;

        System.out.println("===当前地图情况===");
        //output
        for (int i = 0; i < map.length; i++) {
            for (int j = 0; j < map[i].length; j++) {
                System.out.print(map[i][j]+" ");
            }
            System.out.println();
        }
    }
}

class TTT {

    //使用递归回溯

    /**
     * 规定每个坐标点的含义,0表示可以走，1表示障碍物，2表示可以走，3表示走过
     * 当map[6][5]=2,就说明找到通路，可以结束
     * 去找路策略, down -> right -> up -> left
     * @param map 表示迷宫
     * @param i 表述老鼠的位置 i
     * @param j 表述老鼠的位置 j
     * @return
     */
    public boolean findWay(int[][] map,int i,int j){

        if(map[6][5] ==2 ){
            //说明已经找到
            return true;
        }else {
            if(map[i][j] == 0){ //当前这个位置0, 说明可以走


            }
        }

        return false;
    }

}
