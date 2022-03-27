import logo from './logo.svg';
import './App.css';
import {
  AppBar, Box, Toolbar, Typography, Button, IconButton, Card, CardActions, CardContent, Grid, Accordion, AccordionSummary, AccordionDetails, Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { fontSize } from '@mui/system';
import { Scale, Transform } from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const BootstrapButton = styled(Button)({

  '&:hover': {
    backgroundColor: 'darkblue',
    borderColor: 'black',
    boxShadow: 'none',
    color: 'white',
    transform: 'scale(1.1)'
  },
});


function App() {

  return (
    <div style={{ background: 'blue', margin: '10px', height: '700px' }}>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container spacing={0} style={{ margin: '20px' }}  >
        <Grid item xs={0.75}> </Grid>

        <Grid item xs={3.2} style={{ border: 'solid 1px white', borderRadius: '10px', margin: '20px' }}>
          <header>
            <Item>
              <div><h4>FREE</h4>
                <b> <span style={{ fontSize: '50px' }}>$0 </span> <span style={{ fontSize: '15px' }} >/month</span> </b>
              </div> <br /> <br />
              <div style={{ wigth: '100%', border: 'solid 1px rgba(0, 0, 0, 0.2)' }} ></div> <br /> <br />
              <div>
                <div style={{ textAlign: 'left', paddingLeft: '30px' }}>
                  <div style={{ color: 'black' }}>
                    <div> <CheckIcon fontSize='small' />Single User </div> <br />
                    <div> <CheckIcon fontSize='small' />5GB Storage </div> <br />
                    <div> <CheckIcon fontSize='small' />Unlimited Public Projects </div> <br />
                    <div> <CheckIcon fontSize='small' />Community Access </div> <br />
                  </div>
                  <div style={{ color: 'lightgrey' }}>
                    <div> <ClearIcon fontSize='small' />Unlimited Private Projects  </div> <br />
                    <div> <ClearIcon fontSize='small' />Dedicated Phone Support</div> <br />
                    <div> <ClearIcon fontSize='small' />Free Subdomain</div> <br />
                    <div> <ClearIcon fontSize='small' />Monthly Status Reports</div> <br />
                  </div>
                </div>
                <BootstrapButton variant="contained" style={{ borderRadius: '20px', width: '90%', fontWeight: 'bolder' }} >Button</BootstrapButton> <br />
              </div>
            </Item>
          </header>
        </Grid>

        <Grid item xs={3.2} style={{ border: 'solid 1px white', borderRadius: '10px', margin: '20px' }}>
          <header>
            <Item>
              <div><h4>PLUS</h4>
                <b> <span style={{ fontSize: '50px' }}>$9 </span> <span style={{ fontSize: '15px' }} >/month</span> </b>
              </div> <br /> <br />
              <div style={{ wigth: '100%', border: 'solid 1px  rgba(0, 0, 0, 0.2)' }} ></div> <br /> <br />
              <div>
                <div style={{ textAlign: 'left', paddingLeft: '30px' }}>
                  <div style={{ color: 'black' }}>
                    <div> <CheckIcon fontSize='small' /><b>5 Users</b> </div> <br />
                    <div> <CheckIcon fontSize='small' />50GB Storage </div> <br />
                    <div> <CheckIcon fontSize='small' />Unlimited Public Projects </div> <br />
                    <div> <CheckIcon fontSize='small' />Community Access </div> <br />
                    <div> <CheckIcon fontSize='small' />Unlimited Private Projects  </div> <br />
                    <div> <CheckIcon fontSize='small' />Dedicated Phone Support</div> <br />
                    <div> <CheckIcon fontSize='small' />Free Subdomain</div> <br />
                  </div>
                  <div style={{ color: 'lightgrey' }}>
                    <div> <ClearIcon fontSize='small' />Monthly Status Reports</div> <br />
                  </div>
                </div>
                <BootstrapButton variant="contained" style={{ borderRadius: '20px', width: '90%', fontWeight: 'bolder' }}>Button</BootstrapButton> <br />
              </div>
            </Item>
          </header>
        </Grid>

        <Grid item xs={3.2} style={{ border: 'solid 1px white', borderRadius: '10px', margin: '20px' }}>
          <header>
            <Item>
              <div><h4>PRO</h4>
                <b> <span style={{ fontSize: '50px' }}>$49 </span> <span style={{ fontSize: '15px' }} >/month</span> </b>
              </div> <br /> <br />
              <div style={{ wigth: '100%', border: 'solid 1px  rgba(0, 0, 0, 0.2)' }} ></div> <br /> <br />
              <div>
                <div style={{ textAlign: 'left', paddingLeft: '30px' }}>
                  <div style={{ color: 'black' }}>
                    <div> <CheckIcon fontSize='small' /><b>Unlimited Users</b> </div> <br />
                    <div> <CheckIcon fontSize='small' />50GB Storage </div> <br />
                    <div> <CheckIcon fontSize='small' />Unlimited Public Projects </div> <br />
                    <div> <CheckIcon fontSize='small' />Community Access </div> <br />
                    <div> <CheckIcon fontSize='small' />Unlimited Private Projects  </div> <br />
                    <div> <CheckIcon fontSize='small' />Dedicated Phone Support</div> <br />
                    <div> <CheckIcon fontSize='small' /><b>Unlimited</b> Free Subdomain</div> <br />
                    <div> <CheckIcon fontSize='small' />Monthly Status Reports</div> <br />
                  </div>
                </div>
                <BootstrapButton variant="contained" style={{ borderRadius: '20px', width: '90%', fontWeight: 'bolder' }}>Button</BootstrapButton> <br />
              </div>
            </Item>
          </header>
        </Grid>
        <Grid item xs={0.75}> </Grid>

      </Grid>
    </div >



  );
}

export default App;
