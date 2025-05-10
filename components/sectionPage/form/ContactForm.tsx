"use client";
import React, { useState } from "react";
import validate from "@/utils/validateForm";
import FormDataType from "./type";

const ContactForm = () => {
  const [formData, setFormData] = useState<Partial<FormDataType>>({
    name: "",
    lastName: "",
    email: "",
    category: "", // films, tech, internship, casting
    description: "",
    file: null,
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
    formDataToSend.append("category", formData.category || "");
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
          category: "",
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
      className="my-10 rounded-lg w-full border-gray-200 border-[.5px] sm:w-fit text-black "
      onSubmit={handleSubmit}
    >
      <div className="p-3">
        <h1 className="flex justify-center items-center text-3xl border-b-[1px] border-gray-300 text-white ">
          Apply
        </h1>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col p-3">
            <label htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
            <label className="text-xs text-gray-300" htmlFor="email">
              First Name
            </label>
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>

          <div className="flex  justify-end flex-col p-3">
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
            />
            <label className="text-xs text-gray-300" htmlFor="email">
              Last Name
            </label>
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
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <label className="text-xs text-gray-300" htmlFor="email">
            example@example.com
          </label>
        </div>

        <div className="flex flex-col p-3">
          <label htmlFor="category">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="px-6 rounded-md text-white bg-black py-2"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="films">Films</option>
            <option value="tech">Tech</option>
            <option value="internship">Internship</option>
            <option value="casting">Casting</option>
          </select>
          {errors.category && (
            <span className="text-red-500">{errors.category}</span>
          )}
        </div>

        {["films", "tech", "internship"].includes(formData.category || "") && (
          <div className="flex flex-col items-center pt-3">
            <label className="flex flex-col">
              <ul className="text-white">
                <li>* Please upload your document (PDF, DOC, or DOCX).</li>
                <li>* Maximum file size: 10 MB.</li>
              </ul>
              <input
                className="text-white border-none p-0 hover:shadow-none mt-2"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </label>
            {errors.file && <span className="text-red-500">{errors.file}</span>}
          </div>
        )}

        {formData.category === "casting" && (
          <div className="flex flex-col items-center pt-3">
            <ul className="text-white">
              <li>
                * Please upload your audition video (MP4, quicktime, webm only).
              </li>
              <li>* Maximum file size: 100 MB.</li>
              <li>* Video length should be 1 minute and 30 seconds.</li>
            </ul>

            <input
              className="text-white p-0 border-none hover:shadow-none mt-2"
              type="file"
              accept="video/mp4, video/quicktime, video/webm"
              onChange={handleFileChange}
            />
            {errors.file && <span className="text-red-500">{errors.file}</span>}
          </div>
        )}

        <div className="p-3">
          <div className="py-2">
          <label htmlFor="description">
      Message <span className="text-red-500">*</span> (max 200 characters)
    </label>
          </div>
          <div>
            <textarea
              className="w-full min-h-20 h-20"
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              maxLength={200}
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
