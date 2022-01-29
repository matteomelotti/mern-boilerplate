import React from 'react'
import { useTranslation } from 'react-i18next'
// import { useQuery } from 'react-query'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
// import Loader from 'app/components/Loader'

const DashboardPage = ({ user }) => {
  const { t } = useTranslation()
  // const { isLoading } = useQuery(['Me', user.accountId], Customer, {
  //   retry: false,
  //   onSuccess: data => {
  //     // do something
  //   }
  // })

  // if (isLoading) {
  //   return <Loader />
  // }

  return (
    <div className='dashboard-page'>
      <h1>{t('dashboardPage.privateContent')}</h1>
    </div>
  )
}
export default DashboardPage
