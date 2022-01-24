import { Pagination } from '@mui/material';
const IndicadorPagination = (props) => {
    const { page, totalPages, handlePagination } = props;
    return (
        <Pagination
            count={totalPages}
            page={page}
            onChange={handlePagination}
            showFirstButton
            showLastButton
            sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
        />
    );
};

export default IndicadorPagination;