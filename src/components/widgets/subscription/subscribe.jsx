import FormText from "../../ui/Form/FormText";
function SubscribeEmail({ flex, p, className }) {
  return (
    <>
      <div
        className={`darkMode ${
          flex
            ? `right-section-cards space-y-3 text-[15px] `
            : `bg-white p-3 ${className} lg:max-w-[364px] min-w-full mt-5`
        }`}
      >
        <p className={`${flex ? "font-bold text-[15px]" : ""}`}>
          Xəbərlərimizə abunə ol
        </p>
        <div
          className={`space-y-3 ${flex ? "flex items-center space-x-3 " : ""}`}
        >
          <FormText
            block={true}
            type={"email"}
            padding={p}
            placeholder={"Email daxil et"}
          />
        </div>
      </div>
    </>
  );
}

export default SubscribeEmail;
