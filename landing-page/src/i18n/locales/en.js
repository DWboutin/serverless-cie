const enLocaleData = require('react-intl/locale-data/en')
const intl = require('react-intl')
const defineMessages = intl.defineMessages
const addLocaleData = intl.addLocaleData

addLocaleData(enLocaleData)

const messages = defineMessages({
  lang_fr: 'Fr',
  lang_en: 'En',
  roofing: 'Roofing',
  howItWorks: 'How it works',
  roofingTypes: 'Roofing types',
  termsOfService: 'Terms of service',
  madeWithConecto: 'Made with Conecto',
  menu: 'Menu',
  contractor: 'Contractor',
  contractors: 'Contractors',
  weNeedContractors: 'We are always looking for new entrepreneurs',
  pageTitle: 'Looking for a roofer?',
  checkpoint1: "Make your quote request online. It's free and fast!",
  checkpoint2: 'Get up to 4 offers from local entrepreneurs',
  checkpoint3: 'Compare the quotes, then make your choice',
  submitYourProject: 'Submit your project',
  step1: 'Step 1',
  step2: 'Step 2',
  minLength2: '2 or more characters needed',
  maxLength50: '50 or less characters needed',
  maxLength200: '200 or less characters needed',
  isRequired: 'Required',
  mustChooseOne: 'Must choose one',
  mustBeValid: 'Must be valid',
  mustChooseAddress: 'Select an address from the list',
  labelFirstName: 'First name',
  labelLastName: 'Last name',
  labelEmail: 'Email address',
  labelPhone: 'Phone',
  labelContactMethod: 'Contact method',
  labelContactMethodEmail: 'email',
  labelContactMethodSMS: 'sms',
  labelContactMethodPhone: 'phone',
  labelContactPreference: 'Contact preference',
  labelContactPreferenceAM: 'am',
  labelContactPreferencePM: 'pm',
  labelContactPreferenceEvening: 'evening',
  labelCity: 'City',
  labelNumber: 'Number',
  labelPostalCode: 'Postal code',
  labelAddress: 'Address',
  labelStreetAddress: 'Street Address',
  buttonNextStep: 'Next step',
  labelCompleteAddress: 'Full address',
  labelJobType: 'Roof type',
  labelJobTypeSpecific: 'Slope type',
  labelJobType_asphalt_shingle: 'Asphalt Shingle',
  labelJobType_asphalt_and_gravel: 'Asphalt and gravel',
  labelJobType_elastomeric: 'Elastomeric membrane',
  labelJobType_epdm: 'EPDM',
  labelJobType_sheet_metal: 'Sheet metal',
  labelJobType_tpo: 'TPO',
  labelJobType_other: 'Other (precise in work description)',
  labelJobTypeSpecific_flat: 'Flat',
  labelJobTypeSpecific_low_slope: 'Low slope',
  labelJobTypeSpecific_high_slope: 'High slope',
  labelJobTypeSpecific_mansard: 'Mansard',
  labelJobTypeSpecific_other: 'Other (precise in work description)',
  labelJobInfo: 'Work description',
  labelMailing:
    'I agree to subscribe to the newsletter',
  labelConditions:
    'I accept the terms of service',
  textConditions:
    "Click here to see the terms of service",
  buttonObtainQuotes: 'Get quotes',
  buttonSavePreferences: 'Save preferences',
  contactPreferenceUpdatedTitle: 'Contact preferences',
  contactPreferenceUpdatedMessage: 'Your contact preferences have been saved in your request',
  howItWorksCard1_title: 'Fill out your request',
  howItWorksCard1_text:
    'The questionnaire takes less than a minute to complete. Then our team will contact you quickly to validate your information. Finally, we are looking for the best roofers in your area.',
  howItWorksCard2_title: 'Meet the entrepreneurs',
  howItWorksCard2_text:
    'As soon as your request is confirmed and submitted, 4 companies will contact you to schedule the inspection of your property. After their visit, they will send you a detailed quote according to your needs.',
  howItWorksCard3_title: 'Choose your roofer',
  howItWorksCard3_text:
    "After receiving the proposals, it's time to make your choice. We are available to enlighten you in your choice of roofer to ensure your satisfaction.",
  ctaSection_title: 'Receive up to 4 proposals now',
  ctaSection_text: 'Free, easy and without obligations',
  ctaSection_button: 'Request a quote',
  advantagesSection_panel1_title: 'Customer benefits',
  advantagesSection_panel1_content_title:
    'Easier than ever to find a good roofer!',
  advantagesSection_panel1_content_text:
    'Conecto will find specialists in your area',
  advantagesSection_panel1_content_checkpoint1:
    'Receive up to 4 different proposals',
  advantagesSection_panel1_content_checkpoint2: 'Free. No account required',
  advantagesSection_panel1_content_checkpoint3:
    'We notify you by email or text message',
  advantagesSection_panel1_content_checkpoint4:
    'Our team accompanies you in all stages',
  advantagesSection_panel1_phone_title: 'We received your project request',
  advantagesSection_panel1_phone_text:
    'One of our agents will contact you shortly to confirm your request and validate your information',
  advantagesSection_panel2_title: 'Entrepreneur benefits',
  advantagesSection_panel2_content_title: 'Manage requests with ease',
  advantagesSection_panel2_content_text:
    'Conecto is in charge of putting you in contact with potential customers in your area',
  advantagesSection_panel2_content_checkpoint1: "Analyze applicants' queries",
  advantagesSection_panel2_content_checkpoint2: 'Send your proposal',
  advantagesSection_panel2_content_checkpoint3:
    'Follow the evolution of the requests in real time',
  advantagesSection_panel2_content_checkpoint4:
    'Avoid downtime and enjoy our support',
  advantagesSection_panel2_phone_title:
    'Your business has been successfully validated',
  advantagesSection_panel2_phone_text:
    'Welcome to Conecto! To begin receiving requests, please update your availability in your dashboard.',
  materialsSection_title: 'The most used materials by roofers',
  materialsSection_material1_title: 'Asphalt shingles',
  materialsSection_material1_text:
    'Asphalt shingles are the most used material in Quebec, nearly 75% of the roofs. It consists of three layers: fiberglass or recycled paper, asphalt and superimposed granules. The whole thing is laid on a felt underlay. This material is constantly improving, as innovations progress. Its new sustainable synthetic composition offers guarantees of up to 50 years.',
  materialsSection_material2_title: 'Elastomeric membrane',
  materialsSection_material2_text:
    'Mainly used on flat roofs of commercial buildings, two-layer elastomeric membrane roofs offer a service life of up to 35 years. The membrane is composed of two fused layers of bitumen, the last of which is formed of fine grains of ceramic. The cost of these roofs is often higher, given their high cost of insurance, but its maintenance is easy and its quality is uniform.',
  madeWithConecto_text:
    'Whether for a residential or commercial project, discover certified roofers to meet your expectations.',
  footerSections_title: 'Sections',
  footerSections_legal: 'Legal',
  footerContact_title: 'Contact',
  request_confirmation_modal_title: 'Your request has been successfully entered',
  request_confirmation_modal_text:
    'Contractors will contact you very soon to give you their submissions.',
  copyright:
    'St-Roch, Quebec Canada<br />2019, All rights reserved &copy;Conecto',
  validationAddressInfos:
    'Make sure the civic number, address, and the city are in the address',
  metaTitle: 'Get free quotes for your roof',
  metaDescription: 'Complete the bid request and get in touch with up to 4 certified roofing contractors in your area',
  metaKeywords: 'roof, conecto, roof quote, roof quebec, shingles, quote, roof quote, roof submission, metal roof, elastomeric membrane',
  ogSiteName: 'Conecto Roofing',
  request_tos_confirmation_modal_title: 'Conecto Customer Agreement',
  request_tos_confirmation_modal_scroll_info: 'Click here when you have read and agree our Terms.',
  request_tos_confirmation_modal_submit_btn: 'I have read and agree to the Terms',
  request_tos_confirmation_modal_text: `
    <p>Under this End User Licence Agreement (the "Agreement"), VendorName (the "Vendor") grants to the user (the "Licensee") a non-exclusive and non-transferable licence (the "Licence") to use Conecto - Service de soumission (the "Software").</p>
    <p>"Software" includes the executable computer programs and any related printed, electronic and online documentation and any other files that may accompany the product.</p>
    <p>Title, copyright, intellectual property rights and distribution rights of the Software remain exclusively with the Vendor. Intellectual property rights include the look and feel of the Software. This Agreement constitutes a licence for use only and is not in any way a transfer of ownership rights to the Software.</p>
    <p>The rights and obligations of this Agreement are personal rights granted to the Licensee only. The Licensee may not transfer or assign any of the rights or obligations granted under this Agreement to any other person or legal entity. The Licensee may not make available the Software for use by one or more third parties.</p>
    <p>The Software may not be modified, reverse-engineered, or de-compiled in any manner through current or future available technologies.</p>
    <p>Failure to comply with any of the terms under the Licence section will be considered a material breach of this Agreement.</p>
    <h3>License Fee</h3>
    <p>The original purchase price paid by the Licensee will constitute the entire licence fee and is the full consideration for this Agreement.</p>
    <h3>Limitation of Liability</h3>
    <p>The Software is provided by the Vendor and accepted by the Licensee "as is". Liability of the Vendor will be limited to a maximum of the original purchase price of the Software. The Vendor will not be liable for any general, special, incidental or consequential damages including, but not limited to, loss of production, loss of profits, loss of revenue, loss of data, or any other business or economic disadvantage suffered by the Licensee arising out of the use or failure to use the Software.</p>
    <p>The Vendor makes no warranty expressed or implied regarding the fitness of the Software for a particular purpose or that the Software will be suitable or appropriate for the specific requirements of the Licensee.</p>
    <p>The Vendor does not warrant that use of the Software will be uninterrupted or error-free. The Licensee accepts that software in general is prone to bugs and flaws within an acceptable level as determined in the industry.</p>
    <h3>Mandates and representations</h3>
    <p>The Vendor warrants and represents that it is the copyright holder of the Software. The Vendor warrants and represents that granting the licence to use this Software is not in violation of any other agreement, copyright or applicable statute.</p>
    <h3>Acceptance</h3>
    <p>All terms, conditions and obligations of this Agreement will be deemed to be accepted by the Licensee ("Acceptance") on registration of the Software with the Vendor.</p>
    <h3>Term</h3>
    <p>The term of this Agreement will begin on Acceptance and is perpetual.</p>
    <h3>Termination</h3>
    <p>This Agreement will be terminated and the Licence forfeited where the Licensee has failed to comply with any of the terms of this Agreement or is in breach of this Agreement. On termination of this Agreement for any reason, the Licensee will promptly destroy the Software or return the Software to the Vendor.</p>
    <h3>Force Majeure</h3>
    <p>The Vendor will be free of liability to the Licensee where the Vendor is prevented from executing its obligations under this Agreement in whole or in part due to Force Majeure, such as earthquake, typhoon, flood, fire, and war or any other unforeseen and uncontrollable event where the Vendor has taken any and all appropriate action to mitigate such an event.</p>
    <h3>Additional Clauses</h3>
    <p>Additional Clause 1.</p>
    <h3>Governing Law</h3>
    <p>The Parties to this Agreement submit to the jurisdiction of the courts of the Province of Quebec for the enforcement of this Agreement or any arbitration award or decision arising from this Agreement. This Agreement will be enforced or construed according to the laws of the Province of Quebec.</p>
    <h3>Miscellaneous</h3>
    <p>This Agreement can only be modified in writing signed by both the Vendor and the Licensee.</p>
    <p>This Agreement does not create or imply any relationship in agency or partnership between the Vendor and the Licensee.</p>
    <p>Headings are inserted for the convenience of the parties only and are not to be considered when interpreting this Agreement. Words in the singular mean and include the plural and vice versa. Words in the masculine gender include the feminine gender and vice versa.</p>
    <p>Words in the neuter gender include the masculine gender and the feminine gender and vice versa.</p>
    <p>If any term, covenant, condition or provision of this Agreement is held by a court of competent jurisdiction to be invalid, void or unenforceable, it is the parties' intent that such provision be reduced in scope by the court only to the extent deemed necessary by that court to render the provision reasonable and enforceable and the remainder of the provisions of this Agreement will in no way be affected, impaired or invalidated as a result.</p>
    <p>This Agreement contains the entire agreement between the parties. All understandings have been included in this Agreement. Representations which may have been made by any party to this Agreement may in some way be inconsistent with this final written Agreement. All such statements are declared to be of no value in this Agreement. Only the written terms of this Agreement will bind the parties.</p>
    <p>This Agreement and the terms and conditions contained in this Agreement apply to and are binding upon the Vendor's successors and assigns.</p>
    <h3>Notices</h3>
    <p>All notices to the Vendor under this Agreement are to be provided at the following address:</p>
    <p>307-460. Rue de la Couronne, St-Roch, Quebec, Canada, G1K6G2</p>
  `,
})

module.exports = messages
