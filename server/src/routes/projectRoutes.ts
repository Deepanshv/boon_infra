const { Router } = require("express");
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { authenticate, authorize } = require("../middleware/auth");

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", authenticate, authorize(["admin"]), createProject);
router.put("/:id", authenticate, authorize(["admin"]), updateProject);
router.delete("/:id", authenticate, authorize(["admin"]), deleteProject);

module.exports = router;
