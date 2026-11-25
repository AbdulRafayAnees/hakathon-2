
"use client";
import { useState } from "react";
import { RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { LuMail, LuUser, LuBriefcaseBusiness } from "react-icons/lu";

const Form = ({ pageDetail, isLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className="w-100 space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <div className="flex items-center w-full">
          <label className="text-sm font-medium text-black" htmlFor="email">
            Email <span className="text-primary">*</span>
          </label>
        </div>

        <label
          htmlFor="email"
          className="flex w-full items-center gap-3 h-14 px-4 rounded-full bg-white focus-within:ring-2 focus-within:ring-primary cursor-text"
        >
          <LuMail size={20} className="text-primary font-medium shrink-0" />

          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-500"
            required
          />
        </label>
      </div>

      <div className="space-y-2">
        <div className="flex items-center">
          <label className="text-sm font-medium text-black" htmlFor="password">
            Password <span className="text-primary">*</span>
          </label>
        </div>

        <div className="flex items-center gap-3 h-14 px-4 rounded-full bg-white focus-within:ring-2 focus-within:ring-primary">
          <label
            htmlFor="password"
            className="flex items-center gap-3 flex-1 min-w-0 cursor-text"
          >
            <RiLockLine size={19} className="text-primary shrink-0" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-400"
              required
            />
          </label>

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setShowPassword(!showPassword)}
            className="text-primary/60 hover:text-secondary/70 transition-colors cursor-pointer"
          >
            {showPassword ? (
              <RiEyeOffLine size={19} />
            ) : (
              <RiEyeLine size={19} />
            )}
          </button>
        </div>

        {isLogin && (
          <button
            type="button"
            className="text-sm text-primary font-medium cursor-pointer"
          >
            Forgot password?
          </button>
        )}
      </div>

      {!isLogin && (
        <>
          <div className="space-y-2">
            <div className="flex items-center">
              <label className="text-sm font-medium text-black" htmlFor="fullName">
                Full Name <span className="text-primary">*</span>
              </label>
            </div>

            <label
              htmlFor="fullName"
              className="flex items-center gap-3 h-14 px-4 rounded-full bg-white focus-within:ring-2 focus-within:ring-primary cursor-text"
            >
              <LuUser size={20} className="text-primary shrink-0" />

              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={!isLogin ? handleChange : undefined}
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-500"
                required
              />
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <label className="text-sm font-medium text-black" htmlFor="jobTitle">
                Job Title <span className="text-primary">*</span>
              </label>
            </div>

            <label
              htmlFor="jobTitle"
              className="flex items-center gap-3 h-14 px-4 rounded-full bg-white focus-within:ring-2 focus-within:ring-primary cursor-text"
            >
              <LuBriefcaseBusiness
                size={20}
                className="text-primary shrink-0"
              />

              <input
                type="text"
                id="jobTitle"
                value={formData.jobTitle}
                onChange={!isLogin ? handleChange : undefined}
                placeholder="e.g. Software Engineer"
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-500"
                required
              />
            </label>
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full h-14 rounded-full bg-primary text-white text-base font-medium cursor-pointer hover:bg-secondary transition-colors"
      >
        {pageDetail.title}
      </button>

      <p className="text-center text-sm text-black pt-1">
        Don't have an account?{" "}
        <a
          href={`${isLogin ? "/signup" : "/login"}`}
          className="text-primary underline font-medium ml-1 cursor-pointer"
        >
          {pageDetail.buttonText}
        </a>
      </p>
    </form>
  );
};

export default Form;
