"use server";
import { supabase } from "./supabase";

export async function guest() {
  const { data: guests, error } = await supabase.from("guests").select("*");

  if (error) {
    console.error("Error fetching guests:", error);
  }

  return guests;
}

export default async function handler() {
  const appId = process.env.NUTRITIONIX_APP_ID;
  const apiKey = process.env.NUTRITIONIX_API_KEY;
  const query = "";

  try {
    const res = await fetch(
      `https://trackapi.nutritionix.com/v2/natural/nutrients`,
      {
        method: "POST",
        headers: {
          "x-app-id": appId,
          "x-app-key": apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: query
        })
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
