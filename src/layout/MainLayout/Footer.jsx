import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="main_layout_footer footer w-full p-3">
      {t('mainLayout.footer')}
    </footer>
  )
}