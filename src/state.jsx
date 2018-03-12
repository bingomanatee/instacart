import {provideState, update} from 'freactal';

const wrapContainerWithState = provideState({
  initialState: () => {
    return ({name: '', step: 0, age: '', bgCheck: false})
  },
  effects: {
    chooseName: update((state, name) => ({name})),
    finishName: update({step: 1}),
    chooseBGCheck: update((state, bgCheck) =>({bgCheck})),
    chooseAge: update((state, age) => ({age})),
    finishAge: update({step: 2}),
    finishBGCheck: update({step: 3})
  },
  computed: {
    nameState: ({name}) => {
      console.log('nameState name: ', name);
      if (!name) {
        return {state: 'error', label: 'Empty; please complete'}
      } else if (name.length < 6) {
        return {state: 'error', label: 'name too short'};
      } else if (!/[\w]+( )+[\w]+/.test(name)) {
        return {state: 'error', label: 'enter first and last name'}
      } else {
        return {state: 'valid', label: ''};
      }
    },

    bgState: ({bgCheck}) => {
      if (bgCheck) {
        return {state: 'valid', label: ''};
      } else {
        return {state: 'invalid', label: 'Please consent'}
      }
    },
    ageState: ({age}) => {
      if (isNaN(age)) {
        return {state: 'error', label: 'age must be a number'};
      }else if (age < 18) {
        return {state: 'error', label: 'you must be at least 18'};
      } else {
        return {state: 'valid', label: ''}
      }
    }

  },

  middleware: [
    (context) => {
      console.log('state is now:', context.state);
      return context;
    }
  ]
});

export default wrapContainerWithState;