const { Enquiry } = require("../models/Enquiry");
const { sendResponse, sendError } = require("../utils/response");

const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, subject, message, projectId } = req.body;

    const enquiry = new Enquiry({
      name,
      email,
      phone,
      subject,
      message,
      projectId,
    });

    await enquiry.save();
    sendResponse(res, 201, "Enquiry submitted successfully", enquiry);
  } catch (error) {
    sendError(res, 500, "Error submitting enquiry");
  }
};

export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    sendResponse(res, 200, "Enquiries fetched successfully", enquiries);
  } catch (error) {
    sendError(res, 500, "Error fetching enquiries");
  }
};

export const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return sendError(res, 404, "Enquiry not found");
    }

    sendResponse(res, 200, "Enquiry fetched successfully", enquiry);
  } catch (error) {
    sendError(res, 500, "Error fetching enquiry");
  }
};

export const updateEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!enquiry) {
      return sendError(res, 404, "Enquiry not found");
    }

    sendResponse(res, 200, "Enquiry updated successfully", enquiry);
  } catch (error) {
    sendError(res, 500, "Error updating enquiry");
  }
};

module.exports = {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
};
