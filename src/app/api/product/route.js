import { dbConnection } from "@/utils/dbconnection";
import { Product } from "@/app/lib/models";

// creating a post request to make new post about the product
export async function POST(request) {
  await dbConnection();
  const productData = await request.json();
  if (!productData) throw new Error("products inputs is needed here");
  try {
    const data = new Product(productData);
    const savedData = await data.save();
    return new Response(JSON.stringify(savedData), {
      status: 200,
      statusText: "created successfully",
    });
  } catch (error) {
    console.log(error);
  }
}
