export const drawRect = (detections, ctx) =>{
	detections.forEach(prediction =>{
		//Get Prediction results
		const [x, y, width, height] = prediction["bbox"];
		const  text = prediction['class'];

		//styling
		const color = 'blue'
		//const color = '#'+ Math.floor(Math.random()*16777215).toString(16);
		ctx.strokeStyle = color
		ctx.font = '20px Arial'
		ctx.fillStyle = color

		//Rectangle and text
		ctx.beginPath()
		ctx.fillText(text, x, y)
		ctx.rect(x, y, width, height)
		ctx.stroke()
	})
}