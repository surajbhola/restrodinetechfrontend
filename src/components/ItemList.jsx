import { useQuery } from "@tanstack/react-query";
import FoodItem from "./FoodItem";
import "./itemList.scss";
import LoadingIndicator from "./UI/LoadingIndicator.jsx";
import ErrorBlock from "./UI/ErrorBlock.jsx";
import { fetchFoodItems } from "../util/http";

const ItemList = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["foodItems"],
    queryFn: fetchFoodItems,
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch food items."}
      />
    );
  }

  if (data) {
    content = (
      <div>
        {data.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            category={item.category}
            eta={item.eta}
            itemname={item.itemname}
          ></FoodItem>
        ))}
      </div>
    );
  }
  return (
    <div className="itemList">
      <div className="itemsHeading">
        <div className="itemHeadingInternalDiv">
          <h3>Category</h3>
        </div>
        <div className="itemHeadingInternalDiv">
          <h3>Item Name</h3>
        </div>
        <div className="itemHeadingInternalDiv">
          <h3>ETA</h3>
        </div>
      </div>
      {content}
    </div>
  );
};

export default ItemList;
