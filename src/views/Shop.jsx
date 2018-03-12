import {Link} from 'react-router-dom';
import {Button } from 'react-md';
import style from './Shop.module.css';
import {injectState} from 'freactal';

export default injectState(({state}) => <div className={style['content-frame']}>
  <article className={style['content-frame__inner']}>
    {state.step < 3 ? <div>Oops, <Link to="/">Start Over</Link></div> : <div>
      <h2>The Shopping Page..</h2>
      <div>Here is where you can shop, <b>{state.name}</b> </div>
    </div>}
  </article>
</div>);