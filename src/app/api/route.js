import mongoose from "mongoose";
import { dbConnection } from "@/utils/dbconnection";
import message from "@/utils/messageModel";

export async function POST(request) {
  await dbConnection();
  const { topic, content } = await request.json();
  try {
    const newMessage = new message({ topic, content });
    const saved = await newMessage.save();
    return new Response(JSON.stringify(saved));
  } catch (error) {
    console.log(error);
  }
}
