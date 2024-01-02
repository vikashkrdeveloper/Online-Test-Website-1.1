const express = require('express');
const router = express.Router();
const HomeControllers = require('../controllers/HomeControllers');
const ErrorControllers = require('../controllers/ErrorControllers');
const LoginControllers = require('../controllers/LoginControllers');
const RegistrationControllers = require('../controllers/RegistrationControllers');
const UserdataControllers = require('../controllers/UserdataControllers');
const forgetpasswordcontrollers = require('../controllers/forgetpasswordcontrollers');
const QuestionAnswerControllers = require('../controllers/QuestionAnswerControllers');
const QuestionAnswerApiControllers = require('../controllers/QuestionAnswerApiControllers');
const QuestionmcqControllers = require('../controllers/QuestionmcqControllers');
const McqQuestionApiControllers = require('../controllers/McqQuestionApiControllers');
const QuestionnumbericalControllers = require('../controllers/QuestionnumbericalControllers');
const NumericalQuestionApiControllers = require('../controllers/NumericalQuestionApiControllers');
const QuestiontatalcountAnswerApiControllers = require('../controllers/QuestiontatalcountAnswerApiControllers');
const totalteam_member = require('../controllers/totalteam_member');
const LogOutControllers = require('../controllers/LogOutControllers');
const questiondatadeletedControlers = require('../controllers/questiondatadeletedControlers');
const questiondatamcqdeletedControlers = require('../controllers/questiondatamcqdeletedControlers');
const answerdatadeletedControlers = require('../controllers/answerdatadeletedControlers');
const QuestiontatalAttamptAnswerApiControllers = require('../controllers/QuestiontatalAttamptAnswerApiControllers');
const Totalparticipantdatadeletecontrollers = require('../controllers/Totalparticipantdatadeletecontrollers');
const UserdataMiddleware = require('../middleware/UserdataMiddleware');


router.get('/', HomeControllers);
router.get('/users/data', UserdataMiddleware, UserdataControllers)
router.get('/api/participant/question/answer', QuestionAnswerApiControllers)
router.get('/api/participant/question/answer/total/count', QuestiontatalcountAnswerApiControllers)
router.get('/api/participant/question/answer/total/userid/:userid', QuestiontatalAttamptAnswerApiControllers)
router.get('/api/contest/question-mcq', McqQuestionApiControllers)
router.get('/api/contest/question-numerical/', NumericalQuestionApiControllers)
router.get('/api/logout', LogOutControllers)
router.get('/api/total-tems/members/', totalteam_member)
router.post('/participants/registration', RegistrationControllers);
router.post('/login', LoginControllers);
router.post('/coding-contest/api/answer/participant', QuestionAnswerControllers)
router.post('/coding-contest/api/question-mcq/', QuestionmcqControllers)
router.post('/coding-contest/api/question-numerical/', QuestionnumbericalControllers)
router.put('/forget/password/', forgetpasswordcontrollers)
router.delete('/api/answer/delete/id/:id', answerdatadeletedControlers)
router.delete('/api/question/type/numerical/delete/id/:id', questiondatadeletedControlers)
router.delete('/api/question/type/mcq/delete/id/:id', questiondatamcqdeletedControlers)
router.delete('/api/total/participant/delete/id/:id', Totalparticipantdatadeletecontrollers)
router.all('*', ErrorControllers);

module.exports = router


