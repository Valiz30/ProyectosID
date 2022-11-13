import React from 'react';
import cn from 'classnames';

import styles from './Menu.module.scss';

export default function Menu(props) {
  return (
    <div className={cn(styles.menu, 'menu')}>
      <div className={styles.imagen}>
        <img
          className={styles.imagenPlatillo}
          src={require('assets/3b0eefef7dd5b3694a082c2481d8a37e.png')}
          alt="alt text"
        />
      </div>

      <div className={styles.barra}>
        <div className={styles.barra__Botones}>
          <div className={styles.barra__Botones__item}>
            <button className={styles.inicio} onClick={() => alert('It is clickable')}>
              <span className={styles.btn__text}>Inicio</span>
            </button>
          </div>
          <div className={styles.barra__Botones__spacer} />
          <div className={styles.barra__Botones__item}>
            <button className={styles.menu1} onClick={() => alert('It is clickable')}>
              <span className={styles.btn__text}>Menú</span>
            </button>
          </div>
          <div className={styles.barra__Botones__spacer} />
          <div className={styles.barra__Botones__item1}>
            <button className={styles.ubicacion} onClick={() => alert('It is clickable')}>
              <span className={styles.btn__text1}>Ubicacion</span>
            </button>
          </div>
          <div className={styles.barra__Botones__spacer} />
          <div className={styles.barra__Botones__item2}>
            <button className={styles.contactos} onClick={() => alert('It is clickable')}>
              <span className={styles.btn__text2}>Contactos</span>
            </button>
          </div>
        </div>
      </div>

      <img className={styles.decorator} src={require('assets/06aea325e06d41dc94bd78e2442d557f.png')} alt="alt text" />
      <h1 className={styles.hero_title}>Cocinna Poblanna</h1>

      <div className={styles.infoPlatillo}>
        <div className={styles.datos}>
          <h1 className={styles.nombrePlatillo}>Nombre Platillo</h1>
          <h5 className={styles.detallesPlatillo}>Descripcion platillo</h5>
        </div>
      </div>

      <div className={styles.botonesID}>
        <div className={styles.botonesID__item}>
          <img
            className={styles.izquierda}
            src={require('assets/7f33a9b036ea351d4972a2ec67b321c1.png')}
            alt="alt text"
          />
        </div>
        <div className={styles.botonesID__spacer} />
        <div className={styles.botonesID__item}>
          <img className={styles.derecha} src={require('assets/7f33a9b036ea351d4972a2ec67b321c1.png')} alt="alt text" />
        </div>
      </div>
    </div>
  );
}

Menu.inStorybook = true;
