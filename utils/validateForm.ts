// "@/utils/validateForm.ts"

import FormDataType from "../components/sectionPage/form/type"; // Adjust the import path accordingly

const validate = (
  formData: Partial<FormDataType>,
  videoDuration: number | null
) => {
  const errors: Partial<Record<keyof FormDataType, string>> = {};

  // First Name Validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = "First name is required";
  } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
    errors.name = "First name can only contain letters and spaces";
  }

  // Last Name Validation
  if (!formData.lastName || !formData.lastName.trim()) {
    errors.lastName = "Last name is required";
  } else if (!/^[a-zA-Z ]+$/.test(formData.lastName)) {
    errors.lastName = "Last name can only contain letters and spaces";
  }

  // Email Validation
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Category Validation
  if (!formData.category) {
    errors.category = "Please select a category";
  }

  // Description Validation
  if (!formData.description || !formData.description.trim()) {
    errors.description = "Message is required";
  }

  // File Validation
  if (
    ["films", "tech", "internship", "casting"].includes(formData.category || "")
  ) {
    if (!formData.file) {
      errors.file = "Please upload the required file";
    } else {
      const allowedExtensions: { [key: string]: string[] } = {
        films: [".pdf", ".doc", ".docx"],
        tech: [".pdf", ".doc", ".docx"],
        internship: [".pdf", ".doc", ".docx"],
        casting: [".mp4", ".mov", ".webm"],
      };

      const fileExtension = formData.file.name
        .substring(formData.file.name.lastIndexOf("."))
        .toLowerCase();

      if (!allowedExtensions[formData.category || ""].includes(fileExtension)) {
        errors.file = `Invalid file type for ${formData.category}`;
      }

      // File size validation
      const maxFileSizes: { [key: string]: number } = {
        films: 10 * 1024 * 1024, // 10 MB
        tech: 10 * 1024 * 1024, // 10 MB
        internship: 10 * 1024 * 1024, // 10 MB
        casting: 100 * 1024 * 1024, // 100 MB
      };

      if (formData.file.size > maxFileSizes[formData.category || ""]) {
        const maxSizeMB = maxFileSizes[formData.category || ""] / (1024 * 1024);
        errors.file = `File size should not exceed ${maxSizeMB} MB`;
      }

      // Video duration validation for casting
      if (formData.category === "casting" && videoDuration !== null) {
        if (videoDuration > 90) {
          errors.file = "Video must be no longer than 1 minute and 30 seconds";
        }
      }
    }
  }

  return errors;
};

export default validate;
