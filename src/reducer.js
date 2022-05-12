export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newcart = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      if (index >= 0) {
        newcart.splice(index, 1);
      } else {
        console.log("Error while removing product");
      }
      return { ...state, basket: newcart };
  }
  //   case "REMOVE_FROM_BASKET":
  //     let newcart = [...state.basket];
  //     const index = state.basket.findIndex(
  //       (basketItem) => basketItem.id === action.id
  //     );
  //     if (index >= 0) {
  //       newcart.splice(index, 1);
  //     } else {
  //       console.log("Error while removing product");
  //     }
  //     return { ...state, basket: newcart };
  // }
};

export default reducer;
