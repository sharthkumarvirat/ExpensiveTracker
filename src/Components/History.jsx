import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';

export default function History({ allEntry, setAllEntry, setTotal }) {
    useEffect(() => {
        const totalCost = allEntry.reduce((total, item) => total + parseFloat(item.amount), 0);
        setTotal(totalCost);
    }, [allEntry, setTotal]);

    const handleDelete = (id) => {
        const filterData = allEntry.filter((_, index) => index !== id);
        setAllEntry(filterData);

    };

    return (
        <div > 
        <br />
            <Typography variant='h5'>History</Typography>
            {allEntry.length > 0 ? (
                allEntry.map((ele, index) => (
                    <div key={index}>
                        <Stack direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography variant='h6'>{ele.text}</Typography>
                            <Typography
                                variant='h5'
                                sx={{
                                    color: parseFloat(ele.amount) < 0 ? 'red' : 'inherit',
                                }}
                            >
                                {ele.amount}
                            </Typography>
                            <Button size='small' onClick={() => handleDelete(index)}>Remove</Button>
                        </Stack>
                    </div>
                ))
            ) : (
                <div>
                    <br />
                    <Typography variant='body1'>No transactions found.</Typography>
                </div>
            )}
        </div>
    );
}
