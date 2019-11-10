import express from 'express';
import getStatuses from '../controllers/get_all';

const router = express.Router();

/**
 * @swagger
 * /statuses:
 *    get:
 *      tags:
 *        - Status
 *      summary: "Get all statuses"
 *      parameters:
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
 *            type: array
 *            items:
 *              $ref: '#/definitions/AuthorResponse'
 */

router.get('/', getStatuses);

export default router;
