import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import * as React from 'react';

import { CONTAINER_WIDTH } from '../src';
// @ts-ignore TS doesn't recognize an image as a valid import.
import heroBackground from './hero-background.png';

const useMainStyles = makeStyles({
  thirds: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '1rem',
    paddingBottom: '40px',
    marginBottom: '72px',
  },
  heroBackground: {
    position: 'absolute',
    top: 0,
    height: '620px',
    width: '100%',
  },
  heroText: {
    position: 'relative',
    maxWidth: '720px',
    paddingTop: '92px',
    paddingBottom: tokens.spacingVerticalXXXL,
    display: 'grid',
    rowGap: tokens.spacingVerticalXXXL,
  },
  backgroundImage: {
    width: '100%',
    height: '620px',
    objectFit: 'cover',
  },
  gradientTransition: {
    height: '340px',
    width: '100%',
    position: 'absolute',
    bottom: '0',
  },
  container: {
    position: 'relative',
    maxWidth: CONTAINER_WIDTH,
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    [`@media screen and (max-width: ${CONTAINER_WIDTH})`]: {
      paddingRight: tokens.spacingHorizontalL,
      paddingLeft: tokens.spacingHorizontalL,
    },
  },
  mockCard: {
    height: '300px',
  },
  titleMarginTop: {
    paddingTop: '72px',
  },
  titleMarginBottom: {
    paddingBottom: tokens.spacingVerticalXXXL,
  },
});

