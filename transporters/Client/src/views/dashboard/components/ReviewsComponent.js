import React, { useEffect, useState } from "react";
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import dayjs from "dayjs";

import { Navigate, redirect, useNavigate } from "react-router";
function Reviews() {
    const [review, setReview] = useState([]);

    useEffect(() => {
        reviews()
    }, [])

    const reviews = async () => {
        const response = await fetch('http://localhost:8080/api/reviews');
        setReview(await response.json())
    }
    if (!localStorage.getItem('token')) {
        return <Navigate to="/auth/login"/>
      }
    return (
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Review ID
                                </Typography>
                            </TableCell>
                            
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Customer Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Driver Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Review Content
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {review.map((review) => (
                            <TableRow key={review.review_id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {review.review_id}
                                    </Typography>
                                </TableCell>
                               
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {review.client.user_first_name+' '+review.client.user_last_name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {review.driver.user_first_name+' '+review.driver.user_last_name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {review.review_content}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
    )
};

export default Reviews;