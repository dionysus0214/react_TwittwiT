export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '당근',
    },
    content: '첫 번째 게시글 #해시태그',
    Images: [{
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }],
    Comments: [{
      User: {
        nickname: '고구마',
      },
      content: '얼른 사고싶어요~'
    }],
  }],
  imagePaths: [], // 이미지 업로드 시 경로
  postAdded: false, // 게시글 추가가 완료되면 true로 변경
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}
const dummyPost = {
  id: 2,
  content: '더미 데이터입니다',
  User: {
    id: 1,
    nickname: '감자',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;