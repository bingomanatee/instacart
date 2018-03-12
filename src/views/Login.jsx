import {Link} from 'react-router-dom';
import style from './Login.module.css';
import {TextField, Button} from 'react-md';

import PersonalInfoItem from './PersonalInfoItem';
import {injectState} from 'freactal' ;

export default injectState(({effects, state}) => {
  return <div className={style['content-frame']}>
    <article className={style['content-frame__inner']}>
      <h1>Good Day! We'd like to get to know you.</h1>

      <section>
        <PersonalInfoItem label="Name" id="name-field" placeholder="Please let us know your name."
                          inputState={state.nameState}
                          myStep={0}
                          step={state.step}
                          nextStep={effects.finishName}
        >
          {state.step === 0 ? <TextField
            id="name-input"
            lineDirection="center"
            placeholder="Please let us know your name"
            value={state.name}
            onChange={effects.chooseName}
          /> : state.name}
        </PersonalInfoItem>
        <PersonalInfoItem label="Age" id="name-field" placeholder="Please let us know your name."
                          inputState={state.ageState}
                          myStep={1}
                          step={state.step}
                          nextStep={effects.finishAge}
        >
          {state.step === 1 ? <TextField
            id="name-input"
            lineDirection="center"
            min={1}
            max={100}
            type="number"
            placeholder="Please let us know your age"
            value={state.age}
            onChange={effects.chooseAge}
          /> : state.age}
        </PersonalInfoItem>
        {state.step < 2 ? '' : <div>
          Thanks a whole lot! Now we just have one more step:
          <Link to="/background"><Button raised primary>Background Check</Button></Link>
        </div>}
      </section>
    </article>
  </div>;
})