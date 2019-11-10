/**
 * @swagger
 * definitions:
 *  Author:
 *    type: object
 *    properties:
 *      name:
 *        type: string
 *        required: true
 *      info:
 *        type: string
 *      img_url:
 *        type: string
 *        format: uri
 *      show_on_quiz:
 *        type: boolean
 *      quiz_index:
 *        type: integer
 *      web_url:
 *        type: string
 *        format: uri
 *      facebook_url:
 *        type: string
 *        format: uri
 *  AuthorResponse:
 *    type: object
 *    properties:
 *      id:
 *        type: string
 *        format: guid
 *      content:
 *        type: array
 *        items:
 *          $ref: '#/definitions/ContentResponse'
 *      name:
 *        type: string
 *        required: true
 *      info:
 *        type: string
 *      img_url:
 *        type: string
 *        format: uri
 *      show_on_quiz:
 *        type: boolean
 *      quiz_index:
 *        type: integer
 *      web_url:
 *        type: string
 *        format: uri
 *      facebook_url:
 *        type: string
 *        format: uri
 */
