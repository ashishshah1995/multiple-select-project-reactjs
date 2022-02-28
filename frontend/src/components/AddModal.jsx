import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";

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

const AddModal = ({ open, setOpen, name, value, setValue, saveItem }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    saveItem();
    setOpen(false);
    setValue("");
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
            Add {name}
          </Typography>
          <form action="">
            <TextField
              label="Name"
              placeholder="Name"
              required
              fullWidth
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />

            <div style={{ marginTop: "20px" }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                onClick={handleSubmit}
              >
                Add {name}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddModal;
