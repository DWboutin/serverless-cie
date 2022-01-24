const frLocaleData = require('react-intl/locale-data/fr')
const intl = require('react-intl')
const defineMessages = intl.defineMessages
const addLocaleData = intl.addLocaleData

addLocaleData(frLocaleData)

require('./moment/fr')

const messages = defineMessages({
  lang_fr: 'Fr',
  lang_en: 'En',
  lang_fr_complete: 'Français',
  lang_en_complete: 'English',
  loading: 'chargement...',
  menu: 'Menu',
  notAContrator: 'Je ne suis pas entrepreneur',
  contractor: 'entrepreneur',
  roofing: 'toiture',
  mustBeSignedIn_notice_title: 'Vous devez vous connecter',
  mustBeSignedIn_notice_description: 'Connectez-vous pour accéder à cette page',
  signIn_form_title: 'Accéder à mon compte',
  signIn_form_labelUsername: 'Courriel',
  signIn_form_labelPassword: 'Mot de passe',
  signIn_form_button_accessMyAccount: 'Accéder à mon compte',
  signIn_form_button_forgotYourPassword: 'Mot de passe oublié',
  signIn_youDontHaveAnAccount: 'Vous n’avez pas de compte ?',
  signIn_button_signUp: 'Inscrivez-vous',
  signIn_form_confirmation_notice_title: 'Vous devez confirmer votre compte',
  signIn_form_confirmation_notice_description:
    'Un code de confirmation a été envoyé à l\'adresse "{email}". Vous serez redirigé vers la page de confirmation où vous pourrez utiliser ce code pour confirmer votre compte.',

  signIn_passwordReset_form_title: 'Nouveau mot de passe',
  signIn_passwordReset_form_text:
    'Ce mot de passe sera utilisé pour vous connecter sur la plateforme Conecto Entrepreneur.',

  layoutDashboard_navigation_link_dashboard: 'Tableau de bord',
  layoutDashboard_navigation_link_opportunities: 'Opportunités',
  layoutDashboard_navigation_link_leads: 'En Cours',
  layoutDashboard_footer_button_contact: 'Prendre contact',
  layoutDashboard_accountButton_link_myCompany: 'Mon entreprise',
  layoutDashboard_accountButton_link_myAccount: 'Mon compte',
  layoutDashboard_accountButton_link_payment_method: 'Méthode de paiement',
  layoutDashboard_accountButton_link_billing: 'Facturation',
  layoutDashboard_accountButton_link_services: 'Services',
  layoutDashboard_accountButton_link_addresses: 'Adresses',
  layoutDashboard_accountButton_link_invoice: 'Factures',
  layoutDashboard_accountButton_link_employees: 'Employés',
  layoutDashboard_accountButton_link_logOut: 'Déconnexion',
  layoutDashboard_ctaSection_title:
    'Profitez pleinement de <span>Conecto</span> en complétant votre profil entrepreneur',
  layoutDashboard_ctaSection_button_addPaymentMethod:
    'Ajouter une méthode de paiement',
  layoutDashboard_ctaSection_checkpoint_aPaymentMethod:
    'Une méthode de paiment',
  layoutDashboard_ctaSection_checkpoint_authorizeNotify:
    'Autoriser les notifications',
  layoutDashboard_ctaSection_button_authorizeNotify:
    'Autoriser les notifications',
  dashboardPage_stats_title_acceptanceRate: "Taux d'acceptation",
  dashboardPage_stats_title_reactivity: 'Réactivité',
  dashboardPage_stats_title_opportunities: 'Opportunités',
  dashboardPage_stats_title_competitors: 'Compétiteurs',
  dashboardPage_stats_notice_firstContact: 'Premier contact',
  dashboardPage_stats_notice_acceptation: 'Acceptation',
  dashboardPage_stats_notice_thisMonth: 'Ce mois-ci',
  dashboardPage_stats_notice_waiting: 'En attente',
  dashboardPage_listing_opportunity_title: 'Nouvelles opportunités',
  cognito_CodeMismatchException: 'Le code fourni est invalide',
  cognito_notValid: 'Le code est invalide',
  signIn_form_notice_error_newPassword_title:
    'Vous devez créer un nouveau mot de passe',
  signIn_form_notice_error_newPassword_description:
    'Veuillez réinitialiser votre mot de passe.',
  signIn_form_notice_error_notAuthorized_title: 'Mauvais mot de passe',
  signIn_form_notice_error_notAuthorized_description:
    'Ce mot de passe est invalide.',
  signIn_form_notice_error_userNotFound_title:
    'Cet utilisateur ne se trouve pas dans notre système',
  signIn_form_notice_error_userNotFound_description:
    'Le courriel et le mot de passe ne correspondent pas à aucun des utilisateurs inscrits.',
  signIn_form_temporaryPassword_resend_title:
    'Un nouveau mot de passe temporaire a été généré',
  signIn_form_temporaryPassword_resend_description:
    'Nous vous avons envoyé un nouveau courriel avec un mot de passe temporaire pour vous connecter.',
  signIn_form_notice_error_undefinedCode_title: 'Une erreur est survenue',
  signIn_form_notice_error_undefinedCode_description:
    "Notre système n'a pu prodécéder la requête. Veuillez contacter le support et transmettre ces informations:\n\n{code}",
  signIn_form_notice_error_undefined_title: 'Une erreur est survenue',
  signIn_form_notice_error_undefined_description:
    "Notre système n'a pu prodécéder la requête. Veuillez réessayer plus tard.",
  generic_component_error_title: 'Nos systèmes ont de la difficulté',
  generic_component_error_description:
    'Des erreurs système sont survenues lors des dernières opérations. Veuillez contacter le support et transmettre ces informations:\n\n{error}\n\n{info}',
  generic_component_no_net_title: 'fr - Aucune connexion internet',
  generic_component_no_net_description:
    'fr - Conecto doit être connecté à internet pour fonctionner. Veuillez ouvrir votre connexion',
  opportunities_card_remainingPlaces:
    '{remainingSeats, plural, =0 {complète} one {1 place restante} other {{remainingSeats} places restantes} }',
  opportunities_card_roofing_labelCity: 'Lieu du chantier',
  opportunities_card_roofing_labelJobType: 'Type de toiture',
  opportunities_card_roofing_labelJobTypeSpecific: 'Type de pente',
  opportunities_card_rejected: 'Rejetée',
  opportunities_card_noMoreSeats: 'Opportunité complète',
  opportunities_card_btn_accept: 'Accepter',
  opportunities_card_btn_reject: 'Refuser',
  opportunities_card_btn_show: "Consulter l'opportunité",
  opportunity_paymentMethod_modal_title:
    'Vous devez avoir une méthode de paiement',
  opportunity_paymentMethod_modal_text:
    'Vous devez avoir une méthode de paiement pour pouvoir accepter les opportunités. Veuillez cliquer sur ce message pour en ajouter une.',
  opportunity_paymentMethod_modal_button: 'Définir une méthode',
  opportunity_acceptedDeal_modal_title:
    "Vous êtes maintenant propriétaire de l'opportunité",
  opportunity_acceptedDeal_modal_text:
    'Cette opportunité a été transférée dans l\'onglet "En cours". Vous pouvez cliquer sur ce message pour consulter celle-ci.',
  opportunity_acceptedDeal_modal_button: "Consulter l'opportunité",
  opportunity_viewAllAvailableOpportunies: 'Opportunités disponibles',
  opportunity_viewAllCurentOpportunies: 'Opportunités en cours',
  cardOpportunity_onRejection_notice_title: "Vous avez rejeté l'opportunité",
  cardOpportunity_onRejection_notice_text:
    "L'opportunité {dealInfosId} a été rejetée avec succès. En cas de problème, veuillez contacter le support.",
  leads_card_roofing_labelCity: 'Lieu du chantier',
  leads_card_roofing_labelJobType: 'Type de toiture',
  leads_card_roofing_labelJobTypeSpecific: 'Type de pente',
  leads_card_roofing_labelRequester: 'Demandeur',
  leads_card_roofing_labelContactPreference: 'Préférence de contact',
  leads_card_contactTime_am: 'am',
  leads_card_contactTime_pm: 'pm',
  leads_card_contactTime_evening: 'soirée',
  leads_card_contactRequesterButton_byEmail: 'Envoyer un courriel',
  leads_card_contactRequesterButton_bySMS: 'Envoyer un SMS',
  leads_card_contactRequesterButton_byPhone: 'Appeler {phoneNumber}',
  leads_card_contactRequesterContactWhenAvailable:
    'Communiquez avec le demandeur selon ses préférences de contact.',
  leads_card_contactInfos_title: 'Informations de contact',
  lead_single_page_title: 'En cours - ',
  opportunity_empty_section_title: "Pas d'opportunité en attente",
  opportunity_empty_section_text:
    "Ceci est la page qui liste les opportunités qui vous ont été assignées. Si l'opportunité est encore disponible, vous pourrez la voir affichée ici.",
  lead_empty_section_title: 'Pas d’opportunité en cours',
  lead_empty_section_text:
    'Ceci est la page qui liste les opportunités que vous avez accepté. Vous pourrez voir les informations de vos demandeurs et les contacter selon leurs préférences de contact.',
  lead_call_ongoing_modal_title: 'Nous vous appelerons très bientôt',
  lead_call_ongoing_modal_text:
    'Un appel provenant de {number} vous a été envoyé. Cet appel sera redirigé au contact désiré. Veuillez garder la ligne.',
  account_sideMenu_myCompany: 'Mon entreprise',
  account_sideMenu_myAccount: 'Mon compte',
  account_sideMenu_paymentMethod: 'Méthode de paiement',
  account_sideMenu_billing: 'Facturation',
  account_sideMenu_addresses: 'Adresses',
  account_sideMenu_employees: 'Employés',
  account_paymentMethod_title: 'Méthode de paiement',
  account_paymentMethod_card_number: 'Numéro de la carte',
  account_paymentMethod_card_exp: 'MM/AA',
  account_paymentMethod_form_title: 'Ajouter un carte de crédit',
  account_paymentMethod_form_cardTitle:
    '{savedCards, plural, =0 {0 Cartes enregistrées} one {1 Carte enregistrée} other {{savedCards} Cartes enregistrées} }',
  account_paymentMethod_form_submitButton: 'Ajouter cette carte',
  account_paymentMethod_form_notice_cardAdded_title:
    'Une nouvelle carte a été ajoutée',
  account_paymentMethod_form_notice_cardAdded_text:
    'La carte {brand} **** **** **** {last4} {exp} a été ajoutée avec succès',
  account_paymentMethod_source_card_default: '(Méthode par défaut)',
  account_paymentMethod_source_delete_card: 'Supprimer cette carte',
  account_paymentMethod_source_make_default_card: 'Utiliser par défaut',
  account_paymentMethod_source_detach_notice_title:
    'Méthode de paiment supprimée',
  account_paymentMethod_source_detach_notice_text:
    'La méthode de paiment a été supprimée avec succès.',
  account_paymentMethod_source_make_default_notice_title:
    'Méthode de paiement par défaut changée',
  account_paymentMethod_source_make_default_notice_text:
    'La méthode de paiment par défaut a été changée avec succès',
  account_addressesForm_title: "Adresse de l'entreprise",
  account_addressesForm_addressRange_title: "Rayon de l'adresse",
  account_addressesForm_addressRange_label: "Rayon d'activité en km",
  account_addressesForm_addressFound: 'Adresse trouvée',
  account_addressesForm_submitButton: 'Ajouter cette adresse',
  account_addressesForm_addressesLimitReached:
    "Vous avez atteint la limite d'adresses que vous pouvez entrer. Si vous avez besoin d'ajouter d'autres adresses, veuillez contacter le support.",
  account_addressesForm_notice_success_title:
    'Une nouvelle adresse a été ajoutée',
  account_addressesForm_notice_success_text:
    "L'adresse a été ajoutée avec succès.",
  account_addressesForm_form_cardTitle:
    '{savedAddresses, plural, =0 {0 Adresses} one {Adresse} other {{savedAddresses} Adresses} }',
  account_addresses_card_assignedTo: 'Assignée à: ',
  account_addresses_card_addressRange_label: '{radius}km de service',
  account_addresses_card_deleteButton: 'Supprimer cette adresse',
  account_addresses_card_notice_delete_title: "L'adresse a été supprimée",
  account_addresses_card_notice_delete_text:
    "L'adresse a été supprimée avec succès.",
  account_employeesForm_title: 'Ajouter un employé',
  account_employeesForm_contactInfos_title: 'Informations contact',
  account_employeesForm_accountInfos_title: 'Informations du compte',
  account_employeesForm_submitButton: 'Ajouter cet employé',
  account_employeesForm_label_firstName: 'Prénom',
  account_employeesForm_label_lastName: 'Nom de famille',
  account_employeesForm_label_tel: 'Numéro de téléphone mobile',
  account_employeesForm_label_email: 'Courriel',
  account_employeesForm_label_password: 'Mot de passe',
  account_employeesForm_label_passwordConfirmation:
    'Confirmation du mot de passe',
  account_employeeForm_notice_success_title: "L'employé a été ajouté",
  account_employeeForm_notice_success_text:
    "L'employé a été ajouté dans votre entreprise avec succès.",
  account_employeesDisplay_card_activeForRoofing: 'Actif',
  account_employeesDisplay_card_deleteButton: "Supprimer l'employé",
  account_employeesDisplay_card_revokeAdminButton: 'Définir comme employé',
  account_employeesDisplay_card_promoteAdminButton:
    'Définir comme administrateur',
  account_employeesDisplay_card_promoteOwnerButton:
    'Définir comme propriétaire',
  account_employeesDisplay_card_isAdmin: 'Administrateur',
  account_employeesDisplay_card_isOwner: 'Propriétaire',
  account_employeesDisplay_card_isEmployee: 'Employé',
  account_employeesDisplay_card_subscribedAt: 'Inscrit',
  account_employeesDisplay_card_notice_delete_title:
    "L'employé a bien supprimé",
  account_employeesDisplay_card_notice_delete_text:
    '{firstName} {lastName} ({email}) a été supprimé de votre entreprise avec succès.',
  account_employeesDisplay_card_notice_setAsAdmin_title:
    "L'employé est maintenant administrateur",
  account_employeesDisplay_card_notice_setAsAdmin_text:
    '{firstName} {lastName} est maintenant un administrateur dans votre entreprise.',
  account_employeesDisplay_card_notice_revokeAsAdmin_title:
    "L'administrateur est maintenant employé",
  account_employeesDisplay_card_notice_revokeAsAdmin_text:
    "{firstName} {lastName} n'est plus administrateur dans votre entreprise.",
  account_employeesDisplay_card_notice_setAsOwner_title:
    "L'administrateur est maintenant propriétaire",
  account_employeesDisplay_card_notice_setAsOwner_text:
    "{firstName} {lastName} est maintenant le propriétaire du compte de l'entreprise.",
  account_myCompanyForm_title: 'Mon entreprise',
  account_myCompanyForm_infosTitle: 'Informations de contact',
  account_myCompanyForm_legalTitle: 'Informations légales',
  account_myCompanyForm_legalText:
    'Vous devez contacter le support pour changer ces informations.',
  account_myCompanyForm_submitButton: 'Sauvegarder les informations',
  account_myCompanyForm_labelName: "Nom de l'entreprise",
  account_myCompanyForm_labelCompanyEmail: 'Courriel de contact',
  account_myCompanyForm_labelCompanyPhone: 'Numéro de téléphone mobile',
  account_myCompanyForm_labelActiveForRoofing: 'Vous êtes DISPONIBLE',
  account_myCompanyForm_labelInactiveForRoofing: 'Vous êtes INDISPONIBLE',
  account_activeForRoofingOn_notice_success_title: 'Statut: Disponible',
  account_activeForRoofingOn_notice_success_text:
    'Vous avez mis à jour le statut de votre compagnie pour disponible',
  account_activeForRoofingOff_notice_success_title: 'Statut: Indisponible',
  account_activeForRoofingOff_notice_success_text:
    'Vous avez mis à jour le statut de votre compagnie pour indisponible',
  account_myCompanyForm_notice_success_title:
    "Les informations de l'entreprise ont été mise à jour",
  account_myCompanyForm_notice_success_text:
    'La mise à jour des informations a été effectué avec succès.',
  account_myCompanyForm_notice_success_title_en:
    'The company information has been updated',
  account_myCompanyForm_notice_success_text_en:
    'The information update has been successfully completed.',
  account_myAccountForm_title: 'Mon compte',
  account_myAccountForm_signInInfosTitle: 'Informations de connexion',
  account_myAccountForm_changePasswordTitle: 'Modifier votre mot de passe',
  account_myAccountForm_labelEmail: 'Courriel',
  account_myAccountForm_labelOldPassword: 'Ancien mot de passe',
  account_myAccountForm_labelNewPassword: 'Nouveau mot de passe',
  account_myAccountForm_labelNewPasswordConfirmation:
    'Confirmation du mot de passe',
  account_myAccountForm_signInInfos_notice_success_title:
    'Votre mot de passe a été mis à jour',
  account_myAccountForm_signInInfos_notice_success_text:
    "Vous pouvez maintenant vous connecter à l'aide du nouveau mot de passe.",
  account_myAccountForm_signInInfos_notice_wrongPassword_title:
    "L'ancien mot de passe n'est pas valide",
  account_myAccountForm_signInInfos_notice_wrongPassword_text:
    'Veuillez indiquer votre ancien mot de passe pour pouvoir procéder au changement.',
  account_myAccountForm_changePassword_submitButton: 'Changer mon mot de passe',
  account_myAccountForm_personalInfosTitle: 'Informations personnelles',
  account_myAccountForm_settingsTitle: 'Paramètres de communication',
  account_myAccountForm_labelFirstName: 'Prénom',
  account_myAccountForm_labelLastName: 'Nom de famille',
  account_myAccountForm_labelPhone: 'Numéro de téléphone mobile',
  account_myAccountForm_labelLocale: 'Langue préférée',
  account_myAccountForm_changePersonalInfos_submitButton: 'Sauvegarder',
  account_myAccountForm_personalInfos_notice_success_title:
    'Vos informations personnelles ont été changées',
  account_myAccountForm_personalInfos_notice_success_text:
    'Les informations de votre profil ont été mises à jour avec succès.',
  account_billing_title: 'Facturation',
  account_billing_table_th_opportunity_id: 'Opportunité',
  account_billing_table_th_service: 'Service',
  account_billing_table_th_requester: 'Demandeur',
  account_billing_table_th_card: 'Carte',
  account_billing_table_th_amount: 'Montant',
  account_billing_table_th_date: 'Date',
  labelJobType_asphalt_shingle: "Bardeau d'asphalte",
  labelJobType_asphalt_and_gravel: 'Asphalte et gravier',
  labelJobType_elastomeric: 'Membrane élastomère',
  labelJobType_sheet_metal: 'Toiture de tôle',
  labelJobType_tpo: 'TPO',
  labelJobType_epdm: 'EPDM',
  labelJobType_other: 'Autre',
  labelJobTypeSpecific_flat: 'Plat',
  labelJobTypeSpecific_low_slope: 'Pente douce',
  labelJobTypeSpecific_high_slope: 'Toît à pic',
  labelJobTypeSpecific_mansard: 'Mansardé',
  labelJobTypeSpecific_other: 'Autre',
  button_back: 'Retour',
  button_404_back_homepage: "Retour à l'acceuil",
  message_404: 'Il semblerait que cette page n’existe pas.',
  title_404: '404: Non trouvée',
  validationValidEmail: 'Une adresse valide est requise',
  validationFieldPostalCode: 'Un code postal valide est requis',
  validationValidPhoneNumber: 'Un numéro de téléphone valide est requis',
  validationFieldIsRequired: 'Ce champs est requis',
  validationFieldMinLength2: 'Doit contenir 2 charactères ou plus',
  validationFieldMinLength8: 'Doit contenir 8 charactères ou plus',
  validationFieldMaxLength50: 'Doit contenir 50 charactères ou moins',
  validationFieldMaxLength200: 'Doit contenir 200 charactères ou moins',
  validationEmailIsAlreadyUsed: 'Ce courriel est déjà utilisé',
  validationPassword:
    'Doit contenir au moins une lettre majuscule, une lettre minuscule, et un chiffre',
  validationPasswordMustMatch: 'Doit être identique au mot de passe',
  validationRbq: 'Doit être un numéro de RBQ valide',
  validationNeq: 'Doit être un numéro de NEQ valide',
  validationTvq: 'Doit être un numéro de TVQ valide',
  validationTps: 'Doit être un numéro de TPS valide',
  validationAddressInfos:
    "Assurez-vous que le numéro civique, l'adresse, la ville et le code postal se retrouve dans l'adresse de l'entreprise",
  validationWrongPassword: 'Mot de passe invalide',
  validationMustAccept: 'Vous devez accepter les termes et conditions',
  twilio_redirection_call_message:
    "Votre appel sera acheminé sous peu, merci d'utiliser conecto!",
  metaTitle:
    'Trouvez des candidats qualifiés à la recherche de couvreurs dans votre région',
  metaDescription:
    'Conecto Entrepreneur est une plateforme de soumission qui localise des demandeurs qualifiés pour ses couvreurs certifiés du Québec.',
  metaKeywords: 'couvreur quebec, trouver client toiture, marketing toiture',
  ogSiteName: 'Conecto Entrepreneur',
  signup_tos_confirmation_modal_title: 'Contrat entrepreneur Conecto',
  signup_tos_confirmation_modal_scroll_info:
    'Clique ici pour indiquer que tu as lu et accepté nos conditions',
  signup_tos_confirmation_modal_submit_btn:
    "J'ai lu et j'accepte les conditions",
  signup_tos_confirmation_modal_text: `
    <h3>ACCORD DE SERVICE GÉNÉRAL</h3>
    <p>CET ACCORD DE SERVICE GÉNÉRAL («L'ACCORD») EN DATE DU {day_date} JOUR DE {month_date_uppercase}, {year_date}</p>
    <p>ENTRE:</p>
    <p>
        {companyName}<br />
        {companyAddress}<br />
        (L' "ENTREPENEUR")
    </p>
    <p>
        11085573 CANADA INC.<br />
        Conecto.ca<br />
        307-460 de la Couronne, St-Roch, Québec, G1K6G2<br />
        (LA “PLATEFORME”)
        </p>
    <h3>Contexte</h3>
    <ul style="list-style-type: lower-latin;">
        <li>La Plateforme est d'avis que *companyName* possède les qualifications, l'expérience et les capacités nécessaires pour fournir des services à Conecto.</li>
        <li>La Plateforme accepte de fournir des services à l’Entrepreneur selon les termes et conditions énoncés dans le présent Contrat.</li>
    </ul>
    <p>EN CONSIDÉRANT le contexte ci-dessus et les avantages et obligations mutuels énoncés dans le présent Accord, dont la reconnaissance et le respect de la contrepartie sont reconnus du présent accord) conviennent de ce qui suit:</p>
    <h3>Services fournis</h3>
    <p>L’Entrepreneur accepte par la présente d’engager La Plateforme à fournir à l’Entrepreneur les services suivants (les ""Services""). Les Services comprendront également toute autre tâche sur laquelle les Parties pourraient s’accorder. La Plateforme accepte par la présente de fournir ces Services à l’Entrepreneur.</p>
    <h3>Devise</h3>
    <p>Sauf indication contraire dans la présente convention, tous les montants en argent mentionnés dans la présente convention sont en dollars canadiens ($CAD).</p>
    <h3>Durée de l'accord</h3>
    <p>La durée de la présente convention (la "durée") commencera à la date de la présente convention et restera en vigueur jusqu'à la réalisation des services, sous réserve d'une résiliation anticipée, comme prévu dans la présente convention. La durée peut être prolongée avec le consentement écrit des parties.</p>
    <h3>Performance</h3>
    <p>Les parties conviennent de faire tout ce qui est nécessaire pour que les conditions du présent accord entrent en vigueur.</p>
    <h3>Compensation</h3>
    <p>La Plateforme facturera à l’Entrepreneur un montant de 55$ pour les Services (la Rémunération). L’Entrepreneur sera facturé uniquement lorsque qu’il accepte une opportunité. L'indemnisation telle que stipulée dans le présent Contrat n'inclut pas la taxe de vente ni les autres obligations applicables prévues par la loi. Les taxes de vente et les taxes requises par la loi seront facturées à l’Entrepreneur en plus de la Rémunération.</p>
    <h3>Confidentialité</h3>
    <p>Les informations confidentielles (les «informations confidentielles») désignent toute donnée ou information relative aux activités de l'Entrepreneur qui pourrait raisonnablement être considérée comme étant la propriété de la Plateforme y compris, sans toutefois s'y limiter, les documents comptables, les processus opérationnels, les enregistrements et qui n'est pas généralement connu dans le secteur de l'Entrepreneur et où la publication de ces Informations confidentielles pourrait raisonnablement causer un préjudice à la Plateforme. L’Entrepreneur accepte de ne pas divulguer d’aucune manière, signaler ou utiliser à quelque fin que ce soit les informations confidentielles obtenues par la Plateforme, sauf avec l'autorisation de la Plateforme, ou si la loi l'exige. Les obligations de confidentialité s'appliqueront pendant la durée et subsisteront indéfiniment à la résiliation du présent contrat.</p>
    <p>Toutes les informations écrites et orales ainsi que le matériel divulgué ou fourni par La Plateforme à l’Entrepreneur en vertu du présent Contrat constituent des Informations confidentielles, qu’elles aient été fournies avant ou après la date du présent Contrat ou de la manière dont elles ont été fournies à l’Entrepreneur par La Plateforme.</p>
    <h3>Propriété intellectuelle</h3>
    <p>Toute la propriété intellectuelle et le matériel connexe (la "propriété intellectuelle") développés ou produits dans le cadre du présent Contrat seront la propriété de la Plateforme. L’Entrepreneur se voit attribuer une licence non-exclusive à usage limité de cette propriété intellectuelle. Le titre, les droits d'auteur, les droits de propriété intellectuelle et les droits de distribution de la propriété intellectuelle restent la propriété exclusive de La Plateforme.</p>
    <h3>Capacité / Entrepreneur indépendant</h3>
    <p>En fournissant les services dans le cadre du présent contrat, il est expressément convenu que L’Entrepreneur agit en tant qu’indépendant et non en tant qu'employé. La Plateforme et l’Entrepreneur reconnaissent que le présent Contrat ne crée pas de partenariat ou d’entreprise commune entre eux et constitue exclusivement un contrat de service.</p>
    <h3>Modification de l'accord</h3>
    <p>Toute modification ou tout amendement du présent accord ou toute obligation supplémentaire assumée par l'une ou l'autre des parties dans le cadre de cet accord ne sera contraignant que s'il est prouvé par écrit par chaque partie ou un représentant autorisé de chaque partie.</p>
    <h3>Affectation</h3>
    <p>La Plateforme ne cédera ni ne transférera de quelque manière que ce soit ses obligations en vertu du présent Contrat sans le consentement écrit préalable.</p>
    <h3>Le sexe</h3>
    <p>Les mots au singulier signifient et incluent le pluriel et vice versa. Les mots au masculin signifient et incluent le féminin et vice versa.</p>
    <h3>Loi applicable</h3>
    <p>Cet accord sera régi et interprété conformément aux lois de la province de Québec.</p>
    <h3>Divisibilité</h3>
    <p>Si l'une des dispositions du présent contrat est jugée invalide ou inexécutable en tout ou en partie, toutes les autres dispositions resteront néanmoins valides et applicables, les parties invalides ou non exécutables étant séparées du reste du présent contrat.</p>
    <br />
    <p>EN FOI DE QUOI, j'accepte le présent Accord le {day_date} jour de {month_date}, {year_date}</p>
  `,
})

module.exports = messages
