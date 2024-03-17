import React from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteFoodItems, queryClient } from "./../util/http";
import { useQueryClient } from "@tanstack/react-query";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./foodItem.scss";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ category, itemname, eta, id }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteFoodItems,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foodItems"] }); 
      navigate("/dashboard");
    }, 
  });

  function handleSubmit() {
    mutate(id);
  }

  return (
    <div className="menuItem">
      <div className="menuItemInternalDiv">
        <h3>{category}</h3>
      </div>
      <div className="menuItemInternalDiv">
        <h3>{itemname}</h3>
      </div>
      <div className="menuItemInternalDiv">
        <h3>{eta}</h3>
      </div>
      <DeleteOutlineOutlinedIcon onClick={handleSubmit} className="deleteBtn"/>
    </div>
  );
};

export default FoodItem;
