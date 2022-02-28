import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DetailModal = ({
  open,
  setOpen,
  selectedProducts,
  setSelectedProducts,
  selectedSubCategories,
  setSelectedSubCategories,
  selectedSubProducts,
  setSelectedSubProducts,
}) => {
  const handleClose = () => {
    setSelectedProducts([]);
    setSelectedSubCategories([]);
    setSelectedSubProducts([]);
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Products
          </Typography>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            {selectedProducts.map((item) => (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {item},
              </Typography>
            ))}
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sub Categories
          </Typography>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            {selectedSubCategories.map((item) => (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {item},
              </Typography>
            ))}
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sub Products
          </Typography>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            {selectedSubProducts.map((item) => (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {item},
              </Typography>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "20px 5px",
            }}
          >
            <Button variant="contained" onClick={handleClose}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailModal;
