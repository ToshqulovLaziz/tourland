import { Form, Input, Select, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";
const FormList = () => {
  const { t } = useTranslation();
  const prefixSelector = "+998";
  const notify = () =>
    toast.success("Success message !", {
      position: "top-right",
    });
  const onFinish = (values) => {
    const token = "7637529502:AAGgV86zm6gTXdHKaS1JknH8UnMOcwZvFQM";
    const chat_id = 1830065281;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: JSON.stringify(values),
      },
    }).then(() => {
      notify();
    });
  };
  return (
    <section className=" mt-[60px]">
      <div className="container">
        <div className=" shadow-2xl py-[40px] px-[70px] rounded-2xl">
          <h2 className="text-center text-[32px] max-md:text-[26px] font-extrabold mb-3">
            {t("form_title")}
          </h2>
          <Form onFinish={(values) => onFinish(values)} layout="vertical">
            <div className="flex justify-between max-md:gap-4">
              <div className="w-[450px] max-md:w-1/2">
                <Form.Item
                  name="your_name"
                  label={t("form_name")}
                  rules={[
                    { required: true, message: "Please input your Your Name!" },
                  ]}
                >
                  <Input placeholder={t("form_nama_ph")} />
                </Form.Item>
                <Form.Item
                  name="number_of_guests"
                  label={t("form_num")}
                  rules={[
                    {
                      required: true,
                      message: "Please input Number of Guests!",
                    },
                  ]}
                >
                  <Select
                    placeholder={t("form_num_ph")}
                    options={[
                      {
                        label: <span>1</span>,
                        value: "1",
                      },
                      {
                        label: <span>2</span>,
                        value: "2",
                      },
                      {
                        label: <span>3</span>,
                        value: "3",
                      },
                      {
                        label: <span>4+</span>,
                        value: "4+",
                      },
                    ]}
                  />
                </Form.Item>
              </div>
              <div className="w-[450px]  max-md:w-1/2">
                <Form.Item
                  name="phone"
                  label={t("form_phone")}
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                  />
                </Form.Item>
                <Form.Item
                  name="date"
                  label={t("form_date")}
                  rules={[
                    {
                      required: true,
                      message: "Please input Check In Date!",
                    },
                  ]}
                >
                  <Input type="date" />
                </Form.Item>
              </div>
            </div>
            <Form.Item
              name="destination"
              label={t("form_destination")}
              rules={[
                {
                  required: true,
                  message: "Please input Choose Your Destination",
                },
              ]}
            >
              <Select
                name="visa_support"
                placeholder={t("form_destination_ph")}
                options={[
                  {
                    label: <span>{t("form_destination_select1")}</span>,
                    value: "Beijing",
                  },
                  {
                    label: <span>{t("form_destination_select1")}</span>,
                    value: "China",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="visa_support"
              label={t("form_support")}
              rules={[
                {
                  required: true,
                  message: "Please input Choose Your Visa Support",
                },
              ]}
            >
              <Select
                placeholder={t("form_support_ph")}
                options={[
                  {
                    label: <span>{t("form_support_select2")}</span>,
                    value: "China",
                  },
                  {
                    label: <span>{t("form_support_select2")}</span>,
                    value: "Pekin",
                  },
                ]}
              />
            </Form.Item>
            <Button
              className="bg-[#B5DBF3] text-white  w-full py-6 text-center font-extrabold text-[18px] rounded-3xl hover:bg-white border-2 hover:transition-colors border-[#B5DBF3]"
              htmlType="submit"
            >
              {t("form_btn_text")}
            </Button>
            <ToastContainer
              autoClose={5000}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormList;
