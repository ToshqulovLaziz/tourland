import { Modal, Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useForm } from "antd/lib/form/Form";
import { setModalVisibility } from "../../redux/modalSlice";
import axios from "axios";
const ModalVisibility = () => {
  const dispatch = useDispatch();
  const { modalVisibility } = useSelector((state) => state.modal);
  const { t } = useTranslation();
  const [form] = useForm();
  const prefixSelector = "+998";

  const onFinish = (values, form) => {
    const token = "7637529502:AAGgV86zm6gTXdHKaS1JknH8UnMOcwZvFQM";
    const chat_id = 1830065281;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: values,
      },
    }).then(() => {
      alert(t("alertText"));
      dispatch(setModalVisibility());
      form.resetFields();
    });
  };
  return (
    <>
      <Modal
        open={modalVisibility}
        onCancel={() => dispatch(setModalVisibility())}
        footer={false}
        className="fixed inset-0  flex justify-center items-center z-50"
      >
        <div className="w-full px-6 py-8 bg-white rounded-lg  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <div className="flex flex-col justify-between items-center">
            <div className="text-center mb-5">
              <UserOutlined className="text-[20px] p-3 rounded-full bg-[#A3E635] text-white" />
            </div>
            <Form
              className="flex flex-col justify-between items-center"
              onFinish={(values) => onFinish(values, form)}
              form={form}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First name!",
                    },
                  ]}
                >
                  <Input className="w-full" placeholder={t("firstName")} />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last name!",
                    },
                  ]}
                >
                  <Input className="w-full" placeholder={t("lastName")} />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    placeholder={t("phoneNumber")}
                    className="w-full"
                  />
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input className="w-full" placeholder={t("username")} />
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  className="bg-[#A3E635] text-white font-bold"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalVisibility;
