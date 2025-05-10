"use client";
import React, { useState } from "react";
import validate from "@/utils/validateForm";
import FormDataType from "./type";

const ContactForm = () => {
  const [formData, setFormData] = useState<Partial<FormDataType>>({
    name: "",
    lastName: "",
    email: "",
    description: "",
    radius: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormDataType, string>>
  >({});
  const [videoDuration, setVideoDuration] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setSubmissionStatus(null);

    // Escape any special characters to prevent XSS
    const sanitizedValue = value.replace(/[<>]/g, "");

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSubmissionStatus(null);

    setFormData({
      ...formData,
      file: file,
    });

    // If the category is casting, check the video duration
    if (formData.category === "casting" && file) {
      const videoElement = document.createElement("video");
      videoElement.preload = "metadata";

      videoElement.onloadedmetadata = () => {
        window.URL.revokeObjectURL(videoElement.src);
        setVideoDuration(videoElement.duration);
      };

      videoElement.src = URL.createObjectURL(file);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formData, videoDuration);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name || "");
    formDataToSend.append("last Name", formData.lastName || "");
    formDataToSend.append("email", formData.email || "");
    formDataToSend.append("description", formData.description || "");
    formDataToSend.append("radius", formData.radius || "");

    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }

    try {
      const response = await fetch(
        "https://emailserver.on1yglobal.com/api/user",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      // Check if the response is OK (status 200-299)
      if (response.ok) {
        setSubmissionStatus("success");
        setIsNotificationVisible(true);
        // Reset form after successful submission
        setFormData({
          name: "",
          lastName: "",
          email: "",
          description: "",
          file: null,
          radius: "",
        });
        setErrors({});
        setVideoDuration(null);
      } else {
        setSubmissionStatus("error");
        setIsNotificationVisible(true);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionStatus("error");
      setIsNotificationVisible(true);
    }
  };

  return (
    <>
    <form
      className="my-10 rounded-2xl w-full bg-gray-800 border-gray-200 border-[3px] sm:w-fit text-white "
      onSubmit={handleSubmit}
    >
      <div className="p-3">
        <h1 className="flex justify-center items-center text-3xl border-b-[1px] border-gray-300 text-white ">
          Contact Us
        </h1>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col p-3">
            <label htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg py-5"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First Name"
            />
            
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>

          <div className="flex  justify-end flex-col p-3">
            <label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg py-5"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col p-3">
          <label htmlFor="email">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            className="rounded-lg py-5"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@example.com"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        <div className="p-3">
          <div className="py-2">
            <label htmlFor="description">
              Message <span className="text-red-500">*</span> (max 200 characters)
            </label>
          </div>
          <div>
            <textarea
              className="rounded-xl w-full"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project or inquiry"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">{errors.description}</span>
            )}
          </div>
        </div>

        <div className="flex justify-center p-4">
          <button
            className="px-6 rounded-md hover:bg-gray-400 transition-all text-white bg-gray-700 py-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
    {isNotificationVisible && (
      <div 
        className="fixed inset-0 flex items-start justify-center z-50 bg-black bg-opacity-50"
        onClick={() => setIsNotificationVisible(false)} // Clicking outside will close
      >
        <div 
          className={`relative mt-10 bg-white text-black p-4 rounded shadow-lg transform transition-transform 
          ${submissionStatus === "success" ? "border-green-500" : "border-red-500"} border-t-4 
          animate-slideDown`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the box itself
        >
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
            onClick={() => setIsNotificationVisible(false)}
          >
            X
          </button>
          {submissionStatus === "success" && (
            <div>Your message has been successfully submitted!</div>
          )}
          {submissionStatus === "error" && (
            <div>There was an issue submitting your message. Please try again later.</div>
          )}
        </div>
      </div>
    )}
  </>    
  );
};

export default ContactForm;
