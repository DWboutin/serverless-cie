import Accordion, { AccordionPanel } from './Accordion'
import Button, { ButtonGroup, ButtonDropdown } from './Button'
import Card, {
  CardsSwiper,
  CTACard,
  CardOpportunity,
  CardLead,
  CardStat,
} from './Card'
import CheckPoint, { PhoneDisplay } from './Display'
import Grid, { Row, Col } from './Grid'
import Icon from './Icon'
import Input, {
  Label,
  InputError,
  TextArea,
  Checkbox,
  CheckboxGroup,
  Switch,
  DropdownList,
  DropdownChoice,
  AddressAutocomplete,
  googleScriptCallbackInit,
} from './Input'
import Logo from './Logo'
import Modal, { ModalButton } from './Modal'
import Navigation, { NavigationLink } from './Navigation'
import Notification from './Notification'
import LoadingBar from './LoadingBar'
import SiteHeader from './SiteHeader'
import SVG from './SVG'
import Tabs, { TabPanel } from './Tabs'
import StatCircle, { StatSonar, StatTwoNumbers } from './Stat'

const WithStyle = () => {
  require('./_base/styles.scss')
}

const WithRoofingStyle = () => {
  require('./_base/roofing.scss')
}

export {
  Accordion,
  AccordionPanel,
  Button,
  ButtonGroup,
  ButtonDropdown,
  Card,
  CTACard,
  CardsSwiper,
  CardOpportunity,
  CardLead,
  CardStat,
  CheckPoint,
  PhoneDisplay,
  Grid,
  Row,
  Col,
  Icon,
  Input,
  Label,
  InputError,
  TextArea,
  Checkbox,
  CheckboxGroup,
  Switch,
  DropdownList,
  DropdownChoice,
  AddressAutocomplete,
  LoadingBar,
  Logo,
  Modal,
  ModalButton,
  Navigation,
  NavigationLink,
  Notification,
  SiteHeader,
  SVG,
  Tabs,
  TabPanel,
  StatCircle,
  StatSonar,
  StatTwoNumbers,
  WithStyle,
  WithRoofingStyle,
  googleScriptCallbackInit,
}
