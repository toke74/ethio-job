import {GET_JOBS} from '../actions/types';
import sampleJobs from '../../data/sampleJob';

const initialState = {
  jobs: sampleJobs,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        // jobs: action.payload,
      };

    default:
      return state;
  }
};
