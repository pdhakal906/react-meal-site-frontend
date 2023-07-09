import React from 'react'
import { useMealsCategoryQuery } from '../features/mealApi'
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const HomePage = () => {
  const nav = useNavigate();

  const { data, isLoading, isError, error } = useMealsCategoryQuery();

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



  if (isLoading) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  return (
    <div className='bg-[#2D2013] text-white'>
      <p className='text-center text-[32px] py-5'>Welcome to TheMealDB</p>
      <div className='flex justify-around items-center px-20 sm:px-0 sm:mb-5 md:px-0 md:mb-5 '>
        <img className='w-[20%]' src="https://www.themealdb.com/images/meal-icon.png" alt="" />


        <p className='text-[16px]'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
          We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.
        </p>



        <img className='w-[20%]' src="https://www.themealdb.com/images/meal-icon.png" alt="" />
      </div>
      {/* <table>
        <tr>
          <td className='w-[20%]'>
            <img className='max-w-[100%]' src="https://www.themealdb.com/images/meal-icon.png" alt="" />
          </td>
          <td>
            <p className='text-center text-[36px] mt-8'>Welcome to TheMealDB</p>
            <p className='text-[14px]'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
              We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.
            </p>
          </td>
          <td className='w-[20%]'>
            <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
          </td>
        </tr>
      </table> */}
      <div className='flex justify-around'>
        <hr className="border-t-[3px] w-[1100px] md:mx-3 sm:mx-3 border-white" />
      </div>

      <div className='flex justify-center mt-5'>
        <form onSubmit={formik.handleSubmit}>
          <input
            className='bg-white w-[300px] text-black p-1'
            type='search'
            name='query'
            placeholder='Search for a meal'
            onChange={formik.handleChange}
            value={formik.values.query}

          />
          <button type='submit' className='bg-white w-[50px] p-1 border-l border-gray-400'><i className="fa-solid fa-magnifying-glass text-black"></i></button>
        </form>

      </div>

      <div className='flex justify-center mt-3'>
        <div className='flex gap-3 px-3'>
          <h1>Total Meals: 294</h1>
          <h1>Total Ingridents: 574</h1>
          <h1>Total Images: 294</h1>

        </div>

      </div>
      <div className='flex justify-around'>
        <hr className="border-t-[3px] w-[1100px] border-white mt-5 md:mx-3 sm:mx-3" />
      </div>
      <div className='bg-white text-[#2D2013] mt-5'>
        <p className='text-2xl text-center'>Categories</p>
        <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1'>
          {data?.categories.map((meals) => {
            return (
              <div onClick={() => nav(`/meals/${meals.strCategory}`)} key={meals.idCategory} className='shadow-2xl p-5 space-y-5'>

                <img src={meals.strCategoryThumb} alt="" />
                <h1 className='text-2xl'>{meals.strCategory}</h1>
                <p>{meals.strCategoryDescription.substring(0, 100) + '...'}</p>
              </div>
            )
          })}
        </div>

      </div>
    </div>



  )
}

export default HomePage
