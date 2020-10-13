import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import { APP_ROUTES } from 'utils/enums/internal-routes';
import icon from '../../static/images/icon.svg';

import { MAPBOX_CONFIG } from '../../utils/enums/config';

import * as styles from './Orphanages.styles';
import 'leaflet/dist/leaflet.css';

const Orphanages: React.FC = () => {
  const classes = styles.useStyles();

  return (
    <>
      <styles.Wrapper>
        <styles.Aside>
          <styles.Header>
              <styles.Icon src={icon} alt='happy' />

              <styles.Title>
                Escolha um orfanato no mapa
              </styles.Title>

              <styles.Subtitle>
                Muitas crianças estão esperando a sua visita {`:)`}
              </styles.Subtitle>          
          </styles.Header>

          <styles.Footer>
              <styles.State>
                  São Paulo
              </styles.State>
              <styles.City>
                Itapevi
              </styles.City>
          </styles.Footer>

        </styles.Aside>
        
        <Map
          center={[-13.163136,-72.8251196]}
          zoom={10}
          style={classes.map}>
          
          <TileLayer
            url={MAPBOX_CONFIG} />
        </Map>
        
        <styles.CreateOrphanage>
          <Link to={APP_ROUTES.ORPHANAGES}>
            <FiPlus size={32} color="#FFF" />
          </Link>
        </styles.CreateOrphanage>

      </styles.Wrapper>
    </>
  );
}

export default Orphanages;
