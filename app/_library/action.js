"use server";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function guest() {
  const { data: guests, error } = await supabase.from("guests").select("*");

  if (error) {
    console.error("Error fetching guests:", error);
  }

  return guests;
}

// export default async function handler() {
//   const appId = process.env.NUTRITIONIX_APP_ID;
//   const apiKey = process.env.NUTRITIONIX_API_KEY;
//   const query = "";

//   try {
//     const res = await fetch(
//       `https://trackapi.nutritionix.com/v2/natural/nutrients`,
//       {
//         method: "POST",
//         headers: {
//           "x-app-id": appId,
//           "x-app-key": apiKey,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           query: query
//         })
//       }
//     );
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

export async function signInActions() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signInActionsFaceBook() {
  await signIn("facebook", { redirectTo: "/account" });
}
export async function signOutActions() {
  await signOut({ redirectTo: "/" });
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);
  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }
  return data;
}

export async function getGuest(email) {
  const { data } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}

export async function dietSubmission(formState) {
  const session = await auth();
  const guestId = session?.user?.guestId;
  const addGuest = {
    age: +formState.get("age"),
    height: +formState.get("height"),
    weight: +formState.get("weight"),
    numMeals: +formState.get("meals_per_day"),
    bodyFat: +formState.get("bodyFat"),
    gender: formState.get("gender"),
    activity: formState.get("activity"),
    plan: formState.get("plan"),
    dietDuration: formState.get("duration")
  };
  if (guestId) {
    const { error } = await supabase
      .from("guests")
      .update(addGuest)
      .eq("id", guestId)
      .select()
      .single();
    if (error) {
      throw new Error("Diet Recommendation could not be generated");
    }
  } else {
    const { error } = await supabase.from("guests").insert([addGuest]);
    if (error) {
      throw new Error("Diet Recommendation could not be generated");
    }
  }
}

export async function signUp() {
  let { data, error } = await supabase.auth.signUp({
    email: "someone@email.com",
    password: "FbafIXUOswwAWmlUlbLW"
  });
}
