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


function FirstSem() {
    const theme = useTheme()
    const [sem, setSem] = React.useState(1);
    const [formData, setFormData] = React.useState({});

    const handleChange = (event) => {
        setSem(event.target.value);
    };

    const fields = [
        { label: 'Engineering Mathematics-I (Credits: 4)', id: 'field1' },
        { label: 'Engineering Chemistry (Credits: 4)', id: 'field2' },
        { label: 'Human Values (Credits: 2)', id: 'field3' },
        { label: 'Programming for Problem Solving (Credits: 2)', id: 'field4' },
        { label: 'Basic Civil Engineering (Credits: 2)', id: 'field5' },
        { label: 'Engineering Chemistry Lab (Credits: 1)', id: 'field6' },
        { label: 'Human Values Activities (Credits: 1)', id: 'field7' },
        { label: 'Computer Programming Lab (Credits: 1.5)', id: 'field7' },
        { label: 'Basic Civil Engineering Lab (Credits: 1)', id: 'field7' },
        { label: 'Computer Aided Engineering Graphics (Credits: 1.5)', id: 'field7' },
        { label: 'DECA (Credits: 0.5)', id: 'field7' },
    ];
    
    const grades = ['A++','A+','A','B+', 'B','C+', 'C','D+', 'D','E+', 'E', 'F'];


    return (
        <>
            <Box sx={{
                width: '100%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                mb: 3
            }}>

                {fields.map((field, index) => (
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
                            {field.label}
                        </InputLabel>
                        <Select
                            id={`field-${index + 1}`}
                            name={field.id}
                            value={formData[field.id] || ''}
                            onChange={handleChange}
                            autoWidth
                            label={field.label}
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


export default FirstSem
