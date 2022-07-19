import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function CreatePlayListModal() {
  return (
    <div className='CreatePlayListModal'>
        <TextField id="standard-basic" label="#Playlist" variant="standard" 
        sx={{width: 300, marginLeft: "50px"}}/>
        <Button variant="outlined" style={{float: "right", marginTop: "15px"}} >Create</Button>

    </div>
  )
}
