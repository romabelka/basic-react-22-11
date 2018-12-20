import React from 'react'
import i18n from '../i18n'

function Loader({ t }) {
  return <h3>{t('Loading')}...</h3>
}

Loader.propTypes = {}

export default i18n(Loader)
