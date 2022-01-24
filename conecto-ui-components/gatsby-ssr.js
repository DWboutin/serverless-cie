import React from "react"
import { WithIntl } from "./src/i18n"

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <WithIntl {...props}>{element}</WithIntl>
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  const googleMapJs = (<script src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAGiTAyH3sMyqsKBgF86Af2cFSqbd3ntCM&v=3.exp&libraries=geometry,drawing,places&callback=INIT_GOOGLE_AUTOCOMPLETE`} async key="google-script" />)

  setPostBodyComponents([
    googleMapJs,
  ])
}