const moment = require('moment')

const enLocaleData = require('react-intl/locale-data/en')
const intl = require('react-intl')
const defineMessages = intl.defineMessages
const addLocaleData = intl.addLocaleData

moment.locale('en')

addLocaleData(enLocaleData)

const messages = defineMessages({
  lang_fr: 'Fr',
  lang_en: 'En',
  lang_fr_complete: 'Français',
  lang_en_complete: 'English',
  loading: 'loading...',
  menu: 'Menu',
  notAContrator: 'I am not a contractor',
  contractor: 'contractor',
  roofing: 'roofing',
  mustBeSignedIn_notice_title: 'You must login',
  mustBeSignedIn_notice_description: 'Login to access this page',
  signIn_form_title: 'Access my account',
  signIn_form_labelUsername: 'Email',
  signIn_form_labelPassword: 'Password',
  signIn_form_button_accessMyAccount: 'Access my account',
  signIn_form_button_forgotYourPassword: 'Forgot your password',
  signIn_youDontHaveAnAccount: 'You do not have an account?',
  signIn_button_signUp: 'Sign up',
  signIn_form_confirmation_notice_title: 'You must confirm your account',
  signIn_form_confirmation_notice_description:
    'A confirmation code has been sent to "{email}". You will be redirected to the confirmation page where you can use this code to confirm your account.',

  signIn_passwordReset_form_title: 'New password',
  signIn_passwordReset_form_text:
    'This password will be used to login to the Conecto Contractor platform.',

  layoutDashboard_navigation_link_dashboard: 'Dashboard',
  layoutDashboard_navigation_link_opportunities: 'Opportunities',
  layoutDashboard_navigation_link_leads: 'In Progress',
  layoutDashboard_footer_button_contact: 'Contact',
  layoutDashboard_accountButton_link_myCompany: 'My company',
  layoutDashboard_accountButton_link_myAccount: 'My account',
  layoutDashboard_accountButton_link_payment_method: 'Payment method',
  layoutDashboard_accountButton_link_billing: 'Billing',
  layoutDashboard_accountButton_link_services: 'Services',
  layoutDashboard_accountButton_link_addresses: 'Address',
  layoutDashboard_accountButton_link_invoice: 'Bills',
  layoutDashboard_accountButton_link_employees: 'Employees',
  layoutDashboard_accountButton_link_logOut: 'Logout',
  layoutDashboard_ctaSection_title:
    'Take full advantage of <span>Conecto</span> by completing your entrepreneur profile',
  layoutDashboard_ctaSection_button_addPaymentMethod: 'Add a payment method',
  layoutDashboard_ctaSection_checkpoint_aPaymentMethod: 'A payment method',
  layoutDashboard_ctaSection_checkpoint_authorizeNotify:
    'Authorize the application to notify you',
  layoutDashboard_ctaSection_button_authorizeNotify: 'Authorize notifications',
  dashboardPage_stats_title_acceptanceRate: 'Acceptance Rate',
  dashboardPage_stats_title_reactivity: 'Reactivity',
  dashboardPage_stats_title_opportunities: 'Opportunities',
  dashboardPage_stats_title_competitors: 'Competitors',
  dashboardPage_stats_notice_firstContact: 'First contact',
  dashboardPage_stats_notice_acceptation: 'Acceptation',
  dashboardPage_stats_notice_thisMonth: 'This month',
  dashboardPage_stats_notice_waiting: 'Waiting',
  dashboardPage_listing_opportunity_title: 'New opportunities',
  cognito_CodeMismatchException: 'The code provided is invalid',
  cognito_notValid: 'The code is invalid',
  signIn_form_notice_error_newPassword_title: 'You must create a new password',
  signIn_form_notice_error_newPassword_description:
    'Please reset your password.',
  signIn_form_notice_error_notAuthorized_title: 'Bad password',
  signIn_form_notice_error_notAuthorized_description:
    'This password is invalid.',
  signIn_form_notice_error_userNotFound_title: 'This user is not in our system',
  signIn_form_notice_error_userNotFound_description:
    'The email and password do not match any of the registered users.',
  signIn_form_temporaryPassword_resend_title:
    'A new temporary password generated',
  signIn_form_temporaryPassword_resend_description:
    'We sent you a new email with the temporary password to sign in with.',
  signIn_form_notice_error_undefinedCode_title: 'An error has occurred',
  signIn_form_notice_error_undefinedCode_description:
    'Our system could not produce the request. Please contact support and forward this information:\n\n{code}',
  signIn_form_notice_error_undefined_title: 'An error has occurred',
  signIn_form_notice_error_undefined_description:
    'Our system could not process the request. Please try again later.',
  generic_component_error_title: 'Our systems have difficulty',
  generic_component_error_description:
    'System errors have occurred in recent operations. Please contact support and send this information:\n\n{error}\n\n{info}',
  generic_component_no_net_title: 'en - Aucune connexion internet',
  generic_component_no_net_description:
    'en - Conecto doit être connecté à internet pour fonctionner. Veuillez ouvrir votre connexion',
  opportunities_card_remainingPlaces:
    '{remainingSeats, plural, =0 {complete} one {1 remaining place} other {{remainingSeats} remaining places} }',
  opportunities_card_roofing_labelCity: 'Location of the site',
  opportunities_card_roofing_labelJobType: 'Roof type',
  opportunities_card_roofing_labelJobTypeSpecific: 'Slope type',
  opportunities_card_rejected: 'Rejected',
  opportunities_card_noMoreSeats: 'Opportunity full',
  opportunities_card_btn_accept: 'Accept',
  opportunities_card_btn_reject: 'Refuse',
  opportunities_card_btn_show: 'Consult the opportunity',
  opportunity_paymentMethod_modal_title: 'You must have a payment method',
  opportunity_paymentMethod_modal_text:
    'You must have a payment method to be able to accept the opportunities. Please click this message to add one.',
  opportunity_paymentMethod_modal_button: 'Define a method',
  opportunity_acceptedDeal_modal_title:
    'You are now the owner of the opportunity',
  opportunity_acceptedDeal_modal_text:
    'This opportunity has been moved to the "In Progress" tab. You can click on this message to consult this one.',
  opportunity_acceptedDeal_modal_button: 'Consult the opportunity',
  opportunity_viewAllAvailableOpportunies: 'Available opportunites',
  opportunity_viewAllCurentOpportunies: 'Opportunities in progress',
  cardOpportunity_onRejection_notice_title: 'You rejected the opportunity',
  cardOpportunity_onRejection_notice_text:
    'The opportunity {dealInfosId} was rejected successfully. If there is a problem, please contact support.',
  leads_card_roofing_labelCity: 'Location of the site',
  leads_card_roofing_labelJobType: 'Type of roof',
  leads_card_roofing_labelJobTypeSpecific: 'Type of slope',
  leads_card_roofing_labelRequester: 'Applicant',
  leads_card_roofing_labelContactPreference: 'Contact preference',
  leads_card_contactTime_am: 'am',
  leads_card_contactTime_pm: 'pm',
  leads_card_contactTime_evening: 'evening',
  leads_card_contactRequesterButton_byEmail: 'Send an email',
  leads_card_contactRequesterButton_bySMS: 'Send a SMS',
  leads_card_contactRequesterButton_byPhone: 'Call {phoneNumber}',
  leads_card_contactRequesterContactWhenAvailable:
    'Contact the applicant according to their contact preferences.',
  leads_card_contactInfos_title: 'Contact information',
  lead_single_page_title: 'In Progress - ',
  opportunity_empty_section_title: 'No opportunity pending',
  opportunity_empty_section_text:
    'This is the page that lists the opportunities that have been assigned to you. If the opportunity is still available, you can see it posted here.',
  lead_empty_section_title: 'No opportunity in progress',
  lead_empty_section_text:
    'This is the page that lists the opportunities you have accepted. You will be able to see the information of your applicants and contact them according to their contact preferences.',
  lead_call_ongoing_modal_title: 'We will call you very soon',
  lead_call_ongoing_modal_text:
    'A call from {number} has been sent to you. This call will be redirected to the desired contact. Please keep the line.',
  account_sideMenu_myCompany: 'My company',
  account_sideMenu_myAccount: 'My account',
  account_sideMenu_paymentMethod: 'Payment method',
  account_sideMenu_billing: 'Billing',
  account_sideMenu_addresses: 'Address',
  account_sideMenu_employees: 'Employees',
  account_paymentMethod_title: 'Payment method',
  account_paymentMethod_card_number: 'Card number',
  account_paymentMethod_card_exp: 'MM/YY',
  account_paymentMethod_form_title: 'Add a credit card',
  account_paymentMethod_form_cardTitle:
    '{savedCards, plural, =0 {0 Saved cards} one {Saved card} other {{savedCards} Saved cards} }',
  account_paymentMethod_form_submitButton: 'Add this card',
  account_paymentMethod_form_notice_cardAdded_title:
    'A new card has been added',
  account_paymentMethod_form_notice_cardAdded_text:
    'The {brand} **** **** **** {last4} {exp} card has been added successfully',
  account_paymentMethod_source_card_default: '(Default method)',
  account_paymentMethod_source_delete_card: 'Delete this card',
  account_paymentMethod_source_make_default_card: 'Use as default',
  account_paymentMethod_source_detach_notice_title: 'Payment method deleted',
  account_paymentMethod_source_detach_notice_text:
    'The payment method has been deleted successfully',
  account_paymentMethod_source_make_default_notice_title:
    'Default payment method changed',
  account_paymentMethod_source_make_default_notice_text:
    'The default payment has been changed successfully',
  account_addressesForm_title: 'Company address',
  account_addressesForm_addressRange_title: 'Address radius',
  account_addressesForm_addressRange_label: 'Radius of activity in km',
  account_addressesForm_addressFound: 'Address found',
  account_addressesForm_submitButton: 'Add this address',
  account_addressesForm_addressesLimitReached:
    'You have reached the limit of addresses you can enter. If you need to add other addresses, please contact support.',
  account_addressesForm_notice_success_title: 'A new address has been added',
  account_addressesForm_notice_success_text:
    'The address has been added successfully.',
  account_addressesForm_form_cardTitle:
    '{savedAddresses, plural, =0 {0 Addresses} one {Address} other {{savedAddresses} Addresses} }',
  account_addresses_card_assignedTo: 'Assigned to: ',
  account_addresses_card_addressRange_label: '{radius} km of service',
  account_addresses_card_deleteButton: 'Delete this address',
  account_addresses_card_notice_delete_title: 'The address has been removed',
  account_addresses_card_notice_delete_text:
    'The address has been removed successfully.',
  account_employeesForm_title: 'Add an employee',
  account_employeesForm_contactInfos_title: 'Contact information',
  account_employeesForm_accountInfos_title: 'Account information',
  account_employeesForm_submitButton: 'Add this employee',
  account_employeesForm_label_firstName: 'First name',
  account_employeesForm_label_lastName: 'Last name',
  account_employeesForm_label_tel: 'Mobile phone number',
  account_employeesForm_label_email: 'Email',
  account_employeesForm_label_password: 'Password',
  account_employeesForm_label_passwordConfirmation: 'Password Confirmation',
  account_employeeForm_notice_success_title: 'The employee has been added',
  account_employeeForm_notice_success_text:
    'The employee has been added to your business successfully.',
  account_employeesDisplay_card_activeForRoofing: 'Active',
  account_employeesDisplay_card_deleteButton: 'Delete user',
  account_employeesDisplay_card_revokeAdminButton: 'Set as employee',
  account_employeesDisplay_card_promoteAdminButton: 'Set as administrator',
  account_employeesDisplay_card_promoteOwnerButton: 'Set as owner',
  account_employeesDisplay_card_isAdmin: 'Administrator',
  account_employeesDisplay_card_isOwner: 'Owner',
  account_employeesDisplay_card_isEmployee: 'Employee',
  account_employeesDisplay_card_subscribedAt: 'Registered',
  account_employeesDisplay_card_notice_delete_title:
    'The employee has been deleted',
  account_employeesDisplay_card_notice_delete_text:
    '{firstName} {lastName} ({email}) has been removed from your business successfully.',
  account_employeesDisplay_card_notice_setAsAdmin_title:
    'The employee is now an administrator',
  account_employeesDisplay_card_notice_setAsAdmin_text:
    '{firstName} {lastName} is now an administrator in your company.',
  account_employeesDisplay_card_notice_revokeAsAdmin_title:
    'The administrator is now an employee',
  account_employeesDisplay_card_notice_revokeAsAdmin_text:
    '{firstName} {lastName} is no longer an administrator in your company.',
  account_employeesDisplay_card_notice_setAsOwner_title:
    'The administrator is now set as owner',
  account_employeesDisplay_card_notice_setAsOwner_text:
    "{firstName} {lastName} is now the owner of the company's account.",
  account_myCompanyForm_title: 'My company',
  account_myCompanyForm_infosTitle: 'Contact Information',
  account_myCompanyForm_legalTitle: 'Legal Information',
  account_myCompanyForm_legalText:
    'You must contact support to change this information.',
  account_myCompanyForm_submitButton: 'Save information',
  account_myCompanyForm_labelName: 'Company Name',
  account_myCompanyForm_labelCompanyEmail: 'Contact email',
  account_myCompanyForm_labelCompanyPhone: 'Mobile phone number',
  account_myCompanyForm_labelActiveForRoofing: 'You are AVAILABLE',
  account_myCompanyForm_labelInactiveForRoofing: 'You are UNAVAILABLE',
  account_activeForRoofingOn_notice_success_title: 'Status: Active',
  account_activeForRoofingOn_notice_success_text:
    'You have successfully updated your  company status to unavailable.',
  account_activeForRoofingOff_notice_success_title: 'Status: Inactive',
  account_activeForRoofingOff_notice_success_text:
    'You have successfully updated your  company status to unavailable.',
  account_myCompanyForm_notice_success_title:
    'The company information has been updated',
  account_myCompanyForm_notice_success_text:
    'The information update has been successfully completed.',
  account_myCompanyForm_notice_success_title_fr:
    "Les informations de l'entreprise ont été mise à jour",
  account_myCompanyForm_notice_success_text_fr:
    'La mise à jour des informations a été effectué avec succès.',
  account_myAccountForm_title: 'My account',
  account_myAccountForm_signInInfosTitle: 'Connection Information',
  account_myAccountForm_changePasswordTitle: 'Change your password',
  account_myAccountForm_labelEmail: 'Email',
  account_myAccountForm_labelOldPassword: 'Old password',
  account_myAccountForm_labelNewPassword: 'New password',
  account_myAccountForm_labelNewPasswordConfirmation: 'Password Confirmation',
  account_myAccountForm_signInInfos_notice_success_title:
    'Your password has been updated',
  account_myAccountForm_signInInfos_notice_success_text:
    'You can now login using the new password.',
  account_myAccountForm_signInInfos_notice_wrongPassword_title:
    'The old password is not valid',
  account_myAccountForm_signInInfos_notice_wrongPassword_text:
    'Please enter your old password to make the change.',
  account_myAccountForm_changePassword_submitButton: 'Change my password',
  account_myAccountForm_personalInfosTitle: 'Personal informations',
  account_myAccountForm_settingsTitle: 'Communication settings',
  account_myAccountForm_labelFirstName: 'First name',
  account_myAccountForm_labelLastName: 'Last name',
  account_myAccountForm_labelPhone: 'Mobile phone number',
  account_myAccountForm_labelLocale: 'Preferred language',
  account_myAccountForm_changePersonalInfos_submitButton: 'Save',
  account_myAccountForm_personalInfos_notice_success_title:
    'Your personal information has been changed',
  account_myAccountForm_personalInfos_notice_success_text:
    'Your profile information has been updated successfully.',
  account_billing_title: 'Billing',
  account_billing_table_th_opportunity_id: 'Opportunity',
  account_billing_table_th_service: 'Service',
  account_billing_table_th_requester: 'Requester',
  account_billing_table_th_card: 'Card',
  account_billing_table_th_amount: 'Amount',
  account_billing_table_th_date: 'Date',
  labelJobType_asphalt_shingle: 'Asphalt Shingle',
  labelJobType_asphalt_and_gravel: 'Asphalt and gravel',
  labelJobType_elastomeric: 'Elastomeric membrane',
  labelJobType_epdm: 'EPDM',
  labelJobType_sheet_metal: 'Sheet metal',
  labelJobType_tpo: 'TPO',
  labelJobType_other: 'Other',
  labelJobTypeSpecific_flat: 'Flat',
  labelJobTypeSpecific_low_slope: 'Low slope',
  labelJobTypeSpecific_high_slope: 'High slope',
  labelJobTypeSpecific_mansard: 'Mansard',
  labelJobTypeSpecific_other: 'Other',
  button_back: 'Back',
  button_404_back_homepage: 'Back to homepage',
  message_404: 'It seems that this page does not exist.',
  title_404: '404: Not found',
  validationValidEmail: 'A valid address is required',
  validationFieldPostalCode: 'A valid postal code is required',
  validationValidPhoneNumber: 'A valid phone number is required',
  validationFieldIsRequired: 'This field is required',
  validationFieldMinLength2: 'Must contain 2 or more characters',
  validationFieldMinLength8: 'Must contain 8 characters or more',
  validationFieldMaxLength50: 'Must contain 50 characters or less',
  validationFieldMaxLength200: 'Must contain 200 characters or less',
  validationEmailIsAlreadyUsed: 'This email is already in use',
  validationPassword:
    'Must contain at least one uppercase letter, one lowercase letter, and one number',
  validationPasswordMustMatch: 'Must be the same as the password',
  validationRbq: 'Must be a valid RBQ number',
  validationNeq: 'Must be a valid NEQ number',
  validationTvq: 'Must be a valid QST number',
  validationTps: 'Must be a valid GST number',
  validationAddressInfos:
    'Make sure the civic number, address, city and postal code are in the company address',
  validationWrongPassword: 'Invalid password',
  validationMustAccept: 'You must accept the terms and conditions',
  twilio_redirection_call_message:
    'Your call will be sent shortly, thank you for using conecto!',
  metaTitle: 'Find qualified applicants looking for roofers in your area',
  metaDescription:
    'Conecto Entrepreneur is a quote platform that locates qualified applicants for its certified roofers in Quebec.',
  metaKeywords: 'roofer quebec, find customer roofing, marketing roofing',
  ogSiteName: 'Conecto Contractor',
  signup_tos_confirmation_modal_title: 'Conecto Contractor Agreement',
  signup_tos_confirmation_modal_scroll_info:
    'Click here when you have read and agree our Terms.',
  signup_tos_confirmation_modal_submit_btn:
    'I have read and agree to the Terms',
  signup_tos_confirmation_modal_text: `
    <h3>GENERAL SERVICE AGREEMENT</h3>
    <p>THIS GENERAL SERVICE AGREEMENT ("THE AGREEMENT") DATED {day_date} DAY OF {month_date_uppercase}, {year_date}</p>
    <p>ENTRE:</p>
    <p>
        {companyName}<br />
        {companyAddress}<br />
        (THE "CONTRACTOR")
    </p>
    <p>
        11085573 CANADA INC.<br />
        Conecto.ca<br />
        307-460 de la Couronne, St-Roch, Québec, G1K6G2<br />
        (THE “PLATFORM”)
        </p>
    <h3>Context</h3>
    <ul style="list-style-type: lower-latin;">
        <li>The Platform is of the opinion that *companyName* has the qualifications, experience and capabilities to provide services to Conecto.</li>
        <li>The Platform agrees to provide services to the Contractor on the terms and conditions set forth in this Agreement.</li>
    </ul>
    <p>CONSIDERING the above context and the mutual benefits and obligations set forth in this Agreement, the recognition of which and the consideration of the counterparty are recognized in this Agreement agree as follows:</p>
    <h3>Services provided</h3>
    <p>The Contractor hereby agrees to bind The Platform to provide the Contractor with the following services ( Services ). The Services will also include any other work that the Parties may agree to. hereby provide these Services to the Contractor.</p>
    <h3>Devise</h3>
    <p>Except as otherwise provided in this Agreement, all cash amounts referred to in this Agreement are in Canadian dollars (CAD $).</p>
    <h3>Duration of the agreement</h3>
    <p>The duration of this Agreement (the Term) shall commence on the date of this Agreement and shall continue in effect until completion of the Services, subject to early termination as provided in this Agreement. The duration may be extended with the written consent of the parties.</p>
    <h3>Compensation</h3>
    <p>The Platform shall invoice the Contractor for $ 55.00 for the Services (the Remuneration ) and the Contractor shall be billed only when accepting an opportunity, the compensation as stipulated in this Contract does not include sales tax or other applicable statutory requirements and the sales and taxes required by law will be billed to the Contractor in addition to the Remuneration.</p>
    <h3>Confidentiality</h3>
    <p>All written and oral information and material disclosed or provided by The Platform to the Contractor pursuant to this Agreement constitutes Confidential Information, whether provided before or after the date of this Agreement or in the manner in which it is provided. were provided to the Contractor by The Platform.</p>
    <h3>Intellectual property</h3>
    <p>All intellectual property and related material (Intellectual Property) developed or produced under this Agreement will be the property of the Platform. The Contractor is granted a non-exclusive limited-use license for this intellectual property. The title, copyrights, intellectual property rights and rights of distribution of intellectual property remain the exclusive property of La Plateforme.</p>
    <h3>Capacity / Independent Contractor</h3>
    <p>In providing the services under this contract, it is expressly agreed that the Contractor acts as an independent and not as an employee. The Platform and the Contractor acknowledge that this Agreement does not create a partnership or joint venture between them and constitutes exclusively a service contract.</p>
    <h3>Amendment of the agreement</h3>
    <p>Any amendment or amendment to this Agreement or any additional obligation assumed by either party under this Agreement shall be binding only if proven in writing by each party or an authorized representative of each party .</p>
    <h3>Affectation</h3>
    <p>The Platform will not assign or otherwise transfer its obligations under this Agreement without the prior written consent.</p>
    <h3>Applicable law</h3>
    <p>This agreement will be governed by and construed in accordance with the laws of the Province of Quebec.</p>
    <h3>Divisibility</h3>
    <p>If any provision of this contract is held invalid or unenforceable in whole or in part, all other provisions will remain valid and enforceable, the invalid or non-executable parts being separated from the rest of this contract.</p>
    <p>IN WITNESS WHEREOF, I accept this Agreement on {day_date} day of {month_date}, {year_date}</p>
  `,
})

module.exports = messages
