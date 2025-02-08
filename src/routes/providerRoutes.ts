import { Router } from "express";
import {
  getProviders,
  getProviderById,
  createProvider,
  updateProvider,
  deleteProvider,
} from "../controllers/providerController";

const router = Router();

router.get("/", getProviders);
router.get("/:id", getProviderById);
router.post("/", createProvider);
router.put("/:id", updateProvider);
router.delete("/:id", deleteProvider);

export default router;
