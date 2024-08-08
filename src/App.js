import logo from './logo.svg';
import './App.css';

import { Button, Avatar, Card, Box, Typography, Chip, List, ListItem, ListItemText, Divider, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import {appInfo} from './components/appInfo'

var isAppListAvailable = '';

if(appInfo.length > 0) {
  isAppListAvailable = true;
}
console.log(appInfo.length)

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: 1, height: "100vh" }}
      style={{backgroundColor: '#282c34'}}>
      
      <img style={{width: 300}} src="./images/Diabetes_Compass_horizontal_inverse.png" />


      {
        isAppListAvailable &&
        
        <Card variant="outlined" sx={{ minWidth: 350 }}>

          {
            appInfo.map((appDetails) => {

              var appLogo = "./images/" + appDetails.appLogo;
              var appTitle = appDetails.appTitle;
              var appSize = appDetails.appSize;
              var appVersion = appDetails.appVersion;
              var appBuild = appDetails.appBuild;
              var appDownloadLink = appDetails.appDownloadLink;

              console.log(appDownloadLink == "")

              return(
                <div>
                <Box sx={{ p: 2 }}>
                  <Stack direction="row" alignContent="center" alignItems="center">
                    <Avatar
                      alt="DC"
                      src={appLogo}
                      sx={{ width: 80, height: 80 }}
                    />
                    <Stack direction="column">
                      <div sx={{}} style={{fontSize: 18, fontWeight: 500, marginBottom: 10}}>
                        {appTitle}
                      </div>
                      <Stack direction="row" spacing={1}>
                        <Chip label={appSize} size="small" />
                        <Chip label={appVersion} size="small" />
                        <Chip label={appBuild} size="small" />
                      </Stack>
                      
                      { !appDownloadLink && <Button disabled sx={{mt: 2}} variant="contained" startIcon={<DownloadIcon/>}>Download</Button>}
                      { appDownloadLink && <Button href={appDownloadLink} sx={{mt: 2}} variant="contained" startIcon={<DownloadIcon/>}>Download</Button>}
                      
                    </Stack>
                    
                  </Stack>
                </Box>
                <Divider />
                </div>
              )
            })
          }
        </Card>
      }

      {
        !isAppListAvailable &&
      
        <Card variant="outlined" sx={{ minWidth: 350 }}>
          <Box sx={{ p: 2 }}>
            <Stack direction="row" alignContent="center" alignItems="center" justifyContent="center">
              No apps available for download              
            </Stack>
          </Box>
        </Card>

      }
    </Stack>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
