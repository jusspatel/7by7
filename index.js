// JavaScript
function rules(){
  Swal.fire({
    title:"Rules",
    
    width: 650,
    padding: "1em",
    
    background: "#fff",
    backdrop: `
      rgba(0,0,123,0.4)
      url("nyan_cat.gif")
      left top
      no-repeat
    `,
    html : `<ol style="list-style: none;padding:0;">
    <li>A 2 by 2 square of X or O gives 0.1 points.</li>
    <br>
    <li>3 continuous X or O in a row/column/diagonal gets the player 0.25 points.</li>
    <br>
    <li>5 continuous X or O in a row/column/diagonal gets the player 0.5 points.</li>
    <br>
    <li>2 rows/columns/diagonals of X or O side by side gets the player 0.5 points.</li>
    <br>
    <li>7 in row/column/diagonal gets the player 5 points.</li>
    <br>
    <li>Game finishes when the grid gets completely filled.</li>
    <br>
    <li>If the player hasn't scored till move 12 of the game (i.e., till 12 tiles have been placed), they get a 0.2 point penalty.</li>
    <br>
    <li>Player with most points wins.</li>
  </ol>
  `
    
  });}

chance = 0
xsco = 0
osco = 0
var arrOfArr = new Array(7);
for (var x = 0; x < arrOfArr.length; x++) {
    arrOfArr[x] = new Array(7);
}
leng = arrOfArr.length
gameover = false
localStorage.clear()

