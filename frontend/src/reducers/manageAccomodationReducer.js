import {
  CHANGE_MY_ACCOMODATION_FIELDS,
  CHANGE_MY_ACCOMODATION_SWITCHS,
  CHANGE_EXTRAS_OR_SERVICES,
  CHANGE_MY_ACCOMODATION_TYPE,
  SAVE_MY_ACCOMODATIONS,
  SET_EDIT_MY_ACCOMODATION_INFOS,
  RESET_MY_ACCOMODATION_INFOS,
} from 'src/actions/manageAccomodation';
import { SAVE_SERVICES, SAVE_EXTRAS } from 'src/actions/accomodation';
import { SET_MANAGE_ACCOMODATION_PANEL } from 'src/actions/utils';
import {
  getCheckedItemsForServicesAndExtras,
  getCurrentAccomodation,
  getServices,
  getExtras,
} from 'src/utils';

const initialState = {
  title: '',
  capacity: 0,
  nbNights: 0,
  surface: 0,
  price: 0,
  type: -1,
  city: '',
  country: '',
  adress: '',
  facebook: '',
  instagram: '',
  description: '',
  pipedWater: false,
  electricity: false,
  accessibility: false,
  smokers: false,
  animals: false,
  allServices: [],
  allExtras: [],
  services: [],
  extras: [],
  panelIdentifier: '',
  panelContent: [],
  panelCheckedItems: [],
  myAccomodations: [
    {
      id: 1,
      pictures: [
        `${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/Igloo.jpg`,
        `${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/Igloo.jpeg`,
      ],
      title: 'Tente tout confort',
      capacity: 3,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque maxime accusantium culpa, autem a eligendi doloremque iure iusto voluptate at, expedita labore veritatis qui? Provident doloremque sed sint, asperiores facilis tempora sapiente deleniti quas illum ad recusandae praesentium sequi nemo aperiam ullam debitis. Neque nobis accusantium quo dolore in temporibus ut, amet enim eaque necessitatibus natus placeat, provident sunt perspiciatis illo sapiente aspernatur veniam porro aliquam dolorem id laudantium! Vel perferendis nihil nulla quas impedit et nostrum itaque dolorem atque iste, assumenda nesciunt deleniti dolorum libero voluptatibus sit. Ex amet, nulla quo blanditiis ad voluptas ut, pariatur ullam nihil soluta error corporis illo voluptates atque alias consequatur ea, et fugiat ipsum nobis fuga? Eveniet magni cum tempore distinctio? Labore omnis tempora nisi mollitia eum eveniet? Dolore provident nihil beatae sequi quas ipsam at dolorem mollitia dignissimos ratione, ea nisi! Eos id vitae velit, hic eum quo sed nesciunt doloribus! Sed consectetur magnam deleniti architecto quod tempora possimus, quam saepe unde reiciendis eius vero id exercitationem molestias tempore amet beatae optio consequuntur vel dolore porro incidunt hic, doloribus recusandae. Repellendus ea consequuntur veritatis voluptatibus at, cumque error minima id delectus asperiores quaerat illo quos sint atque ab? Distinctio, dolorem rerum. Ex, sit nihil harum asperiores necessitatibus consequatur eligendi molestiae vero officia facere impedit veniam, explicabo expedita. Ab quaerat nostrum fugiat harum magnam ea. Aspernatur tempora nobis quae aliquam asperiores maiores reprehenderit ipsam vitae, saepe error rerum, voluptatem veritatis! Tempore, dolor. Reprehenderit maxime architecto cumque quas. Facere, saepe cum iusto similique nobis praesentium porro maiores alias repellat possimus maxime enim nihil unde at aperiam dolorem debitis eligendi corporis inventore voluptatem minima. Dicta quibusdam necessitatibus at perspiciatis, qui possimus voluptas eum velit rem earum asperiores culpa quae, deleniti quos sed molestias? Suscipit deleniti voluptatem, modi at sunt asperiores architecto repudiandae eligendi exercitationem amet, doloribus officia atque dignissimos. Autem labore beatae distinctio eum amet atque voluptates dolores hic minus quo ipsum eligendi natus velit, cumque quibusdam aliquam voluptas. Architecto est aliquid iusto vero. Illum odit esse omnis molestiae eaque labore. Modi, quaerat! Commodi dolorem fugit facilis ullam et voluptas possimus temporibus eos tenetur minima. Ipsam nisi recusandae laborum quisquam excepturi, dolorem totam officia doloremque ratione vitae, eligendi quia. Unde dolores doloremque cupiditate eos, provident vero, minus rem aperiam enim error quos modi. Provident odio voluptatem, similique in libero maxime perspiciatis cupiditate culpa explicabo, a eaque perferendis. Veritatis eius, tempore sit suscipit repudiandae libero reprehenderit iure tenetur aut! Deserunt harum architecto eligendi nisi dignissimos rerum, dicta, saepe voluptatibus eum vero et sapiente quia ratione iure, accusantium laboriosam illum earum neque a ipsum repudiandae facilis. Harum asperiores possimus soluta voluptate blanditiis adipisci, iusto cum, amet ratione nesciunt tempore. Quibusdam voluptatibus doloribus, veritatis atque laboriosam perferendis sunt recusandae asperiores libero ea suscipit quia aliquam. Tempora, ducimus praesentium nobis commodi dolorum neque earum mollitia illo excepturi quisquam hic culpa magni explicabo reiciendis dicta. Iusto minima autem asperiores harum quod, explicabo ab porro itaque libero dolore, iste veniam consequuntur rerum possimus incidunt! Veniam nemo ea, atque blanditiis dolorem nobis.',
      city: 'Toulouse',
      country: 'France',
      adress: '7Bd. Jean Jaures',
      price: 50,
      nbNights: 3,
      type: 3,
      surface: 20,
      electricity: true,
      pipedWater: true,
      accessibility: true,
      smokers: true,
      animals: true,
      facebookLink: 'https://facebook.com',
      instagramLink: 'https://instagram.com',
      services: [2, 0, 4],
      extras: [0, 1, 2, 3, 4, 5],
      user: {
        id: 1,
        avatar: 'Igloo.jpeg',
        pseudo: 'Jean-Mich\'',
      },
    },
  ],
};

const manageAccomodationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERVICES:
      return {
        ...state,
        allServices: action.services,
      };
    case SAVE_EXTRAS:
      return {
        ...state,
        allExtras: action.extras,
      };
    case CHANGE_MY_ACCOMODATION_FIELDS:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case CHANGE_MY_ACCOMODATION_SWITCHS:
      return {
        ...state,
        [action.identifier]: !state[action.identifier],
      };
    case SET_MANAGE_ACCOMODATION_PANEL:
      return {
        ...state,
        panelContent: action.content,
        panelCheckedItems: state[action.identifier],
        panelIdentifier: action.identifier,
      };
    case CHANGE_EXTRAS_OR_SERVICES:
      return {
        ...state,
        [action.identifier]: getCheckedItemsForServicesAndExtras(state[action.identifier], action.item, action.checked),
        panelCheckedItems: getCheckedItemsForServicesAndExtras(state[action.identifier], action.item, action.checked),
      };
    case CHANGE_MY_ACCOMODATION_TYPE:
      return {
        ...state,
        type: action.newValue,
      };
    case SAVE_MY_ACCOMODATIONS:
      return {
        ...state,
        myAccomodations: [...state.myAccomodations, { ...action.data }],
      };
    case SET_EDIT_MY_ACCOMODATION_INFOS: {
      const currentAccomodation = getCurrentAccomodation(state.myAccomodations, action.id);
      const {
        title,
        type,
        capacity,
        nbNights,
        surface,
        price,
        city,
        country,
        adress,
        facebookLink,
        instagramLink,
        pipedWater,
        electricity,
        accessibility,
        smokers,
        animals,
        description,
        services,
        extras,
      } = currentAccomodation;
      return {
        ...state,
        title,
        type,
        capacity,
        nbNights,
        surface,
        price,
        city,
        country,
        adress,
        facebook: facebookLink,
        instagram: instagramLink,
        pipedWater,
        electricity,
        accessibility,
        smokers,
        animals,
        description,
        services: getServices(state.allServices, services),
        extras: getServices(state.allExtras, extras),
      };
    }
    case RESET_MY_ACCOMODATION_INFOS:
      return {
        ...state,
        title: '',
        type: -1,
        capacity: 0,
        nbNights: 0,
        surface: 0,
        price: 0,
        city: '',
        country: '',
        adress: '',
        facebook: '',
        instagram: '',
        pipedWater: false,
        electricity: false,
        accessibility: false,
        smokers: false,
        animals: false,
        description: '',
        services: [],
        extras: [],
      }
    default: return state;
  }
};

export default manageAccomodationReducer;
