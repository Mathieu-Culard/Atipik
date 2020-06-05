import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MyAccomodationCard from 'src/components/MyAccomodationsCard';
import './myAccomodationsPage.scss';

// ================fake data
const accomodation = {
  id: 1,
  pictures: [
    'Igloo.jpg',
    'Igloo.jpeg',
  ],
  title: 'Tente tout confort',
  capacity: 3,
  type: 3,
  price: 50,
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque maxime accusantium culpa, autem a eligendi doloremque iure iusto voluptate at, expedita labore veritatis qui? Provident doloremque sed sint, asperiores facilis tempora sapiente deleniti quas illum ad recusandae praesentium sequi nemo aperiam ullam debitis. Neque nobis accusantium quo dolore in temporibus ut, amet enim eaque necessitatibus natus placeat, provident sunt perspiciatis illo sapiente aspernatur veniam porro aliquam dolorem id laudantium! Vel perferendis nihil nulla quas impedit et nostrum itaque dolorem atque iste, assumenda nesciunt deleniti dolorum libero voluptatibus sit. Ex amet, nulla quo blanditiis ad voluptas ut, pariatur ullam nihil soluta error corporis illo voluptates atque alias consequatur ea, et fugiat ipsum nobis fuga? Eveniet magni cum tempore distinctio? Labore omnis tempora nisi mollitia eum eveniet? Dolore provident nihil beatae sequi quas ipsam at dolorem mollitia dignissimos ratione, ea nisi! Eos id vitae velit, hic eum quo sed nesciunt doloribus! Sed consectetur magnam deleniti architecto quod tempora possimus, quam saepe unde reiciendis eius vero id exercitationem molestias tempore amet beatae optio consequuntur vel dolore porro incidunt hic, doloribus recusandae. Repellendus ea consequuntur veritatis voluptatibus at, cumque error minima id delectus asperiores quaerat illo quos sint atque ab? Distinctio, dolorem rerum. Ex, sit nihil harum asperiores necessitatibus consequatur eligendi molestiae vero officia facere impedit veniam, explicabo expedita. Ab quaerat nostrum fugiat harum magnam ea. Aspernatur tempora nobis quae aliquam asperiores maiores reprehenderit ipsam vitae, saepe error rerum, voluptatem veritatis! Tempore, dolor. Reprehenderit maxime architecto cumque quas. Facere, saepe cum iusto similique nobis praesentium porro maiores alias repellat possimus maxime enim nihil unde at aperiam dolorem debitis eligendi corporis inventore voluptatem minima. Dicta quibusdam necessitatibus at perspiciatis, qui possimus voluptas eum velit rem earum asperiores culpa quae, deleniti quos sed molestias? Suscipit deleniti voluptatem, modi at sunt asperiores architecto repudiandae eligendi exercitationem amet, doloribus officia atque dignissimos. Autem labore beatae distinctio eum amet atque voluptates dolores hic minus quo ipsum eligendi natus velit, cumque quibusdam aliquam voluptas. Architecto est aliquid iusto vero. Illum odit esse omnis molestiae eaque labore. Modi, quaerat! Commodi dolorem fugit facilis ullam et voluptas possimus temporibus eos tenetur minima. Ipsam nisi recusandae laborum quisquam excepturi, dolorem totam officia doloremque ratione vitae, eligendi quia. Unde dolores doloremque cupiditate eos, provident vero, minus rem aperiam enim error quos modi. Provident odio voluptatem, similique in libero maxime perspiciatis cupiditate culpa explicabo, a eaque perferendis. Veritatis eius, tempore sit suscipit repudiandae libero reprehenderit iure tenetur aut! Deserunt harum architecto eligendi nisi dignissimos rerum, dicta, saepe voluptatibus eum vero et sapiente quia ratione iure, accusantium laboriosam illum earum neque a ipsum repudiandae facilis. Harum asperiores possimus soluta voluptate blanditiis adipisci, iusto cum, amet ratione nesciunt tempore. Quibusdam voluptatibus doloribus, veritatis atque laboriosam perferendis sunt recusandae asperiores libero ea suscipit quia aliquam. Tempora, ducimus praesentium nobis commodi dolorum neque earum mollitia illo excepturi quisquam hic culpa magni explicabo reiciendis dicta. Iusto minima autem asperiores harum quod, explicabo ab porro itaque libero dolore, iste veniam consequuntur rerum possimus incidunt! Veniam nemo ea, atque blanditiis dolorem nobis.',
  city: 'Toulouse',
  country: 'France',
  surface: 20,
  electricity: true,
  pipedWater: true,
  accessibility: false,
  smokers: true,
  animals: true,
  facebookLink: '',
  instagramLink: 'https://instagram.com',
  services: [2, 0, 4],
  extras: [0, 1, 2, 3, 4, 5],
  user: {
    id: 1,
    avatar: 'Igloo.jpeg',
    pseudo: 'Jean-Mich\'',
  },
};

// ================fake data
const MyAccomodationsPage = ({ fetchMyAccomodations, myAccomodationIds, myAccomodations }) => {
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    myAccomodationIds.map((id) => {
      fetchMyAccomodations(id);
    });
  }, []);
  return (
    <main className="my-accomodations">

      {myAccomodations.map((acc) => (
        <MyAccomodationCard {...acc} />
      ))}
      <MyAccomodationCard {...accomodation} />
      <MyAccomodationCard {...accomodation} />
      <MyAccomodationCard {...accomodation} />
      <Link className="my-accomodations__new-accomodation" to="/gerer-mes-hebergements/nouvel-hebergement">
        <button type="button">Ajouter un hébergement</button>
      </Link>
    </main>
  );
};

MyAccomodationsPage.propTypes = {

};

export default MyAccomodationsPage;
