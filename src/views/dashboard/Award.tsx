// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CustomAvatar from '@/@core/components/mui/Avatar'
import Link from 'next/link'
import { Grid } from '@mui/material'

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <div className='flex gap-5'>
            <CustomAvatar variant='rounded' color='success' className='shadow-xs'>
              <i className='ri-group-line'></i>
            </CustomAvatar>
            <Typography variant='h5' className='pt-1'>
              Total Number of Users
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            100
          </Typography>
          
        </div>
        <Grid item xs={12} className='flex justify-end items-end'>
          <Button variant='contained'>
            <Link href='/users' className='btn-link'>
              Users
            </Link>
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Award
