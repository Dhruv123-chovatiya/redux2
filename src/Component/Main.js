import { Box, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { initializeData } from '../state/action-creators';

const Main = ({ data, initializeData }) => {

    const [industry, setIndustry] = useState('');
    const [category, setCalegory] = useState('')
    const [skill, setSkill] = useState('')

    const handleIndustryChange = (event) => {
        setIndustry(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCalegory(event.target.value);
    };

    const handleskillChange = (event) => {
        setSkill(event.target.value);
    };

    useEffect(() => {
        initializeData(data);
    }, []);

    return (
        <>
            <Box sx={{ mt: '1cm', display: 'flex', margin: '1cm' }}>
                <Box>
                    <Typography>
                        Name :
                    </Typography>
                    <TextField id="outlined-basic" />
                </Box>
                <FormControl sx={{ minWidth: 200, ml: '10px' }}>
                    <Typography>Industry Type :</Typography>
                    <Select
                        value={industry}
                        onChange={handleIndustryChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">Select Industry</MenuItem>
                        {data.map((items, index) => (
                            <MenuItem key={index} value={items.IndustryType}>
                                {items.IndustryType}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 200, ml: '10px' }}>
                    <Typography >
                        category :
                    </Typography>
                    <Select
                        value={category}
                        onChange={handleCategoryChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={'Acconut'}>Acconut</MenuItem>
                        <MenuItem value={'Frontend'}>Frontend</MenuItem>
                        <MenuItem value={'Backend'}>Backend</MenuItem>
                        <MenuItem value={'Designer'}>Designer</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 200, ml: '10px' }}>
                    <Typography >
                        Skills:
                    </Typography>
                    <Select
                        value={skill}
                        onChange={handleskillChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={10}>Banking</MenuItem>
                        <MenuItem value={20}>Angular</MenuItem>
                        <MenuItem value={30}>React</MenuItem>
                        <MenuItem value={30}>.net</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{ ml: '10px' }}>
                    <Typography >
                        Note :
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                    />
                </Box>

            </Box>
            <Box sx={{ ml: '1cm' }}>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.data
});

const mapDispatchToProps = {
    initializeData // Add initializeData to mapDispatchToProps
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);