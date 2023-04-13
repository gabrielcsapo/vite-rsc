"use server";

import { redirect } from "stream-react/navigation";
import db from "./db";

export async function increment() {
	let count = await getCount();
	await db.execute("UPDATE Counter SET value = ?", [count + 1]);
	console.log("incremented");
	redirect("/" + (count + 1));
}

export async function getCount() {
	try {
		return (
			(await db.execute("SELECT value from Counter LIMIT 1")).rows[0].value ?? 0
		);
	} catch (e) {
		console.log(e);
		throw e;
	}
}
