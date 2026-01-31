import { app } from "./server.js";


console.log("Hello, world!");

const PORT: number = Number(process.env.PORT) || 3000;
// inferred was "string | number"
// explicit is "number"

app.listen(PORT, () => {
	console.log("Server is running on " + PORT);
})