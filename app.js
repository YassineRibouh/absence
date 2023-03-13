const express = require('express');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
// Routes
const attendanceRouter = require('./routes/attendance.routes')
const courseRouter = require('./routes/course.routes')
const reportRouter = require('./routes/report.routes')
const studentRouter = require('./routes/student.routes')
// models
const Attendance = require('./models/attendance.model');
const Course = require('./models/course.model');
const Student = require('./models/student.model');
const Report = require('./models/report.model');

const app = express();
const AdminBro = require('admin-bro')
const expressAdminBro = require('@admin-bro/express')
const mongooseAdminBro = require('@admin-bro/mongoose')

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {resources:[Attendance,Course,Student,Report],
branding: {companyName:'Madani Absence Project',
logo: 'https://scontent.frba1-1.fna.fbcdn.net/v/t39.30808-6/240928863_819600912071428_933936768341738692_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=J0ztRbiWuG8AX-g1De0&_nc_ht=scontent.frba1-1.fna&oh=00_AfB_X0xZU4mboq6kOr0r7FqSkqVS2R4-TppHbsx-EzhhFQ&oe=640DF342'
}
}

const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)

app.use(adminBro.options.rootPath,router)




app.use(cors());

app.use(express.json()); //Necessary To Post Data


if(process.env.NODE_ENV==='development') {
    app.use(morgan('dev'));
}

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH,PUT ,DELETE, OPTIONS");
    next();
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// Data Sanitization against NoSQL injection
app.use(mongoSanitize());

// // Data Sanitization against XXS
app.use(xss());


app.use('/api/attendances',attendanceRouter);
app.use('/api/courses',courseRouter);
app.use('/api/reports',reportRouter);
app.use('/api/students',studentRouter);


module.exports = app;
