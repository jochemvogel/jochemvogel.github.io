class Game {
    // Attributes
    private _element: HTMLElement = document.getElementById('container');
    private _player: Player;
    private _keeper: Keeper;
    private _ball: Ball;
    private _scoreboard: Scoreboard;

    // Constructor
    constructor() {
        this._keeper = new Keeper("GKPos1", 0, 540);
        this._scoreboard = new Scoreboard('scoreboard'); 
        this._ball = new Ball('ball', 62, 620);
        this._player = new Player('player', 0, 280);

        window.addEventListener('keydown', this.keyDownHandler);

        this.draw();
    }

    // Methods

    /**
     * Method to draw all the game items
     */
    public draw(): void {
        this._keeper.draw(this._element);
        this._ball.draw(this._element);
        this._player.draw(this._element);  
        this._scoreboard.draw(this._element);
    }

    /**
     * Method to update all the game items
     */
    public update() {
        this._player.update();
        this._ball.update();
        this._keeper.update();
        this._scoreboard.update();
    }
    
    /**
     * Events
     * - Keycode 37 --> left arrow
     * - Keycode 39 --> right arrow
     * - Keycode 32 --> spacebar
     * 
     * The value between the parentheses
     * is the amount of pixels.
     */
    public keyDownHandler = (e: KeyboardEvent): void => {
        if(e.keyCode === 37) {
            this._player.left(330);
            this._ball.left(330);
        } 
        else if(e.keyCode === 39) {
            this._player.right(330);
            this._ball.right(330);   
        } 
        else if(e.keyCode === 32) {
            this._ball.shoot(260);
            this._keeper.randomCorner(); 
        } 
        else {
            console.log("Unknown key");
        }
        this.update();
     }
}
