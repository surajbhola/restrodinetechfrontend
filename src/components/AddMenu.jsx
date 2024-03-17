import "./AddMenu.scss";
import { useMutation } from "@tanstack/react-query";

import { Link, useNavigate } from "react-router-dom";
import { createNewFoodItem, queryClient } from "./../util/http";
import ErrorBlock from "./UI/ErrorBlock";
import MenuForm from "./MenuForm";
const AddMenu = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewFoodItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foodItems"] }); 
      navigate("/dashboard");
    }, 
  });

  function handleSubmit(formData) {
    mutate(formData);
  }
  return (
    <div className="AddMenuDiv">
      <h2>Menu Details</h2>
      <div className="AddMenuPage">
        <div className="FormDiv">
          <h2>Add Your Menu</h2>
          <MenuForm onSubmit={handleSubmit}>
            {isPending && "Submitting..."}
            {!isPending && (
              <button type="submit" className="SaveBtn">
                Save
              </button>
            )}
          </MenuForm>
          {isError && (
            <ErrorBlock
              title={"Failed to create food item"}
              message={
                error.info?.message ||
                "Failed to create food item. Please check your input and try again later"
              }
            ></ErrorBlock>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
