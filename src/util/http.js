import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchFoodItems() {
  let url = "https://restrodinetech-w0mh.onrender.com/api/v1/fooditems";

  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the Food Items");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const FoodItems = await response.json();
  console.log(FoodItems);
  return FoodItems;
}
export async function deleteFoodItems(id) {
  let url = `https://restrodinetech-w0mh.onrender.com/api/v1/fooditems/${id}`;

  const response = await fetch(url, { method: "DELETE" });
  if (!response.ok) {
    const error = new Error("An error occurred while deleting the Food Item");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const FoodItems = await response.json();
  return FoodItems;
}
export async function createNewFoodItem(foodItemData) {
  const response = await fetch(`https://restrodinetech-w0mh.onrender.com/api/v1/fooditems`, {
    method: "POST",
    body: JSON.stringify(foodItemData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the food item");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { foodItem } = await response.json();

  return foodItem;
}
