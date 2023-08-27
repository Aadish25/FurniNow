import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styler from "./StyleShopFooter";
import img1 from "../../assets/HighQuality.svg";
import img2 from "../../assets/Warranty.svg";
import img3 from "../../assets/Shipping.svg";
import img4 from "../../assets/License.svg";




export default function ShopFooter() {
  return (
    <>
      <Box className="mBox" style={styler.mBox}>
        <div>
          <Grid container spacing={0}>
            <Grid item>
              <img src={img1}  alt="HighQuality" />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={0}>
                <Grid item xs={10}>
                  <Typography>
                    <b className="bld" style={styler.bld}>
                      High Quality
                    </b>
                  </Typography>
                  <Typography className="sml" style={styler.sml}>
                    Crafted from top materials
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={0}>
            <Grid item>
              <img src={img2} alt="Warranty" />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={0}>
                <Grid item xs={10}>
                  <Typography>
                    <b className="bld" style={styler.bld}>
                      Warranty Protection
                    </b>
                  </Typography>
                  <Typography className="sml" style={styler.sml}>
                    Over 2 years
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={0}>
            <Grid item>
              <img src={img3} alt="Shippin" />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={0}>
                <Grid item xs="auto">
                  <Typography>
                    <b className="bld" style={styler.bld}>
                      Free Shipping
                    </b>
                  </Typography>
                  <Typography className="sml" style={styler.sml}>
                    Order over 150 $
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={0}>
            <Grid item>
              <img src={img4} alt="License" />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={0}>
                <Grid item xs={10}>
                  <Typography>
                    <b className="bld" style={styler.bld}>
                      Standard license
                    </b>
                  </Typography>
                  <Typography className="sml" style={styler.sml}>
                    Dedicated support
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
