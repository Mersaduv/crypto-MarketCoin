import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
const ShowPrice = (price) => {
  return (
    <div className=" inline-block font-bold  ">
      {price > 0 ? (
        <div className=" flex  ">
          <AiFillCaretUp className="text-green-600 dark:text-green-400" />

          <p className="text-green-600 dark:text-green-400 text-sm">+{price}</p>
        </div>
      ) : (
        <div className=" flex   ">
          <AiFillCaretDown className="text-red-600 dark:text-red-400 " />

          <p className="text-red-600 dark:text-red-400 text-sm">{price}</p>
        </div>
      )}
    </div>
  );
};

export { ShowPrice };
