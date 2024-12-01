import { useEffect, useState } from "react";
import { Alert, Modal, Spin } from "antd";
import Button from "@/components/ui/button";
import FormText from "../Form/FormText";
import { useFetchLoginData } from "../../../hooks/useFetch";
import { saveStorage } from "../../../storage/storage";

const ModalForLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData, loading] = useFetchLoginData();

  const params = {
    email: email,
    password: password,
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const saveTokenAndUserToStorage = () => {
    if (data && data.token && data.user) {
      saveStorage("token", data.token);
      saveStorage("user", data.user);
      location.reload();
    }
  };

  useEffect(() => {
    saveTokenAndUserToStorage();
  }, [data]);

  const handleOk = async () => {
    await setData(params);
    saveTokenAndUserToStorage();
    if (data && data.token && data.user) {
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Button size="sm" rounded={true} border={true} onClick={showModal}>
        Giriş
      </Button>

      <Modal
        title={
          <h3 className="font-bold text-[18px] darkMode text-center mb-10">
            Hesabınıza giriş edin
          </h3>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {loading ? (
          <Spin tip="Yüklənir...">
            <Alert className="h-[98px]" type="info" />
          </Spin>
        ) : (
          <>
            {" "}
            <FormText
              block={false}
              value={email}
              placeholder={"Test mail: erna54@hotmail.com"}
              onChange={onChangeEmail}
              type={"email"}
              padding={"p-1"}
              labelName={"Email"}
              errorMsg={
                data && <p className="text-red-500">{data?.message?.email}</p>
              }
            />
            <FormText
              block={false}
              value={password}
              placeholder={"Test password: 123"}
              onChange={onChangePassword}
              type={"password"}
              padding={"p-1"}
              labelName={"Şifrə"}
              errorMsg={
                data && (
                  <p className="text-red-500">{data?.message?.password}</p>
                )
              }
            />
          </>
        )}
      </Modal>
    </>
  );
};
export default ModalForLogin;
