import {Link} from 'react-router-dom';
import style from './Background.module.css';
import {Select, SelectionControl, Button} from 'react-md';

import PersonalInfoItem from './PersonalInfoItem';
import {injectState} from 'freactal' ;

export default injectState(({effects, state}) => {
  return <div className={style['content-frame']}>
    <article className={style['content-frame__inner']}>
      <PersonalInfoItem label="Name" id="name-field" placeholder="Please let us know your name."
                        inputState={state.bgState}
                        myStep={2}
                        step={state.step}
                        nextStep={effects.finishBGCheck}
      >
        <SelectionControl
          id="checkbox-background"
          name="simple-checkboxes[]"
          label="Consent to a Background Check"
          type="checkbox"
          value={state.bgCheck}
          onChange={effects.chooseBGCheck}
        />
      </PersonalInfoItem>
      {state.step < 3 ? '' : <div>
        Thanks a whole lot! Lets go Shopping!:
        <Link to="/shop"><Button raised primary>Start Shopping</Button></Link>
      </div>}
      {state.step < 2 ? <div>Oops! <Link to="/">Start Over</Link></div> : ''}
    </article>
  </div>
});