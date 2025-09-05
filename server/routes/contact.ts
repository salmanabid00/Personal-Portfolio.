import { RequestHandler } from "express";

export const handleContact: RequestHandler = (req, res) => {
  try {
    const { name, email, subject, message } = req.body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    // In a real app you would send an email or store this in a database.
    // For this starter project we simply log it to the server console.
    console.log("Contact form submission:", { name, email, subject, message });

    return res.status(200).json({ success: true, message: "Message received" });
  } catch (err) {
    console.error("Error in handleContact:", err);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
};
