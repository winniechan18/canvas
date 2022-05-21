class DrawingRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = "cornflowerblue";
      this.origX = coord[0]; //x-axis - offsetX
      this.origY = coord[1]; //y-axis - offsetY
    }
    onDragging(coord, event) {
      this.contextDraft.fillStyle = "cornflowerblue";
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); //dragging the rectangle to a certain size
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      ); //build the rectangle by calculating the difference btw starting position - ending position
    }
    onMouseMove() {}
    onMouseUp(coord) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }