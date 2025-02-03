import { Router } from "express";
import {
  getPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
} from "../controllers/publisherController";

const router = Router();

router.get("/", getPublishers);
router.get("/:id", getPublisherById);
router.post("/", createPublisher);
router.put("/:id", updatePublisher);
router.delete("/:id", deletePublisher);

export default router;