function check(){
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if  (j<5 && arrOfArr[i][j] == arrOfArr[i][j + 1] && arrOfArr[i][j] == arrOfArr[i][j + 2]  && arrOfArr[i][j] == 'O' && !localStorage.getItem(`${i}${j}${i}${j+1}${i}${j+2}`)    ) {
                osco += 0.25
                xy =`${i}${j}${i}${j+1}${i}${j+2}`
                

                localStorage.setItem(xy,xy)}
            if  (j<5 && arrOfArr[i][j] == arrOfArr[i][j + 1] && arrOfArr[i][j] == arrOfArr[i][j + 2]  && arrOfArr[i][j] == 'X' && !localStorage.getItem(`${i}${j}${i}${j+1}${i}${j+2}`)    ) {
                xsco += 0.25
                xy =`${i}${j}${i}${j+1}${i}${j+2}`
                

                localStorage.setItem(xy,xy)}
            if  (i<5 && arrOfArr[i][j] == arrOfArr[i+1][j] && arrOfArr[i+1][j] == arrOfArr[i+2][j]  && arrOfArr[i][j] == 'X' && !localStorage.getItem(`${i}${j}${i+1}${j}${i+2}${j}`)    ) {
                xsco += 0.25
                xy =`${i}${j}${i+1}${j}${i+2}${j}`
                

                localStorage.setItem(xy,xy)}
            if  (i<5 && arrOfArr[i][j] == arrOfArr[i+1][j] && arrOfArr[i+1][j] == arrOfArr[i+2][j]  && arrOfArr[i][j] == 'O' && !localStorage.getItem(`${i}${j}${i+1}${j}${i+2}${j}`)    ) {
                osco += 0.25
                xy =`${i}${j}${i+1}${j}${i+2}${j}`
                

                localStorage.setItem(xy,xy)}
            if  (i<5 && j<5 && arrOfArr[i][j] == arrOfArr[i+1][j+1] && arrOfArr[i+1][j+1] == arrOfArr[i+2][j+2]  && arrOfArr[i][j] == 'X' && !localStorage.getItem(`${i}${j}${i+1}${j+1}${i+2}${j+2}`)    ) {
                xsco += 0.25
                xy =`${i}${j}${i+1}${j+1}${i+2}${j+2}`
                

                localStorage.setItem(xy,xy)}
            if  (i<5 && j<5 && arrOfArr[i][j] == arrOfArr[i+1][j+1] && arrOfArr[i+1][j+1] == arrOfArr[i+2][j+2]  && arrOfArr[i][j] == 'O' && !localStorage.getItem(`${i}${j}${i+1}${j+1}${i+2}${j+2}`)    ) {
                osco += 0.25
                xy =`${i}${j}${i+1}${j+1}${i+2}${j+2}`
                

                localStorage.setItem(xy,xy)} 
                
            if  (i>=2 &&  j<5 &&arrOfArr[i][j] == arrOfArr[i-1][j+1] && arrOfArr[i-1][j+1] == arrOfArr[i-2][j+2]  && arrOfArr[i][j] == 'O' && !localStorage.getItem(`${i}${j}${i-1}${j+1}${i-2}${j+2}`)    ) {
                osco += 0.25
                xy =`${i}${j}${i-1}${j+1}${i-2}${j+2}`
                

                localStorage.setItem(xy,xy)}   
            if  (i>=2 && j<5 && arrOfArr[i][j] == arrOfArr[i-1][j+1] && arrOfArr[i-1][j+1] == arrOfArr[i-2][j+2]  && arrOfArr[i][j] == 'X' && !localStorage.getItem(`${i}${j}${i-1}${j+1}${i-2}${j+2}`)    ) {
                xsco += 0.25
                xy =`${i}${j}${i-1}${j+1}${i-2}${j+2}`
                

                localStorage.setItem(xy,xy)}
            if  (j<3 && arrOfArr[i][j] == arrOfArr[i][j + 1] && arrOfArr[i][j] == arrOfArr[i][j + 2] && arrOfArr[i][j] == arrOfArr[i][j + 3] && arrOfArr[i][j] == arrOfArr[i][j + 4]  && arrOfArr[i][j] == 'O' && !localStorage.getItem(`${i}${j}${i}${j+1}${i}${j+2}${i}${j+3}${i}${j+4}`)    ) {
                osco += 1
                xy =`${i}${j}${i}${j+1}${i}${j+2}${i}${j+3}${i}${j+4}`
                

                localStorage.setItem(xy,xy)}
            if  (j<3 && arrOfArr[i][j] == arrOfArr[i][j + 1] && arrOfArr[i][j] == arrOfArr[i][j + 2] && arrOfArr[i][j] == arrOfArr[i][j + 3] && arrOfArr[i][j] == arrOfArr[i][j + 4]  && arrOfArr[i][j] == 'X' && !localStorage.getItem(`${i}${j}${i}${j+1}${i}${j+2}${i}${j+3}${i}${j+4}`)    ) {
                xsco += 1
                xy =`${i}${j}${i}${j+1}${i}${j+2}${i}${j+3}${i}${j+4}`
                

                localStorage.setItem(xy,xy)}
            if  (i<3 && arrOfArr[i][j] == arrOfArr[i+1][j] && arrOfArr[i+1][j] == arrOfArr[i+2][j] && arrOfArr[i+3][j] == arrOfArr[i+2][j] && arrOfArr[i+4][j] == arrOfArr[i+2][j]  && arrOfArr[i][j] == 'X' && !localStorage.getItem(`${i}${j}${i+1}${j}${i+2}${j}${i+3}${j}${i+4}${j}`)    ) {
                xsco += 1
                xy =`${i}${j}${i+1}${j}${i+2}${j}${i+3}${j}${i+4}${j}`
                

                localStorage.setItem(xy,xy)}
            if  (i<3 && arrOfArr[i][j] == arrOfArr[i+1][j] && arrOfArr[i+1][j] == arrOfArr[i+2][j] && arrOfArr[i+3][j] == arrOfArr[i+2][j] && arrOfArr[i+4][j] == arrOfArr[i+2][j]  && arrOfArr[i][j] == 'O' && !localStorage.getItem(`${i}${j}${i+1}${j}${i+2}${j}${i+3}${j}${i+4}${j}`)    ) {
                osco += 1
                xy =`${i}${j}${i+1}${j}${i+2}${j}${i+3}${j}${i+4}${j}`
                

                localStorage.setItem(xy,xy)}
            if (
                i<6 && j<5 &&
                arrOfArr[i][j] === 'O' &&
                arrOfArr[i][j] === arrOfArr[i][j + 1] &&
                arrOfArr[i][j] === arrOfArr[i][j + 2] &&
                arrOfArr[i + 1][j] === 'O' &&
                arrOfArr[i + 1][j] === arrOfArr[i + 1][j + 1] &&
                arrOfArr[i + 1][j] === arrOfArr[i + 1][j + 2] &&
                !localStorage.getItem(`${i}${j}${i}${j + 1}${i}${j + 2}${i + 1}${j}${i + 1}${j + 1}${i + 1}${j + 2}`)
                ) {
                xy = `${i}${j}${i}${j + 1}${i}${j + 2}${i + 1}${j}${i + 1}${j + 1}${i + 1}${j + 2}`;
                
                osco += 0.5;
                localStorage.setItem(xy,xy);
                }
            if (
                j<6 && i<5 &&
                arrOfArr[i][j] === 'O' &&
                arrOfArr[i][j] === arrOfArr[i + 1][j] &&
                arrOfArr[i][j] === arrOfArr[i + 2][j] &&
                arrOfArr[i][j + 1] === 'O' &&
                arrOfArr[i][j + 1] === arrOfArr[i + 1][j + 1] &&
                arrOfArr[i][j + 1] === arrOfArr[i + 2][j + 1] &&
                !localStorage.getItem(`${i}${j}${i + 1}${j}${i + 2}${j}${i}${j + 1}${i + 1}${j + 1}${i + 2}${j + 1}`)
                ) {
                xy = `${i}${j}${i + 1}${j}${i + 2}${j}${i}${j + 1}${i + 1}${j + 1}${i + 2}${j + 1}`;
                osco += 0.5;
                localStorage.setItem(xy,xy);
                }
            if (
                i<6 && j<5 &&
                arrOfArr[i][j] === 'X' &&
                arrOfArr[i][j] === arrOfArr[i][j + 1] &&
                arrOfArr[i][j] === arrOfArr[i][j + 2] &&
                arrOfArr[i + 1][j] === 'X' &&
                arrOfArr[i + 1][j] === arrOfArr[i + 1][j + 1] &&
                arrOfArr[i + 1][j] === arrOfArr[i + 1][j + 2] &&
                !localStorage.getItem(`${i}${j}${i}${j + 1}${i}${j + 2}${i + 1}${j}${i + 1}${j + 1}${i + 1}${j + 2}`)
                ) {
                xy = `${i}${j}${i}${j + 1}${i}${j + 2}${i + 1}${j}${i + 1}${j + 1}${i + 1}${j + 2}`;
                
                xsco += 0.5;
                localStorage.setItem(xy,xy);
                }
            if (
                j<6 && i<5 &&
                arrOfArr[i][j] === 'X' &&
                arrOfArr[i][j] === arrOfArr[i + 1][j] &&
                arrOfArr[i][j] === arrOfArr[i + 2][j] &&
                arrOfArr[i][j + 1] === 'X' &&
                arrOfArr[i][j + 1] === arrOfArr[i + 1][j + 1] &&
                arrOfArr[i][j + 1] === arrOfArr[i + 2][j + 1] &&
                !localStorage.getItem(`${i}${j}${i + 1}${j}${i + 2}${j}${i}${j + 1}${i + 1}${j + 1}${i + 2}${j + 1}`)
                ) {
                xy = `${i}${j}${i + 1}${j}${i + 2}${j}${i}${j + 1}${i + 1}${j + 1}${i + 2}${j + 1}`;
                xsco += 0.5;
                localStorage.setItem(xy,xy);
                }
            if (
              j<5 && i<4 &&
              arrOfArr[i][j] === 'X' &&
              arrOfArr[i][j] === arrOfArr[i + 1][j +1] &&
              arrOfArr[i][j] === arrOfArr[i + 2][j+2] &&
              arrOfArr[i+1][j] === 'X' &&
              arrOfArr[i+1][j] === arrOfArr[i + 2][j + 1] &&
              arrOfArr[i+1][j] === arrOfArr[i + 3][j + 2] &&
              !localStorage.getItem(`${i}${j}${i + 1}${j+1}${i + 2}${j+2}${i+1}${j}${i +2}${j + 1}${i + 3}${j + 2}`)
              ) {
              xy = `${i}${j}${i + 1}${j+1}${i + 2}${j+2}${i+1}${j}${i +2}${j + 1}${i + 3}${j + 2}`;
              xsco += 0.5;
                }
            if (
                  j<5 && i<4 &&
                  arrOfArr[i][j] === 'O' &&
                  arrOfArr[i][j] === arrOfArr[i + 1][j +1] &&
                  arrOfArr[i][j] === arrOfArr[i + 2][j+2] &&
                  arrOfArr[i+1][j] === 'O' &&
                  arrOfArr[i+1][j] === arrOfArr[i + 2][j + 1] &&
                  arrOfArr[i+1][j] === arrOfArr[i + 3][j + 2] &&
                  !localStorage.getItem(`${i}${j}${i + 1}${j+1}${i + 2}${j+2}${i+1}${j}${i +2}${j + 1}${i + 3}${j + 2}`)
                  ) {
                  xy = `$${i}${j}${i + 1}${j+1}${i + 2}${j+2}${i+1}${j}${i +2}${j + 1}${i + 3}${j + 2}`;
                  osco += 0.5;
                  localStorage.setItem(xy,xy);
                  }
            if (
                    i>=3 && j<5 &&
                    arrOfArr[i][j] === 'O' &&
                    arrOfArr[i][j] === arrOfArr[i - 1][j + 1] &&
                    arrOfArr[i][j] === arrOfArr[i - 2][j + 2] &&
                    arrOfArr[i -1][j] === 'O' &&
                    arrOfArr[i - 1][j] === arrOfArr[i - 2][j + 1] &&
                    arrOfArr[i - 1][j] === arrOfArr[i - 3][j + 2] &&
                    !localStorage.getItem(`${i}${j}${i - 1}${j + 1}${i - 2}${j + 2}${i - 1}${j}${i - 2}${j + 1}${i - 3}${j + 2}`)
                  ) {
                    xy = `${i}${j}${i - 1}${j + 1}${i - 2}${j + 2}${i - 1}${j}${i - 2}${j + 1}${i - 3}${j + 2}`;
                    ;
                    osco += 0.5;
                    localStorage.setItem(xy,xy)}
            if (
              i>=3 && j<5 &&
              arrOfArr[i][j] === 'X' &&
              arrOfArr[i][j] === arrOfArr[i - 1][j + 1] &&
              arrOfArr[i][j] === arrOfArr[i - 2][j + 2] &&
              arrOfArr[i -1][j] === 'X' &&
              arrOfArr[i - 1][j] === arrOfArr[i - 2][j + 1] &&
              arrOfArr[i - 1][j] === arrOfArr[i - 3][j + 2] &&
              !localStorage.getItem(`${i}${j}${i - 1}${j + 1}${i - 2}${j + 2}${i - 1}${j}${i - 2}${j + 1}${i - 3}${j + 2}`)
            ) {
              xy = `${i}${j}${i - 1}${j + 1}${i - 2}${j + 2}${i - 1}${j}${i - 2}${j + 1}${i - 3}${j + 2}`;
              ;
              xsco += 0.5;
              localStorage.setItem(xy,xy)}
            if (
                    j<1 &&
                    arrOfArr[i][j] === 'O' &&
                    arrOfArr[i][j + 1] === 'O' &&
                    arrOfArr[i][j + 2] === 'O' &&
                    arrOfArr[i][j + 3] === 'O' &&
                    arrOfArr[i][j + 4] === 'O' &&
                    arrOfArr[i][j + 5] === 'O' &&
                    arrOfArr[i][j + 6] === 'O' &&
                    !localStorage.getItem(`${i}${j}${i}${j+1}${i}${j+2}${i}${j+3}${i}${j+4}${i}${j+5}${i}${j+6}`)
                  ) {
                    xy = `${i}${j}${i}${j+1}${i}${j+2}${i}${j+3}${i}${j+4}${i}${j+5}${i}${j+6}`;
                    ;
                    osco += 5;
                    localStorage.setItem(xy, xy);
                  }
            if (
                    i<1 &&
                    arrOfArr[i][j] === 'O' &&
                    arrOfArr[i + 1][j] === 'O' &&
                    arrOfArr[i + 2][j] === 'O' &&
                    arrOfArr[i + 3][j] === 'O' &&
                    arrOfArr[i + 4][j] === 'O' &&
                    arrOfArr[i + 5][j] === 'O' &&
                    arrOfArr[i + 6][j] === 'O' &&
                    !localStorage.getItem(`${i}${j}${i+1}${j}${i+2}${j}${i+3}${j}${i+4}${j}${i+5}${j}${i+6}`)
                  ) {
                    xy = `${i}${j}${i+1}${j}${i+2}${j}${i+3}${j}${i+4}${j}${i+5}${j}${i+6}`;
                    ;
                    osco += 5;
                    localStorage.setItem(xy, xy);
                  }
            if (
                    j<1 &&
                    arrOfArr[i][j] === 'X' &&
                    arrOfArr[i][j + 1] === 'X' &&
                    arrOfArr[i][j + 2] === 'X' &&
                    arrOfArr[i][j + 3] === 'X' &&
                    arrOfArr[i][j + 4] === 'X' &&
                    arrOfArr[i][j + 5] === 'X' &&
                    arrOfArr[i][j + 6] === 'X' &&
                    !localStorage.getItem(`${i}${j}${i}${j+1}${i}${j+2}${i}${j+3}${i}${j+4}${i}${j+5}${i}${j+6}`)
                  ) {
                    xy = `${i}${j}${i}${j+1}${i}${j+2}${i}${j+3}${i}${j+4}${i}${j+5}${i}${j+6}`;
                    ;
                    xsco += 5;
                    localStorage.setItem(xy, xy);
                  }
            if (
                    i<1 &&
                    arrOfArr[i][j] === 'X' &&
                    arrOfArr[i + 1][j] === 'X' &&
                    arrOfArr[i + 2][j] === 'X' &&
                    arrOfArr[i + 3][j] === 'X' &&
                    arrOfArr[i + 4][j] === 'X' &&
                    arrOfArr[i + 5][j] === 'X' &&
                    arrOfArr[i + 6][j] === 'X' &&
                    !localStorage.getItem(`${i}${j}${i+1}${j}${i+2}${j}${i+3}${j}${i+4}${j}${i+5}${j}${i+6}`)
                  ) {
                    xy = `${i}${j}${i+1}${j}${i+2}${j}${i+3}${j}${i+4}${j}${i+5}${j}${i+6}`;
                    ;
                    xsco += 5;
                    localStorage.setItem(xy, xy);
                  }
            if (
                i == 0 && j == 0 &&
                    arrOfArr[i][j] === 'O' &&
                    arrOfArr[i + 1][j + 1] === 'O' &&
                    arrOfArr[i + 2][j + 2] === 'O' &&
                    arrOfArr[i + 3][j + 3] === 'O' &&
                    arrOfArr[i + 4][j + 4] === 'O' &&
                    arrOfArr[i + 5][j + 5] === 'O' &&
                    arrOfArr[i + 6][j + 6] === 'O' &&
                    !localStorage.getItem(`${i}${j}${i + 1}${j + 1}${i + 2}${j + 2}${i + 3}${j + 3}${i + 4}${j + 4}${i + 5}${j + 5}${i + 6}${j + 6}`)
                  ) {
                    xy = `${i}${j}${i + 1}${j + 1}${i + 2}${j + 2}${i + 3}${j + 3}${i + 4}${j + 4}${i + 5}${j + 5}${i + 6}${j + 6}`;
                    ;
                    osco += 5;
                    localStorage.setItem(xy, xy);
                  }
            if (
                i==0 && j==6 &&
                    arrOfArr[i][j] === 'O' &&
                    arrOfArr[i + 1][j - 1] === 'O' &&
                    arrOfArr[i + 2][j - 2] === 'O' &&
                    arrOfArr[i + 3][j - 3] === 'O' &&
                    arrOfArr[i + 4][j - 4] === 'O' &&
                    arrOfArr[i + 5][j - 5] === 'O' &&
                    arrOfArr[i + 6][j - 6] === 'O' &&
                    !localStorage.getItem(`${i}${j}${i + 1}${j - 1}${i + 2}${j - 2}${i + 3}${j - 3}${i + 4}${j - 4}${i + 5}${j - 5}${i + 6}${j - 6}`)
                  ) {
                    xy = `${i}${j}${i + 1}${j - 1}${i + 2}${j - 2}${i + 3}${j - 3}${i + 4}${j - 4}${i + 5}${j - 5}${i + 6}${j - 6}`;
                    ;
                    osco += 5;
                    localStorage.setItem(xy, xy);
                  }
            if (
                    i == 0 && j == 0 &&
                        arrOfArr[i][j] === 'X' &&
                        arrOfArr[i + 1][j + 1] === 'X' &&
                        arrOfArr[i + 2][j + 2] === 'X' &&
                        arrOfArr[i + 3][j + 3] === 'X' &&
                        arrOfArr[i + 4][j + 4] === 'X' &&
                        arrOfArr[i + 5][j + 5] === 'X' &&
                        arrOfArr[i + 6][j + 6] === 'X' &&
                        !localStorage.getItem(`${i}${j}${i + 1}${j + 1}${i + 2}${j + 2}${i + 3}${j + 3}${i + 4}${j + 4}${i + 5}${j + 5}${i + 6}${j + 6}`)
                      ) {
                        xy = `${i}${j}${i + 1}${j + 1}${i + 2}${j + 2}${i + 3}${j + 3}${i + 4}${j + 4}${i + 5}${j + 5}${i + 6}${j + 6}`;
                        ;
                        xsco += 5;
                        localStorage.setItem(xy, xy);
                      }
            if (
                    i==0 && j==6 &&
                        arrOfArr[i][j] === 'X' &&
                        arrOfArr[i + 1][j - 1] === 'X' &&
                        arrOfArr[i + 2][j - 2] === 'X' &&
                        arrOfArr[i + 3][j - 3] === 'X' &&
                        arrOfArr[i + 4][j - 4] === 'X' &&
                        arrOfArr[i + 5][j - 5] === 'X' &&
                        arrOfArr[i + 6][j - 6] === 'X' &&
                        !localStorage.getItem(`${i}${j}${i + 1}${j - 1}${i + 2}${j - 2}${i + 3}${j - 3}${i + 4}${j - 4}${i + 5}${j - 5}${i + 6}${j - 6}`)
                      ) {
                        xy = `${i}${j}${i + 1}${j - 1}${i + 2}${j - 2}${i + 3}${j - 3}${i + 4}${j - 4}${i + 5}${j - 5}${i + 6}${j - 6}`;
                        ;
                        xsco += 5;
                        localStorage.setItem(xy, xy);
                      }
            if (i> 0 && j>0 &&
              arrOfArr[i][j]=== 'O' && arrOfArr[i][j+1] === 'O' && arrOfArr[i+1][j] === "O" && arrOfArr[i+1][j+1] === "O" && !localStorage.getItem(`${i}${j}${i}${j+1}${i+1}${j}${i+1}${j+1}`))
              {
                xy = `${i}${j}${i}${j+1}${i+1}${j}${i+1}${j+1}`
                
                osco +=0.1
                localStorage.setItem(xy,xy)
              }
              if (i> 0 && j>0 &&
                arrOfArr[i][j]=== 'X' && arrOfArr[i][j+1] === 'X' && arrOfArr[i+1][j] === "X" && arrOfArr[i+1][j+1] === "X" && !localStorage.getItem(`${i}${j}${i}${j+1}${i+1}${j}${i+1}${j+1}`))
                {
                  xy = `${i}${j}${i}${j+1}${i+1}${j}${i+1}${j+1}`
                  
                  xsco +=0.1
                  localStorage.setItem(xy,xy)
                }
              if(chance / 2 === 6){
                if (osco===0){
                  osco -= 0.2
                }
                if(xsco ===0){
                  xsco -= 0.2
                }
                
              }
            
        }
    }
}
gride = document.getElementById("gride")
gride.addEventListener('click', (e) => {
  
  if (chance%2==0){
    
  
  o1=(e.target.id)
  
  o=document.getElementById(o1)
  

  
  o.textContent='O'
  o.style.color= 'aliceblue'

  arrOfArr[o1[0]][o1[1]] = 'O'
  o.style.pointerEvents = 'none'
  chance ++
  check()
  document.getElementById('oin').innerText = Math.round(osco*100)/100;
  document.getElementById('xin').innerText = Math.round(xsco*100)/100;
  }
  else if(chance%2!=0){
    
    
    
    x1=e.target.id
    x=document.getElementById(x1)
        x.textContent='X'
    x.style.color='red'
    
  
    arrOfArr[x1[0]][x1[1]] = 'X'

    x.style.pointerEvents = 'none'
    chance ++
    check()
    document.getElementById('oin').innerText = Math.round(osco*100)/100;
  document.getElementById('xin').innerText = Math.round(xsco*100)/100;
  }
})



