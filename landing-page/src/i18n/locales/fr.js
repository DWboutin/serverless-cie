const frLocaleData = require('react-intl/locale-data/fr')
const intl = require('react-intl')
const defineMessages = intl.defineMessages
const addLocaleData = intl.addLocaleData

addLocaleData(frLocaleData)

const messages = defineMessages({
  lang_fr: 'Fr',
  lang_en: 'En',
  roofing: 'Toiture',
  howItWorks: 'Fonctionnement',
  roofingTypes: 'Types de toitures',
  madeWithConecto: 'Réalisé avec Conecto',
  termsOfService: 'Condtions d\'utilisation',
  menu: 'Menu',
  contractor: 'Entrepreneur',
  contractors: 'Entrepreneurs',
  weNeedContractors:
    'Nous sommes toujours à la recherche de nouveaux entrepreneurs',
  pageTitle: 'À la recherche d\'un couvreur ?',
  checkpoint1: "Fais ta demande de devis en ligne. C'est gratuit et rapide!",
  checkpoint2: "Obtiens jusqu'à 4 offres d'entrepreneurs locaux",
  checkpoint3: 'Compare les soumissions, puis fais ton choix',
  submitYourProject: 'Soumettez votre projet',
  step1: 'Étape 1',
  step2: 'Étape 2',
  minLength2: '2 charactères ou plus requis',
  maxLength50: '50 charactères ou moins requis',
  maxLength200: '200 charactères ou moins requis',
  isRequired: 'Requis',
  mustChooseOne: '1 choix est requis',
  mustBeValid: 'Must be valid',
  mustChooseAddress: 'Sélectionnez l\'adresse dans la liste',
  labelFirstName: 'Prénom',
  labelLastName: 'Nom de famille',
  labelEmail: 'Adresse courriel',
  labelPhone: 'Téléphone',
  labelContactMethod: 'Méthode de contact',
  labelContactMethodEmail: 'courriel',
  labelContactMethodSMS: 'sms',
  labelContactMethodPhone: 'téléphone',
  labelContactPreference: 'Préférence de contact',
  labelContactPreferenceAM: 'am',
  labelContactPreferencePM: 'pm',
  labelContactPreferenceEvening: 'soirée',
  labelCity: 'Ville',
  labelNumber: 'Numéro civil',
  labelPostalCode: 'Code postal',
  labelAddress: 'Adresse complète',
  labelStreetAddress: 'Addresse',
  buttonNextStep: 'Étape suivante',
  labelCompleteAddress: 'Adresse complète',
  labelJobType: 'Type de toît',
  labelJobTypeSpecific: 'Type de pente',
  labelJobType_asphalt_shingle: 'Bardeau d\'asphalte',
  labelJobType_asphalt_and_gravel: 'Asphalte et gravier',
  labelJobType_elastomeric: 'Membrane élastomère',
  labelJobType_sheet_metal: 'Toiture de tôle',
  labelJobType_tpo: 'TPO',
  labelJobType_epdm: 'EPDM',
  labelJobType_other: 'Autre (préciser dans description des travaux)',
  labelJobTypeSpecific_flat: 'Plat',
  labelJobTypeSpecific_low_slope: 'Pente douce',
  labelJobTypeSpecific_high_slope: 'Toît à pic',
  labelJobTypeSpecific_mansard: 'Mansardé',
  labelJobTypeSpecific_other: 'Autre (préciser dans description des travaux)',
  labelJobInfo: 'Description des travaux',
  labelMailing:
    "J'accepte de m'inscrire à l'infolettre",
  labelConditions:
    "J'accepte les conditions d\'utilisation",
  textConditions:
    "Cliquez ici pour lire les conditions d'utilisation",
  buttonObtainQuotes: 'Obtenez des soumissions',
  buttonSavePreferences: 'Enregistrer les préférences',
  contactPreferenceUpdatedTitle: 'Préférences de contact',
  contactPreferenceUpdatedMessage: 'Tes préférences ont été enregistrées dans ta demande',
  howItWorksCard1_title: 'Remplis ta demande',
  howItWorksCard1_text:
    "Le questionnaire prend moins d'une minute à compléter. Ensuite, notre équipe te contacte rapidement afin de valider tes informations. Enfin, nous nous mettons à la recherche des meilleurs couvreurs dans ta région.",
  howItWorksCard2_title: 'Rencontre les entrepreneurs',
  howItWorksCard2_text:
    "Dès que ta demande est confirmée et soumise, 4 entreprises entreront en contact avec toi afin de planifier l'inspection de ta propriété. Après leur visite, ils te feront parvenir une soumission détaillée selon TES besoins.",
  howItWorksCard3_title: 'Choisis ton couvreur',
  howItWorksCard3_text:
    "Après avoir reçu les soumissions, il est temps de faire ton choix. Nous sommes disponibles pour t'éclairer dans ton choix de couvreur pour assurer ta satisfaction.",
  ctaSection_title: "Reçois jusqu'à 4 soumissions dès maintenant",
  ctaSection_text: 'Gratuit, facile et sans obligation',
  ctaSection_button: 'Demande une soumission',
  advantagesSection_panel1_title: 'Avantages client',
  advantagesSection_panel1_content_title:
    'Plus facile que jamais de trouver un bon couvreur!',
  advantagesSection_panel1_content_text:
    'Conecto se charge de dénicher des spécialistes dans ta région',
  advantagesSection_panel1_content_checkpoint1:
    "Reçois jusqu'à 4 soumissions différentes",
  advantagesSection_panel1_content_checkpoint2: 'Gratuit. Aucun compte requis',
  advantagesSection_panel1_content_checkpoint3:
    'On te notifie par courriel ou texto',
  advantagesSection_panel1_content_checkpoint4:
    "Notre équipe t'accompagne dans toutes les étapes",
  advantagesSection_panel1_phone_title:
    'Nous avons bien reçu ta demande de projet',
  advantagesSection_panel1_phone_text:
    'Un de nos agents te contactera sous peu pour confirmer ta demande et valider tes informations',
  advantagesSection_panel2_title: 'Avantages entrepreneur',
  advantagesSection_panel2_content_title:
    'Gèrez les demandes en toute simplicité',
  advantagesSection_panel2_content_text:
    'Conecto se charge de vous mettre en contact avec des clients potentiels dans votre région',
  advantagesSection_panel2_content_checkpoint1:
    'Analysez les requêtes des demandeurs',
  advantagesSection_panel2_content_checkpoint2: 'Envoyez votre soumission',
  advantagesSection_panel2_content_checkpoint3:
    "Suivez l'évolution des demandes en temps réel",
  advantagesSection_panel2_content_checkpoint4:
    'Évitez les temps morts et profitez de notre support',
  advantagesSection_panel2_phone_title:
    'Votre entreprise a été validée avec succès',
  advantagesSection_panel2_phone_text:
    'Bienvenue sur Conecto! Pour commencer à recevoir des demandes, veuillez mettre à jour vos disponibilités dans votre tableau de bord.',
  materialsSection_title: 'Les matériaux les plus utilisés par les couvreurs',
  materialsSection_material1_title: "Bardeau d'asphalte",
  materialsSection_material1_text:
    "Le bardeau d'asphalte est le matériel le plus utilisé au Québec, soit près de 75% des toitures. Il est composé de trois couches : de la fibre de verre ou du papier recyclé, de l'asphalte et des granules superposées. Le tout est posé sur une sous-couche en feutre. Ce matériel s'améliore constamment, au fil des innovations. Sa nouvelle composition synthétique durable offre  des garanties pouvant aller jusqu'à 50 ans.",
  materialsSection_material2_title: 'Membrane élastomère',
  materialsSection_material2_text:
    "Principalement utilisée sur les toitures plates des bâtiments commerciaux, les toitures de membrane élastomère de type bi-couche offrent une durée de vie pouvant aller jusqu'à 35 ans. La membrane est composée de deux couches fusionnées de bitume, dont la dernière est formée de grains fins de céramique. Le coût de ces toitures est souvent plus élevé, étant donné leur coût d'assurance élevé, mais son entretien est facile et sa qualité uniforme.",
  madeWithConecto_text:
    "Que ce soit pour un projet résidentiel ou commercial, nos couvreurs seront en mesure d'effectuer les travaux à la hauteur de vos attentes.",
  footerSections_title: 'Sections',
  footerSections_legal: 'Légal',
  footerContact_title: 'Contact',
  request_confirmation_modal_title: 'Ta demande est entrée avec succès',
  request_confirmation_modal_text:
    'Un appel de confirmation te sera envoyé sous peu.',
  copyright:
    'St-Roch, Québec Canada<br />2019, Tous droits réservés &copy;Conecto',
  validationAddressInfos:
    "Assurez-vous que le numéro civique, l'adresse, et la ville se retrouve dans l'adresse",
  metaTitle: "Obtenez des soumissions pour votre toit gratuitement",
  metaDescription: "Remplissez la demande de soumission et entrez en contact avec jusqu'à 4 entrepreneurs couvreurs certifiés de votre région",
  metaKeywords: 'toiture, conecto, devis de toit, toit quebec, bardeaux, devis, soumission, soumission toiture, toit en metal, membrane élastomère',
  ogSiteName: 'Conecto Toiture',
  request_tos_confirmation_modal_title: 'Contrat client Conecto',
  request_tos_confirmation_modal_scroll_info: 'Clique ici pour indiquer que tu as lu et accepté nos conditions',
  request_tos_confirmation_modal_submit_btn: 'J\'ai lu et j\'accepte les conditions',
  request_tos_confirmation_modal_text: `
    <p>En vertu de ce contrat de licence utilisateur final (le "Contrat"), VendorName (le "Fournisseur") accorde à l'utilisateur (le "Licencié") une licence non exclusive et non transférable (la "Licence") lui permettant d'utiliser Conecto de soumission (le "Logiciel").</p>
    <p>Le terme "Logiciel" comprend les programmes informatiques exécutables, ainsi que toute documentation imprimée, électronique et en ligne associée, ainsi que tout autre fichier pouvant accompagner le produit.</p>
    <p>Le titre, les droits d'auteur, les droits de propriété intellectuelle et les droits de distribution du logiciel restent la propriété exclusive du vendeur. Les droits de propriété intellectuelle incluent l'aspect et la convivialité du Logiciel. Le présent contrat constitue une licence d'utilisation uniquement et ne constitue en aucun cas un transfert des droits de propriété sur le logiciel.</p>
    <p>Les droits et obligations de cet accord sont des droits personnels accordés au licencié uniquement. Le titulaire de la licence ne peut transférer ou céder aucun des droits ou obligations accordés en vertu du présent contrat à une autre personne physique ou morale. Le Licencié ne peut mettre à disposition le Logiciel pour un ou plusieurs tiers.</p>
    <p>Le Logiciel ne peut être modifié, désossé, ni décompilé de quelque manière que ce soit au moyen des technologies disponibles actuelles ou futures.</p>
    <p>Le non-respect de l'une des conditions de la section Licence sera considéré comme une violation substantielle du présent contrat.</p>
    <h3>Droit de license</h3>
    <p>Le prix d'achat initial payé par le preneur de licence constituera la totalité des frais de licence et constituera la contrepartie totale du présent contrat.</p>
    <h3>Limitation de responsabilité</h3>
    <p>Le Logiciel est fourni par le fournisseur et accepté par le licencié "tel quel". La responsabilité du Vendeur sera limitée au maximum du prix d'achat initial du Logiciel. Le Vendeur ne sera pas responsable des dommages généraux, spéciaux, consécutifs ou indirects, notamment des pertes de production, des pertes de bénéfices, des revenus, des données, tout autre désavantage commercial ou économique subi par le titulaire découlant de l'utilisation ou de la non-utilisation du Logiciel.</p>
    <p>Le fournisseur ne donne aucune garantie, explicite ou implicite, quant à l'adéquation du Logiciel à un usage particulier ou à l'adéquation ou à la compatibilité du Logiciel avec les exigences spécifiques du licencié.</p>
    <p>Le fournisseur ne garantit pas que l'utilisation du Logiciel sera ininterrompue ou sans erreur. Le Licencié reconnaît que les Logiciels en général sont sujets à des bogues et des défauts d’un niveau acceptable, tel que déterminé par le secteur.</p>
    <h3>Mandats et représentations</h3>
    <p>Le Fournisseur garantit et déclare qu'il est le détenteur des droits d'auteur du Logiciel. Le Fournisseur garantit et déclare qu'accorder la Licence d'utilisation de ce Logiciel ne constitue pas une violation de tout autre Contrat, droit d'auteur ou loi applicable.</p>
    <h3>Acceptation</h3>
    <p>Tous les termes, conditions et obligations du présent Contrat seront réputés avoir été acceptés par le Licencié ("Acceptation") lors de l'enregistrement du Logiciel auprès du Fournisseur.</p>
    <h3>Terme</h3>
    <p>La durée de cet accord commencera à l'acceptation et sera perpétuelle.</p>
    <h3>Résiliation</h3>
    <p>Le présent Contrat sera résilié et la Licence sera perdue si le preneur de Licence a omis de se conformer à l’un des termes du présent Contrat ou enfreint le présent Contrat. En cas de résiliation du présent Contrat pour quelque raison que ce soit, le Licencié va rapidement détruire le Logiciel ou le renvoyer au Fournisseur.</p>
    <h3>Force majeure</h3>
    <p>Le Vendeur sera dégagé de toute responsabilité vis-à-vis du preneur de Licence s'il est empêché d'exécuter en totalité ou en partie ses obligations en vertu du présent Contrat en raison de force majeure, comme un tremblement de terre, un typhon, une inondation, un incendie, une guerre ou tout autre événement imprévu et incontrôlable. événement dans lequel le Fournisseur a pris toutes les mesures appropriées pour atténuer cet événement.</p>
    <h3>Clauses supplémentaires</h3>
    <p>Clause additionnelle 1.</p>
    <h3>Loi applicable</h3>
    <p>Les parties à la présente convention se soumettent à la juridiction des tribunaux de la province de Québec pour l'exécution de la présente convention ou de toute sentence arbitrale ou décision découlant de la présente convention. Cet accord sera appliqué ou interprété selon les lois de la province de Québec.</p>
    <h3>Divers</h3>
    <p>Cet accord ne peut être modifié que par écrit, signé par le Vendeur et le Licencié.</p>
    <p>Cet accord ne crée ni n'implique aucune relation d'agence ou de partenariat entre le Vendeur et le preneur de Licence.</p>
    <p>Les titres sont insérés pour la commodité des parties seulement et ne doivent pas être pris en compte lors de l'interprétation du présent Contrat. Les mots au singulier signifient et incluent le pluriel et vice versa. Les mots du genre masculin incluent le genre féminin et vice versa.</p>
    <p>Les mots du genre neutre incluent le genre masculin et le genre féminin et inversement.</p>
    <p>Si un tribunal compétent juge que l'une des clauses, clauses ou clauses du présent Contrat est invalide, nulle ou inapplicable, les parties ont l'intention que le tribunal réduise la portée de cette clause dans la mesure jugée nécessaire. par ce tribunal à rendre la disposition raisonnable et exécutoire et le reste des dispositions du présent Contrat ne sera en aucune manière affecté, compromis ou invalidé en conséquence.</p>
    <p>Cet accord contient l'intégralité de l'accord entre les parties. Tous les accords ont été inclus dans cet accord. Les déclarations qui pourraient avoir été faites par une partie à la présente convention peuvent être en quelque sorte incompatibles avec la présente convention écrite définitive. Toutes ces déclarations sont déclarées sans valeur dans le présent accord. Seules les conditions écrites de cet accord lieront les parties.</p>
    <p>Cet accord et les termes et conditions contenus dans cet accord s'appliquent aux successeurs et aux ayants droit du Vendeur et les lient.</p>
    <h3>Les avis</h3>
    <p>Tous les avis au Vendeur en vertu de cet accord doivent être fournis à l'adresse suivante:</p>
    <p>307-460. Rue de la Couronne, St-Roch, Québec, Canada, G1K6G2</p>
  `,
})

module.exports = messages
