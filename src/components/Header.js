
import { useFormik } from 'formik';
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Header = () => {



  const location = useLocation();
  const nav = useNavigate();

  const valSchema = Yup.object().shape({
    query: Yup.string().required("Type something to search")
  });

  const formik = useFormik({
    initialValues: {
      query: ''
    },

    onSubmit: (val, { resetForm }) => {

      nav(`/search/${val.query}`);
      resetForm();

    },

    validationSchema: valSchema

  })


  return (

    <header className='bg-[#23180D] pt-5 h-[90px]'>
      <nav className='flex items-center justify-around'>
        <div><NavLink to='/'><img src="https://www.themealdb.com/images/logo-small.png" alt="" /></NavLink>
        </div>

        <div className='flex items-center gap-5'>
          <NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'bg-[#C52D2F]' : ''} p-2 rounded-md`}><h1 className='text-white '>Home</h1></NavLink>
          <NavLink to="https://forum.kodi.tv/showthread.php?tid=282387"><h1 className='text-white'>Forum</h1></NavLink>
          {formik.errors.query && formik.touched.query && <h1 className='text-red-500'>{formik.errors.query}</h1>}
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                className='sm:hidden md:hidden bg-white p-1 rounded-md'
                type='search'

                name='query'
                placeholder='search'
                onChange={formik.handleChange}
                value={formik.values.query}



              />


            </div>
          </form>
        </div>

      </nav>

    </header>
  )
}

export default Header
