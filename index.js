let rows=

for(i=0;i<=rows;i++){
     res=""
     for(j=rows-i;j>=0;j--){
         res=res+"* "
     }
     console.log(res)
     
}

let  n=5
for(i=1;i<=n;i++){
    res=""
    for(k=1;k<=n-i;k++){
        res=res+" "
}
for(j=1;j<=i; j++){
    res=res+"* "
}
console.log(res)
}


n=1;
for(i=1;i<=5;i++){
    res=""
    for()
    for(j=1;j<=i;j++){
        res=res+n+" "
        n++

    }
    console.log(res)
}

n=5
for(i=1;i<=n;i++){
    res=""
    if(i==1){
        res
    }
}


let n=5;
for(i=1;i<=n;i++){
    console.log(" ".repeat(n-i)+"* ".repeat(i))
}



let rows=prompt("enter a number :")

let rows=5
for(i=1;i<=rows;i++){
    res=""
    for(k=1;k<=i-1;k++){
        res=res+" "
    }
    for(j=1;j<=rows-i+1;j--){
        if(j==1|| j==rows-i+1 || i==1){
            res=res+"* "
        }
        else{
            res=res+" "
        }
      
    }
     console.log(res)
    
}

* * * * * * * * * * 
 *               * 
  *             * 
   *           * 
    *         * 
     *       * 
      *     * 
       *   * 
        * * 
         * 


let rows=prompt("enter number of rows :")
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(i==j||j==rows-i+1){
        res=res+"* "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}


*       * 
  *   *   
    *     
  *   *   
*       * 


let rows=prompt("enter number of rows :")
let a=rows/2
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(i==1||j==1||i==rows||j==rows||j==1||i==j||j==rows-i+1||i==a||j==a){
        res=res+"* "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}


* * * * * * * * * * * * * * * * * * * * 
* *               *                 * * 
*   *             *               *   * 
*     *           *             *     * 
*       *         *           *       * 
*         *       *         *         * 
*           *     *       *           * 
*             *   *     *             * 
*               * *   *               * 
* * * * * * * * * * * * * * * * * * * * 
*                 * *                 * 
*               * *   *               * 
*             *   *     *             * 
*           *     *       *           * 
*         *       *         *         * 
*       *         *           *       * 
*     *           *             *     * 
*   *             *               *   * 
* *               *                 * * 
* * * * * * * * * * * * * * * * * * * * 


let rows=prompt("enter number of rows :")
let a=Math.floor(rows/2)
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(j==1||j==rows||i==a){
        res=res+"* "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}


*                 * 
*                 * 
*                 * 
*                 * 
* * * * * * * * * * 
*                 * 
*                 * 
*                 * 
*                 * 
*                 * 


let rows=prompt("enter number of rows :")
num=1
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=i;j++){
        if(i%2==0){
        res=num+" "+res
        num++
        }
        else{
            res=res+num+" "
            num++
        } 
    }
   console.log(res)

1 
3 2 
4 5 6 
10 9 8 7 


let rows=+prompt("enter number of rows :")
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(i==j||j==rows-i+1){
        res=res+j+" "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}

1       5 
  2   4   
    3     
  2   4   
1       5 



let rows=+prompt("enter number of rows :")
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(i==j||i+j==rows+1){
        res=res+j+" "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}


1       5 
  2   4   
    3     
  2   4   
1       5 


let rows=prompt("enter a number of rows :")
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows;j++){
        if(j==1){
            res=res+i+" " 
        }
        else if(i==1){
            res=res+j+" "
        }
        else if(j==rows-i+1){
            res=res+rows+" "
        }
        else{
            res=res+"  "
        }
    }
    console.log(res)
}


1 2 3 4 5 6 7 8 9 10 
2               10   
3             10     
4           10       
5         10         
6       10           
7     10             
8   10               
9 10                 
10  

let rows=4
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=i;j++){
        if(j==1){
            res=res+i*2+" "
            Nextnum=i+rows-j
        }
        else{
            res=res+Nextnum*2+" "
            Nextnum=Nextnum+rows-j
        }
       
    }
    console.log(res)
}

2 
4 10 
6 12 16 
8 14 18 20 

let rows=4
for(i=1;i<=rows;i++){
    res="",num=i
    for(j=1;j<=i;j++){
        res=res+num*2+" "
        num=num+rows-j
    }
    console.log(res)
}


2 
4 10 
6 12 16 
8 14 18 20