const express = require("express")
const router = express.Router()
const controller = require("../controllers/CEPsController")


router.post("/", controller.postCep)
router.get("/", controller.getCeps)
router.get("/:cep", controller.getCep)
router.post("/:cep", controller.postOcorrencias)
router.delete("/:id", controller.deleteCep)

module.exports = router