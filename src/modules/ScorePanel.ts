export default class ScorePanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    mixLevel: number
    upScore: number
    constructor(mixLevel: number = 10, upScore: number = 10) {
        this.mixLevel = mixLevel
        this.upScore = upScore
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
    }
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }
    levelUp() {
        if (this.level < this.mixLevel) {
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }

    }
}