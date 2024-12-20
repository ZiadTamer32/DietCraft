"use server";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
// import { toast } from "react-hot-toast";

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

// export default function SignUpComponent() {
//   const { data } = useCreateGuest();

//   async function SignUp({ fullName, email, password, lastName }) {
//     let { error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: { data: { fullName, lastName } }
//     });
//     if (error) {
//       console.error(error.message);
//       throw new Error(error.message);
//     }
//     return data;
//   }
// }
export async function SignUpGuest(formState) {
  if (!formState.email || !formState.password) {
    console.error("Please provide both email and password.");
    return;
  }
  const firstName = formState.firstName;
  const lastName = formState.lastName;
  const { error } = await supabase.auth.signUp({
    email: formState.email,
    password: formState.password,
    options: { data: { firstName, lastName } }
  });
  if (error) {
    console.error("Sign up failed:", error.message);
  } else {
    console.log("User signed up successfully");
  }
  redirect("/account");
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function login(formState) {
  const email = formState.get("email");
  const password = formState.get("password");
  if (!email || !password) {
    console.error("Email and password are required");
    return;
  }
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    console.error("Login failed:", error.message);
    // toast.error("Login failed: " + error.message);
  } else {
    console.log("User logged in successfully");
    redirect("/account");
  }
}
