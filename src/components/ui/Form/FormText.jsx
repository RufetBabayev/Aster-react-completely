import { useForm } from "react-hook-form";
import Button from "@/components/ui/button";
import { useNotify } from "../../../context/notification";
function FormText({
  block,
  placeholder,
  padding,
  labelName,
  type,
  errorMsg,
  value,
  onChange = () => {},
}) {
  const { contextHolder, openNotificationWithIcon } = useNotify();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if (data.email !== "") {
      openNotificationWithIcon("success");
    }
  };
  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className=" flex justify-between mb-2">
          <p className="font-bold ">{labelName}</p>
          <div className={`${!labelName ? "w-full " : ""} `}>
            <input
              {...register(
                "email",
                { required: true },
                {
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                }
              )}
              aria-invalid={errors.email ? "true" : "false"}
              value={value}
              onChange={onChange}
              className={`${
                labelName ? "lg:w-[385px] w-[270px]  " : "w-full "
              } outline-none border border-gray-400 ${padding} rounded-theme shrink-0 text-black`}
              placeholder={placeholder}
              type={type}
            />

            {errors.email?.type === "required" && (
              <p className="text-sm ml-1 text-red-500" role="alert">
                Düzgün formada doldurulmalıdır
              </p>
            )}
            {!errors.email && errorMsg}
          </div>
        </label>
        {block && (
          <Button
            type={"submit"}
            block={block}
            padding={true}
            rounded={"rounded-theme"}
            property={"sky-blue"}
          >
            Abunə ol
          </Button>
        )}
      </form>
    </>
  );
}

export default FormText;
