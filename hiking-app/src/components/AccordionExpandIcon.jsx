import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  return (
    <div>
      <Accordion sx={{m: 3 }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Queenstown</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nestled amidst New Zealand's spectacular alpine landscapes, Queenstown offers more than just a getaway.

        Venture further, immerse yourself in nature and connect with the land and community. Queenstown invites you to slow down, experience more and become a temporary local
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{m: 3 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Alexandra</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          From Alexandra, the walking trails and Pinot Noir vineyards of Central Otago beckon. 
          This town has a golden history, dating back to the 1880s.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{m: 3 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Cromwell</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Cromwell was established by gold miners, but now its treasure is stone fruit. 
          Explore nearby ghost towns and soak up the tranquil lakeside scenery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{m: 3 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Wanaka</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A lively town buzzing with a carefree spirit, Wānaka’s picture-perfect location and easy access to the outdoors makes it the ultimate base for your holiday
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
