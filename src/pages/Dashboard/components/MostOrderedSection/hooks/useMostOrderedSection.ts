import chickenNoodles from "../../../../../assets/images/chicken-noodles.png";
import freshSalad from "../../../../../assets/images/fresh-salad.png";
import hotChickenWings from "../../../../../assets/images/hot-chicken-wings.png";
import smoothieFruit from "../../../../../assets/images/smoothie-fruit.png";

export function useMostOrderedSection() {
  const orders = [
    { id: 1, name: "Fresh Salad Bowl", price: 45, imgSrc: freshSalad },
    { id: 2, name: "Chicken Noodles", price: 75, imgSrc: chickenNoodles },
    { id: 3, name: "Smoothie Fruits", price: 45, imgSrc: smoothieFruit },
    { id: 4, name: "Hot Chicken Wings", price: 45, imgSrc: hotChickenWings },
  ];
  return {
    data: {
      orders,
    },
  };
}
