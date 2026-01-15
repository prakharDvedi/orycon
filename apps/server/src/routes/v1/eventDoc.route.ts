import { Router } from "express";
import eventDocController from "../../controller/eventDoc.controller";

export const eventDocRouter = Router();

// CREATE
eventDocRouter.post("/", (req, res) =>
    eventDocController.createEventDocumentation(req, res),
);

// READ (All by Event ID)
eventDocRouter.get("/event/:id", (req, res) =>
    eventDocController.getAllEventDocumentation(req, res),
);

// READ (By ID)
eventDocRouter.get("/:id", (req, res) =>
    eventDocController.getEventDocumentationById(req, res),
);

// UPDATE
eventDocRouter.put("/:id", (req, res) =>
    eventDocController.updateEventDocumentation(req, res),
);

// DELETE
eventDocRouter.delete("/:id", (req, res) =>
    eventDocController.deleteEventDocumentation(req, res),
);

export default eventDocRouter;
