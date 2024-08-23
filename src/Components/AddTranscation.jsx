import React, { useState } from 'react';
import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

export default function AddTransaction({ allEntry, setAllEntry }) {
    const { control, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const amountValue = watch("amount", "");

    // Function to handle form submission
    const onSubmit = (data) => {
        const { amount, text } = data;
        const newEntry = { text, amount: parseFloat(amount) };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
        reset()
    };

    return (
        <div>
            <Container maxWidth="md" sx={{ mt: 6 }}>
                <Typography variant="h6" gutterBottom>
                    Add Transaction
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller
                                name="text"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Text is required' }} // Validation rule
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Enter Text"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.text} // Show error state if there is an error
                                        helperText={errors.text?.message} // Display error message
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="amount"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Amount is required',
                                }} // Validation rules
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Enter Amount"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.amount} // Show error state if there is an error
                                        helperText={errors.amount?.message} // Display error message
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                color: parseFloat(amountValue) < 0 ? 'red' : 'inherit',
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                        Submit
                    </Button>
                </form>
                <br />
                <Divider sx={{ borderBottom: '2px solid black' }} />
            </Container>
        </div>
    );
}
