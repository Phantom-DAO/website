import { Box, Grid, Zoom } from "@material-ui/core";
import { ReactComponent as Olympus } from "../../assets/icons/olympus.svg";
import { ReactComponent as Frax } from "../../assets/icons/frax.svg";
import SpiritLogo from "../../assets/icons/spiritswap-logo.png";

import "./partner.scss";
const Partner = () => {
  return (
    <div id="partner-view">
      <Zoom in={true}>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ margin: "2rem 0 0 0" }}>
            <p className="semiBold-f36">Our Partners</p>
          </Box>
          <Box
            sx={{
              margin: "0 0 2rem 0",
              width: "100%",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={styles.partnerCard}>
                  <Olympus height={70} width={300} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={styles.partnerCard}>
                  <Frax height={104} width={104} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={styles.partnerCard}>
                  <img height={187} src={SpiritLogo} alt="logo"></img>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Zoom>
    </div>
  );
};

const styles = {
  partnerCard: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  },
};
export default Partner;
