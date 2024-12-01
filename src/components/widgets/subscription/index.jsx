import { GoGift } from "react-icons/go";
import Button from "../../ui/button";
import { useState } from "react";

function Subscription({ className }) {
  const [text, setText] = useState("Yüksəlt");
  return (
    <div
      className={`bg-skyBlue  rounded-theme text-white ml-[16px] mr-3 hidden md:block lg:block ${
        className ? className : ""
      } p-[20px]`}
    >
      {" "}
      <div className="flex items-center justify-between mb-[13px] ">
        <GoGift className="text-[24px]" />
        <span> Premiuma abunə ol</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[22px]">
          $8 <small className="text-[15px]">/a</small>
        </span>
        <Button
          onClick={() => setText("Yüksəldildi")}
          property={"primary"}
          rounded={true}
        >
          {text}
        </Button>
      </div>
    </div>
  );
}

export default Subscription;
