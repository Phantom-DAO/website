import { Box, Zoom } from "@material-ui/core";
import { ReactComponent as Laptop } from "../../assets/icons/laptop.svg";
import { ReactComponent as BookGirl } from "../../assets/icons/girl-book.svg";
import { ReactComponent as Gaming } from "../../assets/icons/gaming.svg";
import { ReactComponent as Stats } from "../../assets/icons/stats.svg";
import { ReactComponent as Wtv } from "../../assets/icons/wtv.svg";

import "./accelerator.scss";

const Accelerator = () => {
  const rowGenerator = (h1, h2, Comp, cls) => {
    return (
      <div className={cls} style={{ width: "100%", marginTop: "3rem" }}>
        {cls === "flex" ? (
          <>
            <div style={styles.rowCard}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <p className="medium-f30">{h1}</p>
                <p>{h2}</p>
              </Box>
            </div>
            <div className="img-bar" style={styles.rowCard}>
              <Comp />
            </div>
          </>
        ) : (
          <>
            <div className="img-bar" style={styles.rowCardRight}>
              <Comp />
            </div>
            <div style={styles.rowCard}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <p className="medium-f30">{h1}</p>
                <p>{h2}</p>
              </Box>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div id="acc-view">
      <Zoom in={true}>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ margin: "3rem 0 0 0" }}>
            <p className="semiBold-f36">Accelerator Verticals</p>
          </Box>
          {rowGenerator(
            "Defi",
            "Decentralized Finance (DeFi) uses blockchain and smart contracts instead of financial intermediaries to offer crypto instruments. DeFi is quickly gaining traction in the crypto world with protocols like SushiSwap, UniSwap and others being extremely popular.",
            Laptop,
            "flex"
          )}
          {rowGenerator(
            "Education, Learning & Communications",
            "Accessible education is extremely important for the progression of our industry. High-quality offerings that allows users to learn at a self-directed pace are needed in web3. There is a supply shortage of experienced talent in the industry but no shortage of ideas that need executing.",
            BookGirl,
            "flex-ci"
          )}
          {rowGenerator(
            "Gaming",
            "Gaming in crypto has significantly grown in popularity recently. Play to Earn (P2E) as a concept has taken the industry by storm, although the clear winners are yet to appear. The best projects will combine sustainable tokenomics with enjoyable and addictive gameplay.",
            Gaming,
            "flex"
          )}
          {rowGenerator(
            "Metaverse",
            "The Metaverse is a shared virtual space where users can engage in social activities with one another. Metaverse projects are all the rage right now, even the traditional markets are optimistic about the possibilities this tech will create - we think they are endless, but there will only be a few big winners.",
            Wtv,
            "flex-ci"
          )}
          {rowGenerator(
            "Chains (L1s, L2s, zKrollups)",
            "New chains (or tangential solutions) are a dime a dozen. What separates blockchain success from failure is a clear utility and path to market. Without mass adoption, these chains will never succeed over the long-term. Mass adoption can bring its own problems (i.e. Ethereum’s need for v2), so the initial design must be secure and scalable.",
            Stats,
            "flex"
          )}
        </Box>
      </Zoom>
    </div>
  );
};

const styles = {
  rowCard: {
    display: "flex",
    flex: 1,
    padding: "20px",
  },
  rowCardRight: {
    display: "flex",
    flex: 1,
    padding: "20px",
    justifyContent: "flex-end",
  },
  rowCardCenter: {
    display: "flex",
    flex: 1,
    padding: "20px",
    justifyContent: "centre",
  },
};

export default Accelerator;
