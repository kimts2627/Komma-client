import { combineReducers } from 'redux';
import color from './color';
import signin from './signin';
import timer from './timer';
import selected from './selected';
import intro from './intro'
import setting from './setting';
import mixtape from './mixtape';
import list from './list';

const rootReducer = combineReducers({
  color,
  signin,
  timer,
  selected,
  intro,
  setting,
  mixtape,
  list
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
