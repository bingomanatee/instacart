import style from './PersonalInfoItem.module.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-md';

export default ({label, placeholder, id, children, inputState, myStep, step, nextStep}) => (step < myStep) ? '' : <div className={style['pii-frame']}>
  <div className={style['pii-frame__label']}><label>{label}</label></div>
  <div className={style['pii-frame__main']}>
    {children}
  </div>
  <div className={`${style['pii-frame__state']} ${style[inputState.state]}`}>
    {(step !== myStep) ? '' : inputState.state === 'valid' ? <Button primary raised onClick={nextStep}>Continue</Button> : inputState.label}
    </div>
</div>;