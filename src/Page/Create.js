import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Create = ({ setData, setData2, setData3 }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const onsubmit = (data) => {
    setData(data);

    navigate("/event");
    console.log(data);
  };
  return (
    <div>
      <div className="flex items-center min-h-screen p-4  lg:justify-center ">
        <div className="flex flex-col overflow-hidden mx-auto bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md drop-shadow-2xl">
          <div className="hidden md:h p-4 py-6 text-white  bg-gradient-to-r from-[#4828A9] to-[#A25BF7] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <img
              className=""
              src="https://i.postimg.cc/7LVfyJkP/casual-life-3d-young-people-in-the-worker-jumpsuits-with-gadgets.png"
              alt="image"
            />
          </div>
          <div className="p-5 bg-white md:flex-1 pl-3 ">
            <h3 className="my-4 text-3xl font-bold text-[#A25BF7]  helvetica-font text-center ">
              Create Event
            </h3>
            <form
              onSubmit={handleSubmit(onsubmit)}
              action="#"
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="Event Name"
                  className="text-sm font-semibold text-gray-900"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  placeholder="Event Name"
                  className="px-4 md:w-96 py-2 transition duration-300 border border-gray-300 text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  {...register("Name", {
                    required: {
                      value: true,
                      message: "Event Name is require",
                    },
                  })}
                />
                <label className="label">
                  {errors.Name?.type === "required" && (
                    <span className="label-text-alt text-red-700">
                      {errors.Name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Host Name"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Host Name
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Host Name"
                  className="px-4 py-2 md:w-96  transition duration-300 border border-gray-300  text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  {...register("Hname", {
                    required: {
                      value: true,
                      message: "Host Name is require",
                    },
                  })}
                />
                <label className="label">
                  {errors.Hname?.type === "required" && (
                    <span className="label-text-alt text-red-700">
                      {errors.Hname.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Host Name"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Image
                  </label>
                </div>
                <input
                  type="File"
                  placeholder="Image"
                  className="px-4 py-2 md:w-96  transition duration-300 border border-gray-300  text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  {...register("Image", {
                    required: {
                      value: true,
                      message: "Image is require",
                    },
                  })}
                />
                <label className="label">
                  {errors.Image?.type === "required" && (
                    <span className="label-text-alt text-red-700">
                      {errors.Image.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Host Name"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Location
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Host Name"
                  className="px-4 py-2  md:w-96  transition duration-300 border border-gray-300  text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  {...register("Location", {
                    required: {
                      value: true,
                      message: "Location is require",
                    },
                  })}
                />
                <label className="label">
                  {errors.Location?.type === "required" && (
                    <span className="label-text-alt text-red-700">
                      {errors.Location.message}
                    </span>
                  )}
                </label>
              </div>
              <div className=" flex flex-col lg:flex-row md:flex-row justify-between gap-1  pt-2">
                <div>
                  <label className="input-group input-group-sm ">
                    <span className="gradient-button text-white uppercase ">
                      Start
                    </span>
                    <input
                      {...register(`Start date`)}
                      className="input md:w-20 input-bordered input-sm w-full  bg-base-300 max-w-xs"
                      placeholder="start Date"
                      type="Date"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className="input-group input-group-sm">
                    <span className="gradient-button text-white uppercase">
                      End
                    </span>
                    <input
                      {...register(`End date`)}
                      className="input input-bordered input-sm w-full  bg-base-300 max-w-xs"
                      placeholder="End Date"
                      type="Date"
                      required
                    />
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gradient-to-r from-[#4828A9] to-[#A25BF7] rounded-md shadow  hover:bg-gradient-to-l focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  NEXT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
