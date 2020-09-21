import { Payments } from '#root/db/models';

const setUpRoutes = app => {
    app.get("/payments", async (req, res, next) => {
        try {
            const payments = await Payments.findAll();
            return res.json(payments)
        } catch(e) {
            console.error(e.message);
        }
    })
    app.get("/payments/:id", async (req, res, next) => {
        try {
            const id = req.params.id;
            const payments = await Payments.findByPk(id);
            return res.json(payments)
        } catch(e) {
            console.error(e.message);
        }
    })
};

export default setUpRoutes;