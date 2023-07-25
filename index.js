if (typeof window !== 'undefined') {
    let gamertext = document.getElementById('gamertext')
    let restartBtn = document.getElementById('restartBtn')
    let boxes = Array.from(document.getElementsByClassName('box'))
    let winnerIndication=getComputedStyle(document.body).getPropertyValue('--win-blocks')
   
    const O_TEXT = "O"
    const X_TEXT = "X"
    let currplayer = X_TEXT

    let spaces = Array(9).fill(null)


    const startgame = () => {
        boxes.forEach(box => box.addEventListener('click', boxClicked))
    }
    function boxClicked(u) {
        const id = u.target.id

        if (!spaces[id]) {
            spaces[id] = currplayer
            u.target.innerText = currplayer
            if(playerHasWon()){
                gamertext='${currplayer} has won!'
                let win_blocks=playerHasWon()
                 win_blocks.map(box=>boxes[box].style.backgroundColor=winnerIndication)
                 return
                }
            currplayer = currplayer == X_TEXT ? O_TEXT : X_TEXT
        }
    }
    const winningcombination=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]
    function playerHasWon(){
           for (const condition of winningcombination){
            let[a,b,c]=condition
            if(spaces[a]&& (spaces[a]==spaces[b] && spaces[a]==spaces[c] )){
                return [a,b,c]
           }
     }
    restartBtn.addEventListener('click',restart)
    function restart(){
        spaces.fill(null)
        boxes.forEach(box =>{
            box.innerText=''
            box.style.backgroundColor=''
        })
        gamertext='TIC TAC TOE'
        currplayer=X_TEXT
    }
}
    startgame()
}
