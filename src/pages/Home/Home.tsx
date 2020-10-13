import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Logo from '../../static/images/logo.svg';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../utils/enums/internal-routes';

import * as styles from './Home.styles';

const Home: React.FC = () => {

  return (
    <>
      <styles.Wrapper>
        <styles.Content>
            <styles.Logo src={Logo} />

            <styles.Main>
                <styles.Title>
                    Leve felicidade para o mundo
                </styles.Title>
                <styles.Subtitle>
                    Visite orfanatos e mude o dia de muitas crianças.
                </styles.Subtitle>
            </styles.Main>
  
            <styles.Location>
                <styles.State>
                    São Paulo
                </styles.State>
                <styles.City>
                    Itapevi
                </styles.City>
            </styles.Location>

            <styles.ChangePage>
              <Link to={APP_ROUTES.ORPHANAGES}>
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
              </Link>
            </styles.ChangePage>
           
        </styles.Content>
      </styles.Wrapper>
    </>
  );
}

export default Home;
