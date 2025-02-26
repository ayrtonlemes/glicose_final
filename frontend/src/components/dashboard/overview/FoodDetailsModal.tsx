// FoodDetailsModal.tsx
import React from 'react';
import Modal from '@mui/material/Modal';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

interface FoodDetailsModalProps {
  open: boolean;
  onClose: () => void;
  data: any[];
}

const FoodDetailsModal: React.FC<FoodDetailsModalProps> = ({ open, onClose, data }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper sx={{ padding: 2, margin: 'auto', maxWidth: 600 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Food Tracking
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Food</strong></TableCell>
                <TableCell><strong>Calories (kcal)</strong></TableCell>
                <TableCell><strong>Carbohydrate (g)</strong></TableCell>
                <TableCell><strong>Protein (g)</strong></TableCell>
                <TableCell><strong>Sugar (g)</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.logged_food}</TableCell>
                    <TableCell>{item.calorie}</TableCell>
                    <TableCell>{item.carbo}</TableCell>
                    <TableCell>{item.protein}</TableCell>
                    <TableCell>{item.sugar}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">No data available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Modal>
  );
};

export default FoodDetailsModal;
