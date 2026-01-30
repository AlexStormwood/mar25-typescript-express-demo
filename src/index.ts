import { app } from "./server.js";


console.log("Hello, world!");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server is running on " + PORT);
})