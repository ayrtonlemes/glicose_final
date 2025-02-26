import React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

interface FoodDetailsModalProps {
  open: boolean;
  onClose: () => void;
  data: any[];
}

const FoodDetailsModal: React.FC<FoodDetailsModalProps> = ({ open, onClose, data }) => {
  // Cálculo dos totais
  const totalValues = data.reduce(
    (acc, item) => {
      acc.calorie += item.calorie || 0;
      acc.carbo += item.carbo || 0;
      acc.protein += item.protein || 0;
      acc.sugar += item.sugar || 0;
      return acc;
    },
    { calorie: 0, carbo: 0, protein: 0, sugar: 0 }
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%', 
        maxWidth: 600, 
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
        outline: 'none', 
      }}>
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

              {/* Linha de Totais */}
              {data.length > 0 && (
                <TableRow sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }}> 
                  <TableCell><strong>Total</strong></TableCell>
                  <TableCell><strong>{totalValues.calorie.toFixed(2)}</strong></TableCell>
                  <TableCell><strong>{totalValues.carbo.toFixed(2)}</strong></TableCell>
                  <TableCell><strong>{totalValues.protein.toFixed(2)}</strong></TableCell>
                  <TableCell><strong>{totalValues.sugar.toFixed(2)}</strong></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default FoodDetailsModal;
