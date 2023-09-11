import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl {
    sanke: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = 'ArrowRight'
    islive: boolean = true

    constructor() {
        this.sanke = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按下的事件
        console.log('事件控制启动了')
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.run()
    }

    keyDownHandler(event: KeyboardEvent) {
        console.log(event.key)
        this.direction = event.key
    }

    run() {
        let x = this.sanke.X
        let y = this.sanke.Y

        switch (this.direction) {
            case 'ArrowUp':
                y -= 10
                break;
            case 'ArrowDown':
                y += 10
                break;
            case 'ArrowLeft':
                x -= 10
                break;
            case 'ArrowRight':
                x += 10
                break;
        }
        this.checkEat(x, y)
        try {
            this.sanke.X = x
            this.sanke.Y = y
        } catch (e: any) {
            alert('Game Over')
            this.islive = false
        }

        this.islive && setTimeout(this.run.bind(this), 300)

    }
    checkEat(x: number, y: number) {
        if (x === this.food.x && y === this.food.y) {
            this.food.change()
            this.scorePanel.addScore()
            this.sanke.addBody()
        }
    }

}