export const HeroSample = () => {
  const classes = useMainStyles();
  const space = useSpaceStyles();

  return (
    <div>
      <div className={classes.heroBackground} aria-hidden="true">
        <img className={classes.backgroundImage} src={heroBackground as string} alt="" />
        <div
          // @todo File a bug on Griffel.
          style={{
            background: `linear-gradient(180deg, transparent, ${tokens.colorNeutralBackground1})`,
          }}
          className={classes.gradientTransition}
        />
      </div>
      <div className={classes.container}>
        <Text block as="h1" variant="jumbo" className={classes.titleMarginTop}>
          {'Start building'}
          <br />
          {'with Arbutus'}
        </Text>
        <Text block variant="headline" className={classes.titleMarginBottom}>
          A library of all sort of useful building blocks for documentation sites.
        </Text>
        <div className={classes.thirds}>
          <Tile variant="card" className={classes.mockCard}>
            &nbsp;
          </Tile>
          <Tile variant="card" className={classes.mockCard}>
            &nbsp;
          </Tile>
          <Tile variant="card" className={classes.mockCard}>
            &nbsp;
          </Tile>
        </div>
      </div>
      <div className={classes.container}>
        <Text block as="p" variant="description" className={space.mb12}>
          Scroll down to see header animation. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
          Turpis cursus in hac habitasse platea dictumst quisque. Sed ullamcorper morbi
          tincidunt ornare massa eget. Dolor sit amet consectetur adipiscing elit.
          Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
          Bibendum ut tristique et egestas quis ipsum. Maecenas accumsan lacus vel
          facilisis volutpat. Ac tortor dignissim convallis aenean. Magnis dis parturient
          montes nascetur ridiculus mus mauris. Felis eget velit aliquet sagittis id.
          Hendrerit dolor magna eget est lorem. Quam id leo in vitae turpis massa sed
          elementum tempus. Tortor condimentum lacinia quis vel. Lacus vel facilisis
          volutpat est velit. Morbi tristique senectus et netus et malesuada. Fames ac
          turpis egestas maecenas pharetra. Integer malesuada nunc vel risus commodo
          viverra maecenas. Sit amet justo donec enim diam vulputate. Fermentum et
          sollicitudin ac orci phasellus egestas tellus rutrum tellus. Nulla at volutpat
          diam ut venenatis tellus in. Sed felis eget velit aliquet. Egestas diam in arcu
          cursus euismod quis. Convallis tellus id interdum velit laoreet id. Integer quis
          auctor elit sed vulputate mi. Sed id semper risus in hendrerit gravida rutrum.
          Nec ultrices dui sapien eget mi proin. Ipsum dolor sit amet consectetur
          adipiscing elit duis tristique. Adipiscing bibendum est ultricies integer.
          integer. Mattis nunc sed blandit libero volutpat sed cras ornare. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Ipsum consequat nisl vel
          pretium lectus quam. Vitae auctor eu augue ut lectus. Placerat vestibulum lectus
          mauris ultrices eros. Amet aliquam id diam maecenas ultricies mi eget. Quis vel
          eros donec ac odio tempor. Tristique nulla aliquet enim tortor at auctor urna.
          Venenatis tellus in metus vulputate eu scelerisque felis. Est ullamcorper eget
          nulla facilisi etiam dignissim diam quis enim. Eget arcu dictum varius duis at
          consectetur lorem donec. Justo donec enim diam vulputate ut. Blandit volutpat
          maecenas volutpat blandit aliquam etiam erat velit. Quis enim lobortis
          scelerisque fermentum dui. Habitant morbi tristique senectus et netus et
          malesuada fames ac. At ultrices mi tempus imperdiet nulla malesuada pellentesque
          elit. Nisl suscipit adipiscing bibendum est ultricies integer. Tincidunt
          lobortis feugiat vivamus at augue eget arcu dictum varius. Feugiat pretium nibh
          ipsum consequat. Ante metus dictum at tempor commodo ullamcorper a. Facilisis
          volutpat est velit egestas dui id. Ipsum dolor sit amet consectetur adipiscing
          elit ut aliquam purus. Enim diam vulputate ut pharetra sit. Rhoncus urna neque
          viverra justo. Tempus egestas sed sed risus. Gravida arcu ac tortor dignissim
          convallis aenean et tortor at. Et ligula ullamcorper malesuada proin libero nunc
          consequat interdum varius. Lobortis mattis aliquam faucibus purus. Eget velit
          aliquet sagittis id consectetur purus ut faucibus. Turpis egestas integer eget
          aliquet. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Turpis
          egestas sed tempus urna et pharetra. Sed lectus vestibulum mattis ullamcorper
          velit. Sit amet consectetur adipiscing elit. Pretium aenean pharetra magna ac
          placerat vestibulum. Venenatis tellus in metus vulputate eu scelerisque felis.
          Laoreet id donec ultrices tincidunt arcu non sodales neque. Congue nisi vitae
          suscipit tellus mauris. Convallis tellus id interdum velit laoreet id. Amet est
          placerat in egestas erat imperdiet sed euismod nisi. Pretium viverra suspendisse
          potenti nullam ac tortor vitae. A cras semper auctor neque vitae. Ut porttitor
          leo a diam sollicitudin tempor id eu. Facilisi nullam vehicula ipsum a. Facilisi
          etiam dignissim diam quis enim lobortis scelerisque. Mi ipsum faucibus vitae
          aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis.
          Pellentesque id nibh tortor id. Sit amet mattis vulputate enim. Sagittis aliquam
          malesuada bibendum arcu vitae elementum curabitur vitae nunc. Malesuada proin
          libero nunc consequat interdum varius sit amet mattis. Metus vulputate eu
          scelerisque felis imperdiet proin. Etiam tempor orci eu lobortis elementum nibh.
          Nunc non blandit massa enim nec dui nunc. Amet luctus venenatis lectus magna
          fringilla urna porttitor rhoncus dolor. Id eu nisl nunc mi. Mauris a diam
          maecenas sed enim ut sem. Quis lectus nulla at volutpat diam ut venenatis tellus
          in. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Sed tempus urna et
          pharetra pharetra massa massa. Molestie nunc non blandit massa enim. Morbi non
          arcu risus quis varius quam. Cursus mattis molestie a iaculis at erat
          pellentesque. Vitae congue eu consequat ac felis donec et. Commodo nulla
          facilisi nullam vehicula ipsum a arcu. Faucibus in ornare quam viverra.
          Ultricies mi eget mauris pharetra. Convallis a cras semper auctor neque vitae.
          Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Purus in
          mollis nunc sed id semper. Egestas pretium aenean pharetra magna ac placerat
          vestibulum lectus mauris. Nunc vel risus commodo viverra maecenas accumsan lacus
          vel facilisis. Sit amet tellus cras adipiscing enim eu. Nunc lobortis mattis
          aliquam faucibus. Maecenas pharetra convallis posuere morbi. Sed turpis
          tincidunt id aliquet risus feugiat. Vestibulum lorem sed risus ultricies
          tristique nulla aliquet enim tortor. Nunc id cursus metus aliquam eleifend. Amet
          commodo nulla facilisi nullam vehicula. Amet consectetur adipiscing elit
          pellentesque habitant. At consectetur lorem donec massa sapien faucibus et
          molestie. Urna condimentum mattis pellentesque id. Viverra maecenas accumsan
          lacus vel facilisis volutpat est velit egestas. Pellentesque pulvinar
          pellentesque habitant morbi tristique senectus et netus. Integer feugiat
          scelerisque varius morbi enim nunc faucibus. Lectus arcu bibendum at varius vel.
          Varius vel pharetra vel turpis. Tellus integer feugiat scelerisque varius morbi.
          Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend
          donec. Est placerat in egestas erat imperdiet sed euismod nisi. Mi eget mauris
          pharetra et ultrices neque ornare. Viverra orci sagittis eu volutpat odio
          facilisis. Tellus in hac habitasse platea dictumst. Enim nulla aliquet porttitor
          lacus luctus accumsan. Non odio euismod lacinia at quis risus sed. Vitae auctor
          eu augue ut lectus arcu bibendum at. Lectus proin nibh nisl condimentum id
          venenatis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nulla
          pellentesque dignissim enim sit. Porttitor rhoncus dolor purus non enim praesent
          elementum facilisis. Risus sed vulputate odio ut enim blandit volutpat. Odio
          morbi quis commodo odio aenean sed adipiscing diam. Adipiscing vitae proin
          sagittis nisl rhoncus mattis rhoncus. Habitant morbi tristique senectus et netus
          et malesuada. Lobortis mattis aliquam faucibus purus in massa tempor nec. Vitae
          purus faucibus ornare suspendisse sed. Facilisi morbi tempus iaculis urna id.
          Risus nullam eget felis eget. Purus sit amet luctus venenatis lectus magna
          fringilla urna porttitor. Mi bibendum neque egestas congue quisque egestas diam
          in arcu. Morbi tristique senectus et netus et malesuada. Aliquam purus sit amet
          luctus venenatis lectus magna fringilla urna. Fringilla phasellus faucibus
          scelerisque eleifend donec pretium vulputate sapien. Eu nisl nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper. Volutpat odio facilisis mauris sit amet
          massa vitae tortor. Feugiat sed lectus vestibulum mattis ullamcorper velit sed
          ullamcorper morbi.
        </Text>
      </div>
    </div>
  );
};
