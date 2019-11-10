import express from 'express';
import { celebrate, Joi } from 'celebrate';
import createStatus from '../controllers/post';

const router = express.Router();

/**
 * @swagger
 * /authors:
 *    post:
 *      tags:
 *        - Author
 *      summary: "Add a new author"
 *      parameters:
 *        - name: "body"
 *          in: "body"
 *          required: true
 *          description: "Author object that needs to be added"
 *          schema:
 *            $ref: "#/definitions/Author"
 *        - name: "authorization"
 *          in: "header"
 *          required: true
 *          type: "string"
 *      responses:
 *        400:
 *          description: "Bad Request"
 *        200:
 *          description: Successful operation
 *          schema:
 *            $ref: "#/definitions/Author"
 */

const schema = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      phase: Joi.array().items(Joi.string()),
    })
    .required(),
};

router.post('/', celebrate(schema), createStatus);

export default router;
