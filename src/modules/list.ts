// 액션
const GET_SOUNDLIST = 'list/GET_SOUNDLIST'as const;
const SET_SOUNDLIST_PROPERTY = 'list/SET_SOUNDLIST_PROPERTY'as const;
const HANDLE_LOADING_ON = 'list/HANDLE_LOADING_ON'as const;
const HANDLE_DEGREE = 'list/HANDLE_DEGREE'as const;

//액션 생성 함수
export const getSoundList = (sounds: any[]) => ({
  type: GET_SOUNDLIST,
  payload: {
    sounds
  }
});
export const setSoundListProperty = (modifiedSoundList: any[]) => ({
  type: SET_SOUNDLIST_PROPERTY,
  payload: {
    modifiedSoundList
  }
});
export const handleLoadingOn = () => ({ type: HANDLE_LOADING_ON });
export const handleDegree = (deg: number) => ({
  type: HANDLE_DEGREE,
  payload: {
    deg
  }
});

// 액션 타입
type ListAction =
  | ReturnType<typeof getSoundList> | ReturnType<typeof setSoundListProperty>
  | ReturnType<typeof handleLoadingOn> | ReturnType<typeof handleDegree>

// 스테이트 초기값
interface ListState {
  soundList: any[];
  isLoadingOn: boolean;
  degree: number;
}

const initialState: ListState = {
  soundList: [],
  isLoadingOn: false,
  degree: 220
}

// 리듀서
const list = (state = initialState, action: ListAction) => {
  switch(action.type) {
    case GET_SOUNDLIST:
      return Object.assign({}, state, {soundList: action.payload.sounds})
    case SET_SOUNDLIST_PROPERTY:
      return Object.assign({}, state, {soundList: action.payload.modifiedSoundList})
    case HANDLE_LOADING_ON:
      return Object.assign({}, state, {isLoadingOn: !state.isLoadingOn})
    case HANDLE_DEGREE:
      return Object.assign({}, state, {degree: action.payload.deg})
    default:
      return state;
  }
}


export default list;

