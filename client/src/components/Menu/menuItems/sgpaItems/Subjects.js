import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography, Box, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 350,
        },
    },
};


function Subjects({ semName }) {
    const theme = useTheme()
    const [sem, setSem] = React.useState(semName);
    const [formData, setFormData] = React.useState({});

    const handleChange = (event) => {
        setSem(event.target.value);
    };

    const grades = ['A++', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'E+', 'E', 'F'];

    const Semester = {
        1: "1st Semester",
        2: "2nd Semester",
        3: "3rd Semester",
        4: "4th Semester",
        5: "5th Semester",
        6: "6th Semester",
        7: "7th Semester",
        8: "8th Semester",
    }
    const SemToCredits = [
        {
            subjectToCredits: {
                "Engineering Mathematics-I": 4,
                "Engineering Chemistry": 4,
                "Human Values": 2,
                "Programming for Problem Solving": 2,
                "Basic Civil Engineering": 2,
                "Engineering Chemistry Lab": 1,
                "Human Values Activities": 1,
                "Computer Programming Lab": 1.5,
                "Basic Civil Engineering Lab": 1,
                "Computer Aided Engineering Graphics": 1.5,
                "DECA": 0.5,
            },
            totalCredits: 20.5,
        },
        {
            subjectToCredits: {
                "Engineering Mathematics-II": 4,
                "Engineering Physics": 4,
                "Communication Skills": 2,
                "Basic Mechanical Engineering": 2,
                "Basic Electrical Engineering": 2,
                "Engineering Physics Lab": 1,
                "Language Lab": 1,
                "Manufacturing Practices Workshop": 1.5,
                "Basic Electrical Engineering Lab": 1,
                "Computer Aided Machine Drawing": 1.5,
                "DECA": 0.5,
            },
            totalCredits: 20.5,
        },
        {
            subjectToCredits: {
                "Advanced Engineering Mathematics": 3,
                "Managerial Economics & Financial Accounting": 2,
                "Digital Electronics": 3,
                "Data Structures and Algorithms": 3,
                "Object Oriented Programming": 3,
                "Software Engineering": 3,
                "Data Structures and Algorithms Lab": 1.5,
                "Object Oriented Programming Lab": 1.5,
                "Software Engineering Lab": 1.5,
                "Digital Electronics Lab": 1.5,
                "Industrial Training": 1,
                "Social Outreach, Discipline & Extracurricular Activities": 0.5,
            },
            totalCredits: 24.5,
        },
        {
            subjectToCredits: {
                "Discrete Mathematics Structure": 3,
                "Technical Communication": 2,
                "Microprocessor & Interfaces": 3,
                "Database Management System": 3,
                "Theory of Computation": 3,
                "Data Communication and Computer Networks": 3,
                "Microprocessor & Interfaces Lab ": 1,
                "Database Management System Lab": 1.5,
                "Network Programming Lab": 1.5,
                "Linux Shell Programming Lab": 1,
                "Java Lab ": 1,
                "Social Outreach, Discipline & Extracurricular Activities": 0.5,
            },
            totalCredits: 23.5,
        },
        {
            subjectToCredits: {
                "Information Theory & Coding": 2,
                "Compiler Design": 3,
                "Operating System": 3,
                "Computer Graphics & Multimedia": 3,
                "Analysis of Algorithms": 3,
                "Human-Computer Interaction": 2,
                "Computer Graphics & Multimedia Lab": 1,
                "Compiler Design Lab": 1,
                "Analysis of Algorithms Lab": 1,
                "Advance Java Lab": 1,
                "Industrial Training ": 2.5,
                "Social Outreach, Discipline & Extracurricular Activities": 0.5,
            },
            totalCredits: 23,
        },
        {
            subjectToCredits: {
                "Digital Image Processing": 2,
                "Machine Learning": 3,
                "Information Security Systems": 2,
                "Computer Architecture and Organization": 3,
                "Artificial Intelligence": 2,
                "Cloud Computing": 3,
                "Distributed Systems": 2,
                "Digital Image Processing Lab": 1.5,
                "Machine Learning Lab": 1.5,
                "Python Lab": 1.5,
                "Mobile App Development Lab": 1.5,
                "Social Outreach, Discipline & Extracurricular Activities": 0.5,
            },
            totalCredits: 23.5,
        },
        {
            subjectToCredits: {
                "Environmental Engineering & Disaster Management": 3,
                "Internet Of Things": 3,
                "Internet Of Things Lab": 2,
                "Cyber Security Lab": 2,
                "Industrial Training": 2.5,
                "Seminar": 2,
                "Social Outreach, Discipline & Extracurricular Activities": 0.5,
            },
            totalCredits: 15,
        },
        {
            subjectToCredits: {
                "Big Data Analytics": 3,
                "Big Data Analytics Lab": 2,
                "Software Testing & Validation Lab": 1,
                "Project": 7,
                "Social Outreach, Discipline & Extracurricular Activities": 0.5,
                "Disaster Management": 3,
            },
            totalCredits: 16.5,
        },
    ];



    return (
        <>
            <Box sx={{
                width: '100%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                mb: 3
            }}>
                <Typography>{Semester[semName]}</Typography>

                {Object.entries(SemToCredits[0].subjectToCredits).map(([subject, credits]) => (
                    <div key={subject}>
                        {subject}
                    </div>
                ))}





                {SemToCredits.map((semester, index) => (
                    <FormControl key={index} sx={{ mt: 3, width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '70%' } }} size='small'>
                        <InputLabel
                            id={`field-${index + 1}-label`}
                            sx={{
                                '&.Mui-focused': {
                                    color: theme.palette.inputText.primary,
                                },
                                fontWeight: '200',
                                fontSize: '15px'
                            }}
                        >
                            {Object.entries(SemToCredits[sem].subjectToCredits).map(([subject, credits]) => (
                                <div key={subject}>{subject}</div>
                            ))}
                        </InputLabel>
                        <Select
                            // id={`field-${index + 1}`}
                            // name={field.id}
                            // value={formData[field.id] || ''}
                            onChange={handleChange}
                            autoWidth
                            label={Object.entries(semester.subjectToCredits).map(([subject, credits]) => (
                                <div key={subject}>{subject}</div>
                            ))}
                            MenuProps={MenuProps}
                            sx={{
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.inputBorder.primary,
                                },
                                height: '50px',
                            }}
                        >
                            {grades.map((grade, gradeIndex) => (
                                <MenuItem key={gradeIndex} value={grade}>{grade}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                ))}


            </Box>
        </>
    );
}


export default Subjects
