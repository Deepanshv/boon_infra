const { Router } = require("express");
const {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
} = require("../controllers/enquiryController");
const { authenticate, authorize } = require("../middleware/auth");

const router = Router();

router.post("/", createEnquiry);
router.get("/", authenticate, authorize(["admin"]), getAllEnquiries);
router.get("/:id", authenticate, authorize(["admin"]), getEnquiryById);
router.put("/:id", authenticate, authorize(["admin"]), updateEnquiry);

module.exports = router;
