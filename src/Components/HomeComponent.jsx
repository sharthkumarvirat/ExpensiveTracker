import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddTranscation from './AddTranscation'
import History from './History'

export default function HomeComponent() {
    const [open, setOpen] = useState(true)
    const [total, setTotal] = useState(0)
    const [allEntry, setAllEntry] = useState(JSON.parse(localStorage.getItem('books')) || []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(allEntry))
        // localStorage.clear()
    }, [allEntry])
    return (
        <div>

            <React.Fragment>
                <Dialog open={open} >
                    <DialogTitle>Expensive Tracker</DialogTitle>
                    <DialogContent>
                        <Typography variant='h4'>Total Amount : {total}</Typography>
                        <AddTranscation allEntry={allEntry} setAllEntry={setAllEntry} />
                        <History allEntry={allEntry} setAllEntry={setAllEntry} setTotal={setTotal} />
                    </DialogContent>
                </Dialog>
            </React.Fragment>

        </div>
    )
}
