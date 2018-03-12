import {Link} from 'react-router-dom';
import {Button } from 'react-md';
import style from './Start.module.css';

export default () => <div className={style['content-frame']}>
  <article className={style['content-frame__inner']}>
  <h2>Apply to InstaCart Canada.</h2>
  <div><Link to="/apply"><Button raised primary>Apply</Button></Link></div>
  </article>
</div>