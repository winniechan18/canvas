class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
      }
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = "green";
      this.contextReal.beginPath();
      this.origX = coord[0]; //x-axis - offsetX
      this.origY = coord[1]; //y-axis - offsetY
    }
    onDragging(coord, event) {
        this.contextDraft.fillStyle = "green";
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height); //- to clear draft context before redrawing
        this.contextDraft.beginPath();        
        this.contextDraft.ellipse(this.origX, this.origY, Math.abs(coord[0]- this.origX), Math.abs(coord[1] - this.origY), 0 * Math.PI/180, 0, 2 * Math.PI) // rotation hardcoded as zero -  drawing an arc from zero @ x-axis to 2pi;
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }
    onMouseMove() {}
    onMouseUp(coord) {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.ellipse(this.origX, this.origY, Math.abs(coord[0]- this.origX), Math.abs(coord[1] - this.origY), 0* Math.PI/180, 0, 2 * Math.PI)// rotation hardcoded as zero 
        this.contextReal.fill();
        this.contextReal.stroke();
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }