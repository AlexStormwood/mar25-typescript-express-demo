import express from "express";
import type { TypeTesterPostBody } from "../types/TypeTesterTypes.js";

const routes = express.Router();

routes.post("/", (request, response) => {
	// This route expects JSON data on the request body 

	let {message, status}:TypeTesterPostBody = request.body;

	response.json({
		message: "Received a message with a status code of " + status,
	});

});