import Button from "../button";
import { Controller, useForm } from "react-hook-form";
import { Input, Form } from "antd";
import Title from "../title";
import TextArea from "antd/es/input/TextArea";

const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    return data;
  };

  return (
    <div className="flex justify-center items-center flex-col my-4 md:my-[50px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-4 p-8 rounded-3xl shadow-xl md:w-[75%] lg:w-[35%] overflow-hidden"
        style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <Title className="text-secondary text-center">
          savollar, takliflar va mulohazalaringizni bizga yuboring
        </Title>
        <div className="flex flex-col gap-4">
          {/* Name Field */}
          <Form.Item>
            <label className="text-qora font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">
              Ismingiz
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Ismingizni kiriting" }}
              render={({ field }) => (
                <Input
                  placeholder="Ismingizni kiriting"
                  {...field}
                  variant="filled"
                  className="h-12"
                />
              )}
            />
          </Form.Item>

          {/* Phone Field */}
          <Form.Item>
            <label className="text-qora font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">
              Telefon raqamingiz
            </label>
            <Controller
              name="telefon raqam"
              control={control}
              rules={{
                required: "Telefon raqamingizni kiriting",
              }}
              render={({ field }) => (
                <Input
                  placeholder="+998901234567"
                  {...field}
                  variant="filled"
                  className="h-12"
                />
              )}
            />
          </Form.Item>
          {/* Comments Field */}
          <Form.Item>
            <label className="text-qora font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">
              Savol, taklif va mulohazalar
            </label>
            <Controller
              name="savol, taklif va mulohazalar"
              control={control}
              rules={{
                required: "Taklif va mulohazalaringizni kiriting",
              }}
              render={({ field }) => (
                <TextArea
                  placeholder="Taklif va mulohazalaringizni kiriting"
                  {...field}
                  rows={5}
                  className="bg-gray-100 border-none focus:ring-2 focus:ring-gray-300 rounded-[8px]"
                />
              )}
            />
          </Form.Item>

          {/* Submit Button */}
          <div className="self-center ">
            <Button type="submit">Yuborish</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
