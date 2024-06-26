'use client'

import { useState,  } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Logo from '@components/layout/shared/Logo'
import type { Mode } from '@core/types'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormControl, FormHelperText } from '@mui/material'
import { signIn } from 'next-auth/react'

interface LoginProps {
  mode: Mode
}

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const router = useRouter();
  const [userLogin, setUserLogin] = useState<any>({});

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userLogin.email || '',
      password: userLogin.password || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Enter valid email address').required('Please Enter Your Email'),
      password: Yup.string().required('Please Enter Your Password'),
    }),
    onSubmit: (values) => {
     if (values) {
      logIn(values)
     }
    },
  });

  const logIn = async (values: any) => {
    try {
      const res = await signIn("credentials", {
      redirect: false,
      username: values.email,
      password: values.password
     
    })
     
    if(res?.error) {
    }
    else {
      router.push('/'); // Redirect on successful login
    }
    
  } catch (error) {
    console.error('Error during form submission:', error);
  }
  }
  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen relative p-6'>
      <Card className='flex flex-col sm:w-[450px]'>
        <CardContent className='p-6 sm:p-12'>
          <Link legacyBehavior href='/login' passHref>
            <a className='flex justify-center items-center'>
              <Logo />
            </a>
          </Link>
          <div className='flex flex-col gap-5 h-full'>
            <div className='flex justify-center item-center mr-2'>
              <Typography className='mb-1 text tracking-wide text-slate-800 font-medium font-spline mr-2'>
                Log In as Admin{' '}
              </Typography>
            </div>
            <form onSubmit={validation.handleSubmit} className='flex flex-col gap-5'>
              <FormControl>
                <TextField
                  fullWidth
                  type='email'
                  label='Email'
                  name='email'
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.email}
                  required
                />
                {validation.touched.email && validation.errors.email && (
                  <FormHelperText id='component-error-text' className='text-rose-500 m-0 pt-1'>
                    {}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <TextField
                  required
                  name='password'
                  value={validation.values.password}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  fullWidth
                  label='Password'
                  type={isPasswordShown ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          edge='end'
                          onClick={handleClickShowPassword}
                          onMouseDown={(e) => e.preventDefault()}
                        >
                          <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {validation.touched.password && validation.errors.password && (
                  <FormHelperText id='component-error-text' className='text-rose-500 m-0 pt-1'>
                    {}
                  </FormHelperText>
                )}
              </FormControl>
              <div className='flex flex-row justify-between gap-3 mt-6 leading-5 max-md:flex-wrap'>
                <div className='flex flex-row gap-3'>
                  <Checkbox
                    className='shrink-0 self-start rounded-md border border-solid border-neutral-500 h-[18px] w-[18px] focus:border-orange-300 focus:ring-orange-300'
                    name='agreedToTerms'
                    onChange={validation.handleChange}
                  />
                  <div className='text-gray-600 font-spline '>Remember Me </div>
                </div>
                <Link legacyBehavior href='/login' passHref>
                  <div className='text-cyan-600 font-spline '>Forget Password?</div>
                </Link>
              </div>
              <Button
                fullWidth
                variant='contained'
                type='submit'
                disabled={!validation.isValid}
              >
                Log In
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
