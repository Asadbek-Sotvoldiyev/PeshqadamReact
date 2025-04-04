import React, { useState } from "react";
import Title from "../title";
import Button from "../button";
import { Controller, useForm } from "react-hook-form";
import { Input, Select, Form, Checkbox } from "antd";
import { toast } from "react-toastify";

const RegistrationForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const [agreed, setAgreed] = useState(false);
  const onSubmit = (data: any) => {
    if (!agreed) {
      toast.error(
        "Foydalanish shartlari va maxfiylik siyosatini qabul qiling."
      );
      return;
    }
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center md:my-[50px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-8 p-8 rounded-3xl shadow-xl lg:w-[50%] overflow-hidden"
        style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <Title className="text-secondary text-center">A'ZO BO'LISH</Title>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Name Field */}
          <Form.Item>
            <label className="text-qora font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">Ismingiz</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Ismingizni kiriting" }}
              render={({ field }) => (
                <Input placeholder="Ismingizni kiriting" {...field} variant="filled" className="h-12" />
              )}
            />
          </Form.Item>

          {/* Direction Field */}
          <Form.Item>
          <label className="text-qora font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">Yo'nalish</label>
            <Controller
              name="direction"
              control={control}
              rules={{ required: "Yo‘nalishni tanlang" }}
              render={({ field }) => (
                <Select
                variant="filled"
                className="h-12"
                  {...field}
                  value={field.value} // instead of defaultValue
                  placeholder="Yo‘nalish tanlang"
                  options={[
                    { value: "Media", label: "Media yo’nalishi" },
                    {
                      value: "Kitobxonlik",
                      label: "Kitobxonlikni rivojlantirish",
                    },
                    {
                      value: "Mutaxassislar",
                      label: "Mutaxassislar tayyorlash",
                    },
                    { value: "Ilmiy", label: "Ilmiy faoliyat yo’nalishi" },
                    {
                      value: "Kutubxonalar",
                      label: "Kutubxonalar tashkil qilish",
                    },
                  ]}
                />
              )}
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item>
          <label className="text-qora font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">Elektron pochtangiz</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Emailni kiriting",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Noto‘g‘ri email",
                },
              }}
              render={({ field }) => (
                <Input placeholder="Emailingizni kiriting" {...field} variant="filled" className="h-12" />
              )}
            />
          </Form.Item>

          {/* Location Field */}
          <Form.Item>
          <label className="text-qora font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">Manzilingiz</label>
            <Controller
              name="location"
              control={control}
              rules={{ required: "Manzilni tanlang" }}
              render={({ field }) => (
                <Select
                  variant="filled"
                  className="h-12"
                  {...field}
                  value={field.value}
                  placeholder="Manzilni tanlang"
                  options={[
                    { value: "Toshkent", label: "Toshkent" },
                    { value: "Farg'ona", label: "Farg'ona" },
                    { value: "Boshqa", label: "Boshqa" },
                  ]}
                />
              )}
            />
          </Form.Item>

          {/* Checkbox for Terms and Privacy */}
          <Form.Item>
            <Checkbox
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            >
              Men <a href="/terms">foydalanish shartlari</a> va{" "}
              <a href="/privacy">maxfiylik siyosatini</a> qabul qilaman
            </Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <div className="">
          <Button type="submit" disabled={!agreed}>
            Ro‘yxatdan o‘tish
          </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default RegistrationForm