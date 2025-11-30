import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleSubmitInfo }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="p-8">
      <form
        action=""
        className="flex justify-between"
        onSubmit={handleSubmit((data) => handleSubmitInfo(data))}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="name"
          className="p-2 w-[500px] rounded-full px-4 bg-zinc-800 text-white"
        />
        <input
          {...register("image")}
          type="text"
          placeholder="image"
          className="p-2 w-[500px] rounded-full px-4 bg-zinc-800 text-white"
        />
        <input
          type="submit"
          className="p-2 bg-blue-500 px-8 font-semibold text-white rounded-full"
        />
      </form>
    </div>
  );
};

export default Form;
