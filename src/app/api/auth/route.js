import mongoose from "mongoose";
import { dbConnection } from "@/utils/dbconnection";
import userModel from "@/utils/userModel";

// making a post request to the data base below
// this is register users
export async function POST(request) {
  // initiating the db connection below
  await dbConnection();
  const { username, email, isadmin, origin } = await request.json();
  console.log(username, email);
  if (!username || !email) {
    return new Response(
      JSON.stringify({ message: "bothing input are required" }),
      { status: 400, statusText: "failed to provide required inputs" }
    );
  }
  try {
    // creating new instance of a user
    const createUser = new userModel({ username, email, origin });
    // saving to the database
    const savedUser = await createUser.save();
    return new Response(JSON.stringify(savedUser), {
      status: 200,
      statusText: "successful",
    });
  } catch (error) {
    // handle any error below
  }
}

// making a get request to the database
// this will return all the registered users
export async function GET(request) {
  // creating new connection
  await dbConnection();
  try {
    const allUsers = await userModel.find();
    return new Response(JSON.stringify(allUsers), {
      status: 200,
      statusText: "successful",
    });
  } catch (error) {
    // handle any error below
  }
}
