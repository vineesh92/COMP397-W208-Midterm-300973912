module objects {
  export class Island extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("island");
      this.Start();
    }

    

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dy = 5;
      this._dx=5;
      this.Reset();
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    public Update2():void {
      this.Move2();
      this.CheckBounds2();
    }

    // reset the objects location to some value
    public Reset():void {
      this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
      this.y = -this.height;

      //this.x = 600;
      //this.y = Math.floor((Math.random() * (640 - this.height)) + this.halfHeight);
    }

    public Reset2():void {
     // this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
     // this.y = -this.height;

      this.x = 600;
      this.y = Math.floor((Math.random() * (640 - this.height)) + this.halfHeight);
    }

    // move the object to some new location
    public Move():void {
      this.y += this._dy;
     // this.x -= this._dx;

    }

    public Move2():void {
      //this.y += this._dy;
      this.x -= this._dx;

    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // check lower bounds
      if(this.y >= 480 + this.height) {
        this.Reset();
      }

     
    }
    public CheckBounds2():void {
      // check lower bounds
      if(this.x >= 480 + this.width) {
        this.Reset2();
      }
  }
}
}