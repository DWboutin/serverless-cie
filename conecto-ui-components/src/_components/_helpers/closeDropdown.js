import closest from './closest'

const closeDropdown = e => {
  Object.keys(window.TO_DROPDOWN_IDS).forEach(dropdownId => {
    if (closest(e.target, `#${dropdownId}`) === null) {
      window.TO_DROPDOWN_IDS[dropdownId](e)
    }
  })
}

export default closeDropdown
